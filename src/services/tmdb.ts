const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_KEY;

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
        accept: 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`);
  }

  return response.json();
};
