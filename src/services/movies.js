import MovieCollection from '../db/models/movies.js';

export const addMovie = async (payload) => {
  const newMovie = await MovieCollection.create({
    ...payload,
  });
  console.log(payload);

  return {
    newMovie,
  };
};

export const updateMovies = async ({ _id, payload, options = {} }) => {
  const data = await MovieCollection.findOneAndUpdate({ _id }, payload, {
    ...options,
    new: true,
  });
  //   console.log(data);

  return data;
};

export const deleteMovie = (filter) =>
  MovieCollection.findByIdAndDelete(filter);
