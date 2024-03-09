import express, { Express, Request, Response } from "express";
import mongoose, { Document } from "mongoose";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://lakshayne:tyrell@cluster0.siopf.mongodb.net/moviesDB?retryWrites=true&w=majority"
);

interface Movie extends Document {
  title: string;
  genre: string[];
  rating: number;
  streaming_link: string;
}

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  rating: Number,
  streaming_link: String,
});

const MovieModel = mongoose.model<Movie>("Movie", movieSchema);

app.get("/ping", (req: Request, res: Response) => res.send("Me here!"));

app.post("/movies", async (req: Request, res: Response) => {
  console.log(req.body);
  const movie = new MovieModel(req.body);
  await movie.save();
  res.send("Record Inserted");
});

app.get("/movies", async (req: Request, res: Response) => {
  const movies = await MovieModel.find({});
  res.send(movies);
});

app.get("/search", async (req: Request, res: Response) => {
  const query = req.query.q;
  const movies = await MovieModel.find({
    $or: [{ title: query }, { genre: query }],
  });
  res.send(movies);
});

app.put("/movies/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  await MovieModel.findByIdAndUpdate(id, req.body);
  res.send("Updated!");
});

app.delete("/movies/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  await MovieModel.findByIdAndDelete(id);
  res.send("Record Deleted!");
});

app.listen(3000, () => console.log("server is running"));
