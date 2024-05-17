import React, { useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

const Carousel = ({ movies }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(movies.length - itemsPerPage, prevIndex + itemsPerPage));
  };

  return (
    <div className="max-w-5xl mx-auto my-8 overflow-hidden custom-scrollbar">
      <div className="flex justify-between items-center mb-8">
        <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 focus:outline-none">Prev</button>
        <h2 className="text-xl font-semibold">Featured Movies</h2>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 focus:outline-none">Next</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto transition-transform duration-300 ease-in-out transform translate-x-[calc(-100%*{startIndex/4})]">
        {movies.slice(startIndex, startIndex + itemsPerPage).map((movie) => (
          <Link key={movie.id} to={`/pelicula/${movie.id}`}>
            <div className="flex-none w-64 bg-gray-300 rounded-lg p-4">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-lg shadow-md" />
              <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
