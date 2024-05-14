import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchGenres } from '../../services/moviesServices';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';

function CatalogPage() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMovies();
            setMovies(data);
            if (genres.length === 0) {
                const genresData = await fetchGenres();
                setGenres(genresData);
            }
        };

        fetchData();
    }, [genres]);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
      // Lógica de búsqueda aquí
      const results = movies.filter(movie => (
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.original_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.release_date.toLowerCase().includes(searchTerm.toLowerCase())
        //movie.author.toLowerCase().includes(searchTerm.toLowerCase())
      ));
      setSearchResults(results);
    };

    return (

        <div className="container mx-auto px-4">
        <SearchBar handleSearch={handleSearch} />
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[60px]">
          {searchResults.length > 0 ? (
            searchResults.map(movie => (
              <div key={movie.id} className="bg-gray-200 p-4 rounded-md">
                <MovieCard key={movie.id} movie={movie} genres={genres}/>
              </div>
            ))
          ) : (
            movies.map(movie => (
              <div key={movie.id} className="bg-gray-200 p-4 rounded-md">
                <MovieCard key={movie.id} movie={movie} genres={genres}/>
              </div>
            ))
          )}
        </div>
      </div>
    );
}

export default CatalogPage;