import React, { createContext, useContext, useState } from 'react';

const RentalContext = createContext();

export const useRentalContext = () => useContext(RentalContext);

const RentalProvider = ({ children }) => {
    const [rentedMovies, setRentedMovies] = useState([]);

    const addRentedMovie = (movie) => {
        setRentedMovies([...rentedMovies, movie]);
    };

    const removeRentedMovie = (movieId) => {
        setRentedMovies(rentedMovies.filter(movie => movie.id !== movieId));
    };

    return (
        <RentalContext.Provider value={{ rentedMovies, addRentedMovie, removeRentedMovie }}>
            {children}
        </RentalContext.Provider>
    );
};

export default RentalProvider;
