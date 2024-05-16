import React, { useState } from 'react';
import { useRentalContext } from '../../hooks/RentalContext';
import Image from '../ImageDetail/ImageDetail';
import './RentalModal.css';

const RentalModal = ({ movie, closeModal, confirmRent }) => {
    const { addRentedMovie } = useRentalContext();
    const [rentalDuration, setRentalDuration] = useState(1);

    const handleConfirm = () => {
        const rentedMovie = {
            ...movie,
            rentalDuration,
            rentalDate: new Date().toLocaleDateString(),
        };
        addRentedMovie(rentedMovie);
        confirmRent(rentalDuration);
        closeModal();
    };

    return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 text-center">
                <h2 className="text-2xl font-bold mb-4">Rent {movie.title}</h2>
                <div className="flex justify-center items-center mb-4">
                    <Image image={`${process.env.REACT_APP_BASE_URL_IMG}${movie.poster_path}`} />
                </div>
                <div className="mb-4">
                    <p className="text-lg">Title: {movie.title}</p>
                    <p className="text-lg">Director: {movie.director}</p>
                    <p className="text-lg">Year: {movie.release_date}</p>
                    <p className="text-lg">Duration: {movie.duration} min</p>
                </div>
                <label className="block mb-4">
                    Rent Duration (days):
                    <input
                        type="number"
                        value={rentalDuration}
                        onChange={(e) => setRentalDuration(e.target.value)}
                        min="1"
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                    />
                </label>
                <button
                    onClick={handleConfirm}
                    className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                >
                    Confirm Rent
                </button>
                <button
                    onClick={closeModal}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default RentalModal;
