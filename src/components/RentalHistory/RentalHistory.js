import React from 'react';
import { useRentalContext } from '../../hooks/RentalContext';
import { FaTrash } from "react-icons/fa";

const RentalHistory = () => {
    const { rentedMovies, removeRentedMovie } = useRentalContext();

    return (
        <div className="p-4 bg-gray-100 rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">Historial de rentas</h2>
            {rentedMovies.length > 0 ? (
                <ul className="space-y-4">
                    {rentedMovies.map((rental) => (
                        <li key={rental.id} className="p-4 bg-white shadow rounded-md">
                            <h3 className="text-xl font-semibold">{rental.title}</h3>
                            <p><strong>Días de renta:</strong> {rental.rentalDuration}  {rental.rentalDuration == 1 ? 'día' : 'días'}</p>
                            <p><strong>Fecha de renta:</strong> {rental.rentalDate}</p>
                            <button 
                                onClick={() => removeRentedMovie(rental.id)} 
                                className="mt-2 p-2 bg-red-500 text-white rounded"
                            >
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rental history available.</p>
            )}
        </div>
    );
};

export default RentalHistory;
