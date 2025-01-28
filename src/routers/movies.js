import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import * as validationSchema from '../validation/movies.js';
import * as movieController from '../controllers/movies.js';

const movieRouter = Router();

movieRouter.get('/movie', movieController.getMoviesController);

movieRouter.get('/movie/:id', movieController.getMovieByIdController);

movieRouter.post(
  '/movie',
  validateBody(validationSchema.addMovieSchema),
  ctrlWrapper(movieController.addMovieController),
);

movieRouter.patch(
  '/movie/:id',
  isValidId,
  validateBody(validationSchema.addMovieSchema),
  ctrlWrapper(movieController.updateMovieController),
);

movieRouter.delete(
  '/movie/:id',
  isValidId,
  ctrlWrapper(movieController.deleteMovieController),
);

export default movieRouter;
