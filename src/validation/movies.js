import Joi from 'joi';

export const addMovieSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  actors: Joi.string().optional(),
  director: Joi.string().optional(),
  genre: Joi.string().optional(),
  rating: Joi.string().optional(),
  releaseDate: Joi.string().optional(),
  image: Joi.string().optional(),
});
