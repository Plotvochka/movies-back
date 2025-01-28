const parseValue = (value) => {
  const isString = typeof value === 'string';

  if (!isString) return;

  const title = (value) => typeof value === 'string';
  const director = (value) => typeof value === 'string';
  const actors = (value) => typeof value === 'string';
  const genre = (value) => typeof value === 'string';
  const releaseDate = (value) => typeof value === 'number';
  const isFavourite = (value) => ['true', 'false'].includes(value);

  if (isFavourite(value)) return value;
  if (title(value)) return value;
  if (director(value)) return value;
  if (actors(value)) return value;
  if (genre(value)) return value;
  if (releaseDate(value)) return value;
  return;
};

export const parseFilterParams = (query) => {
  const { title, director, actors, genre, releaseDate, isFavourite } = query;

  const parsedIsFavourite = parseValue(isFavourite);
  const parsedTitle = parseValue(title);
  const parsedDirector = parseValue(director);
  const parsedActors = parseValue(actors);
  const parsedGenre = parseValue(genre);
  const parsedReleaseDate = parseValue(releaseDate);

  return {
    isFavourite: parsedIsFavourite,
    title: parsedTitle,
    director: parsedDirector,
    actors: parsedActors,
    genre: parsedGenre,
    releaseDate: parsedReleaseDate,
  };
};
