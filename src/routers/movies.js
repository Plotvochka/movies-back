import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import * as validationSchema from '../validation/movies.js';
import * as movieController from '../controllers/movies.js';

const movieRouter = Router();

movieRouter.post(
  '/movie',
  validateBody(validationSchema.addMovieSchema),
  ctrlWrapper(movieController.addMovie),
);

movieRouter.patch(
  '/movie/:id',
  isValidId,
  validateBody(validationSchema.addMovieSchema),
  ctrlWrapper(movieController.updateMovie),
);

movieRouter.delete(
  '/movie/:id',
  isValidId,
  ctrlWrapper(movieController.deleteMovie),
);

export default movieRouter;
