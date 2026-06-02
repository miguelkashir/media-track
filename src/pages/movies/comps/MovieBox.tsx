import type { MovieType } from '../../../types/MovieType';

export const MovieBox = ({ movie }: { movie: MovieType }) => {
  return (
    <div key={movie.id}>
      <img
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.title}
        width={100}
      />
    </div>
  );
};
