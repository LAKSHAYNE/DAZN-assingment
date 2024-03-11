## Movie Management API Documentation

### Overview

This API provides endpoints to manage movie records in a MongoDB database. It supports basic CRUD operations (Create, Read, Update, Delete) for movie entities.

### Base URL

```
http://localhost:3000
```

### Endpoints

#### 1. Ping

- **Description:** Check server status.
- **Method:** `GET`
- **URL:** `/ping`
- **Response Body:** 
  - `string`: "Me here!"
- **Response Status Codes:**
  - `200 OK`: Server is running.

#### 2. Insert Movie

- **Description:** Insert a new movie record.
- **Method:** `POST`
- **URL:** `/movies`
- **Request Body:** 
  - `title`: string (required)
  - `genre`: string[] (required)
  - `rating`: number (required)
  - `streaming_link`: string
- **Response Body:** 
  - `string`: "Record Inserted"
- **Response Status Codes:**
  - `200 OK`: Record successfully inserted.
  - `500 Internal Server Error`: Error inserting record.

#### 3. Get All Movies

- **Description:** Retrieve all movies.
- **Method:** `GET`
- **URL:** `/movies`
- **Response Body:** 
  - `Array`: List of movie objects
- **Response Status Codes:**
  - `200 OK`: Movies successfully retrieved.
  - `500 Internal Server Error`: Error fetching movies.

#### 4. Search Movies

- **Description:** Search movies by title or genre.
- **Method:** `GET`
- **URL:** `/search?q={query}`
- **Query Parameters:**
  - `q`: Search query
- **Response Body:** 
  - `Array`: List of movie objects matching the query
- **Response Status Codes:**
  - `200 OK`: Movies successfully retrieved.
  - `500 Internal Server Error`: Error searching movies.

#### 5. Update Movie

- **Description:** Update movie by ID.
- **Method:** `PUT`
- **URL:** `/movies/:id`
- **Request Params:**
  - `id`: Movie ID
- **Request Body:** 
  - Updated movie object
- **Response Body:** 
  - `string`: "Updated!"
- **Response Status Codes:**
  - `200 OK`: Movie successfully updated.
  - `500 Internal Server Error`: Error updating movie.

#### 6. Delete Movie

- **Description:** Delete movie by ID.
- **Method:** `DELETE`
- **URL:** `/movies/:id`
- **Request Params:**
  - `id`: Movie ID
- **Response Body:** 
  - `string`: "Record Deleted!"
- **Response Status Codes:**
  - `200 OK`: Movie successfully deleted.
  - `500 Internal Server Error`: Error deleting movie.

### Server Information

- **Server URL:** http://localhost:3000
- **Server Status:** Running

---

This documentation outlines the usage and behavior of each endpoint provided by the Movie Management API.
