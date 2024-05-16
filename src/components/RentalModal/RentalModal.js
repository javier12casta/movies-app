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
        <div className="modal">
            <div className="modal__content">
                <h2 className="modal__title">Rent {movie.title}</h2>
                <div className='flex justify-center items-center mb-4'>
                    <Image image={`${process.env.REACT_APP_BASE_URL_IMG}${movie.poster_path}`} />
                </div>
                <div className="modal__details">
                    <p>Title: {movie.title}</p>
                    <p>Director: {movie.director}</p>
                    <p>Year: {movie.release_date}</p>
                    <p>Duration: {movie.duration} min</p>
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
                <button onClick={handleConfirm} className="modal__button modal__button--confirm">Confirm Rent</button>
                <button onClick={closeModal} className="modal__button modal__button--cancel">Cancel</button>
            </div>
        </div>
    );
};

export default RentalModal;
