const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://lakshayne:tyrell@cluster0.siopf.mongodb.net/moviesDB?retryWrites=true&w=majority"
);

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  rating: Number,
  streaming_link: String,
});

const Movie = mongoose.model("Movie", movieSchema);

app.get("/ping", (req, res) => res.send("Me here!"));

app.post("/movies", function (req, res) {
  console.log(req.body);
  const movie = new Movie(req.body);
  movie.save();
  res.send("Record Inserted");
});

app.get("/movies", async function (req, res) {
  const movie = await Movie.find({});
  res.send(movie);
});

app.get("/search", async function (req, res) {
  const movie = await Movie.find({ $or: [{ title: query }, { genre: query }] });
  res.send(movie);
});

app.put("/movies/:id", async function (req, res) {
  const id = req.params.id
  const doc =await Movie.findOneAndUpdate({_id:id},req.body)
  res.send("Updated!")
});

app.delete("/movies/:id", async function (req, res) {
  const id = req.params.id
  const doc =await Movie.deleteOne({_id:id})
  res.send("Record Deleted!")
});

app.listen("3000", () => console.log("server is running"));
