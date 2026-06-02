import { useState } from 'react';
import { searchMovies } from '../../services/tmdb';
import { Search } from './comps/Search';
import type { MovieType } from '../../types/MovieType';
import { MovieBox } from './comps/MovieBox';

const theMatrix: MovieType = {
  adult: false,
  backdrop_path: '/tlm8UkiQsitc8rSuIAscQDCnP8d.jpg',
  genre_ids: [28, 878],
  id: 603,
  title: 'The Matrix',
  original_language: 'en',
  original_title: 'The Matrix',
  overview:
    'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
  popularity: 253.3552,
  poster_path: '/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
  release_date: '1999-03-31',
  softcore: false,
  video: false,
  vote_average: 8.247,
  vote_count: 27919,
};

export const Movies = () => {
  const [movies, setMovies] = useState<MovieType[]>([theMatrix]);

  const handleSearch = async (query: string) => {
    const data = await searchMovies(query);

    setMovies(data.results);
  };

  return (
    <div className="flex flex-col gap-4">
      <Search onSearch={handleSearch} />

      {movies.length > 0 && (
        <div className="flex flex-wrap gap-4 cursor-pointer">
          {movies.map((movie) => (
            <MovieBox key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
