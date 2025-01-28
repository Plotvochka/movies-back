import * as movieService from '../services/movies.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseFilterParams } from '../utils/parseMovieFilterParams.js';

export const getMoviesController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const filter = parseFilterParams(req.query);
  const movies = await movieService.getAllMovies({ page, perPage, filter });

  res.json({
    status: 200,
    message: 'Successfully found movies!',
    data: movies,
  });
};

export const getMovieByIdController = async (req, res) => {
  const { id: _id } = req.params;
  console.log(_id);
  const movies = await movieService.getMovieById(_id);

  if (!movies) {
    res.status(404).json({
      message: 'Movie not found',
    });
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found movies with id ${_id}!`,
    data: movies,
  });
};

export const addMovieController = async (req, res) => {
  const movie = await movieService.addMovieService(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a movie!',
    data: movie,
  });
};

export const updateMovieController = async (req, res) => {
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
    isFavourite,
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
  if (isFavourite) {
    payload.isFavourite = isFavourite;
  }
  const updatedMovie = await movieService.updateMoviesService({
    payload,
    _id,
  });
  res.json({
    status: 200,
    message: 'Successfully updated the movie!',
    data: updatedMovie,
  });
};

export const deleteMovieController = async (req, res) => {
  const { id: _id } = req.params;

  const data = await movieService.deleteMovieService({ _id });
  if (!data) {
    throw createHttpError(404, `Movie with id=${_id} not found`);
  }
  res.status(204).send();
};
