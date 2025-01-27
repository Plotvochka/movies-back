import * as movieService from '../services/movies.js';
import createHttpError from 'http-errors';

export const addMovie = async (req, res) => {
  const movie = await movieService.addMovie(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a movie!',
    data: movie,
  });
};

export const updateMovie = async (req, res) => {
  const { id: _id } = req.params;
  const payload = {};
  const {
    title,
    description,
    actors,
    director,
    genre,
    rating,
    releaseDate,
    image,
  } = req.body;
  if (title) {
    payload.title = title;
  }
  if (description) {
    payload.description = description;
  }
  if (actors) {
    payload.actors = actors;
  }
  if (genre) {
    payload.genre = genre;
  }
  if (director) {
    payload.director = director;
  }
  if (rating) {
    payload.rating = rating;
  }
  if (releaseDate) {
    payload.releaseDate = releaseDate;
  }
  if (image) {
    payload.image = image;
  }
  const updatedMovie = await movieService.updateMovies({
    payload,
    _id,
  });
  console.log(updateMovie);
  res.json({
    status: 200,
    message: 'Successfully updated the movie!',
    data: updatedMovie,
  });
};

export const deleteMovie = async (req, res) => {
  const { id: _id } = req.params;

  const data = await movieService.deleteMovie({ _id });
  if (!data) {
    throw createHttpError(404, `Movie with id=${_id} not found`);
  }
  res.status(204).send();
};
