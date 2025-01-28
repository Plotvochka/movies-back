import MovieCollection from '../db/models/movies.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllMovies = async ({ page = 1, perPage, filter = {} }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const movieQuery = MovieCollection.find();

  if (filter.title) {
    movieQuery.where('title').equals(filter.title);
  }
  if (filter.director) {
    movieQuery.where('director').equals(filter.director);
  }
  if (filter.actors) {
    movieQuery.where('actors').equals(filter.actors);
  }
  if (filter.genre) {
    movieQuery.where('genre').equals(filter.genre);
  }
  if (filter.releaseDate) {
    movieQuery.where('releaseDate').equals(filter.releaseDate);
  }
  if (filter.isFavourite) {
    movieQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const movieCount = await MovieCollection.find()
    .merge(movieQuery)
    .countDocuments();
  const movie = await movieQuery.skip(skip).limit(limit).exec();
  const paginationData = calculatePaginationData(movieCount, perPage, page);

  return {
    movie,
    ...paginationData,
  };
};

export const getMovieById = async (_id) => {
  const movie = await MovieCollection.findById(_id);
  return movie;
};

export const addMovieService = async (payload) => {
  const newMovie = await MovieCollection.create({
    ...payload,
  });
  console.log(payload);

  return {
    newMovie,
  };
};

export const updateMoviesService = async ({ _id, payload, options = {} }) => {
  const data = await MovieCollection.findOneAndUpdate({ _id }, payload, {
    ...options,
    new: true,
  });
  //   console.log(data);

  return data;
};

export const deleteMovieService = (filter) =>
  MovieCollection.findByIdAndDelete(filter);
