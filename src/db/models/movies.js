import { Schema, model } from 'mongoose';

const moviesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    actors: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: null,
    },
    isFavourite: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false },
);

const MovieCollection = model('movie', moviesSchema);
export default MovieCollection;
