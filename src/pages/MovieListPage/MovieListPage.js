import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/moviesServices';
import Carousel from '../../components/Carousel/Carousel';

function MovieListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    fetchData(); // Llama a la función fetchData para obtener las películas al montar el componente
  }, []);

  return (
    <div className='mx-[10%] my-[40px]'>
      <div>
        <h1 className='font-bold mt-4 text-3xl font-boldmy-[40px]'>Trending Movies</h1>
        <Carousel movies={movies} />
        <h1 className='font-bold mt-4 text-3xl font-bold my-[40px]'>Top Rated Movies</h1>
        <Carousel movies={movies} />
      </div>
    </div>
  )
}

export default MovieListPage;