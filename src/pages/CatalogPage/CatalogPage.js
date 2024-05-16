import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchGenres } from '../../services/moviesServices';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import RentalModal from '../../components/RentalModal/RentalModal';

function CatalogPage() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleSearch = (searchTerm) => {
        // Lógica de búsqueda aquí
        const results = movies.filter(movie => (
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.original_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.release_date.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setSearchResults(results);
    };

    const handleRent = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    const confirmRent = (rentalDuration) => {
        // Lógica para confirmar el alquiler de la película
        console.log(`Rented movie: ${selectedMovie.title} for ${rentalDuration} days`);
        closeModal();
    };

    return (
        <div className="container mx-auto px-4">
            <SearchBar handleSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[60px]">
                {searchResults.length > 0 ? (
                    searchResults.map(movie => (
                        <div key={movie.id} className="bg-gray-200 p-4 rounded-md">
                            <MovieCard key={movie.id} movie={movie} genres={genres} onRent={handleRent} />
                        </div>
                    ))
                ) : (
                    movies.map(movie => (
                        <div key={movie.id} className="bg-gray-200 p-4 rounded-md">
                            <MovieCard key={movie.id} movie={movie} genres={genres} onRent={handleRent} />
                        </div>
                    ))
                )}
            </div>
            {isModalOpen && selectedMovie && (
                <RentalModal 
                    movie={selectedMovie} 
                    closeModal={closeModal} 
                    confirmRent={confirmRent} 
                />
            )}
        </div>
    );
}

export default CatalogPage;
