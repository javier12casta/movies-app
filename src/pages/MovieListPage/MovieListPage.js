import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { fetchMovies, fetchGenres } from '../../services/moviesServices';

function MovieListPage() {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Obtener lista de películas
      const moviesData = await fetchMovies();
      setMovies(moviesData);
      // Verificar si ya se han cargado los géneros
      if (genres.length === 0) {
        const genresData = await fetchGenres();
        setGenres(genresData);
      }
    };
    fetchData();
  }, [genres]);

  return (
    <div className="m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} genres={genres}/>
        ))}
      </div>
    </div>
  )
}

export default MovieListPage;