import Joi from 'joi';

export const addMovieSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  actors: Joi.string().optional(),
  director: Joi.string().optional(),
  genre: Joi.string().optional(),
  rating: Joi.number().optional(),
  releaseDate: Joi.number().optional(),
  image: Joi.string().optional(),
  isFavourite: Joi.boolean().default(false),
});
