import React, { useState } from 'react';
import './CastCarousel.css';
import profileImg from '../../assets/profile.svg';

const CastCarousel = ({ castData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;
  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(castData.length - itemsPerPage, prevIndex + itemsPerPage));
  };

  return (
    <div className="max-w-5xl mx-auto my-8 overflow-hidden custom-scrollbar">
      <div className="flex justify-between items-center mb-8">
        <button onClick={handlePrev} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 focus:outline-none">Prev</button>
        <h2 className="text-xl font-semibold">Featured Movies</h2>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 focus:outline-none">Next</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto transition-transform duration-300 ease-in-out transform translate-x-[calc(-100%*{startIndex/4})]">
        {castData.slice(startIndex, startIndex + itemsPerPage).map((element) => (
          <div key={element.id} className={`flex-none w-64 bg-gray-300 rounded-lg p-4`}>
            <img src={element.profile_path ? `https://image.tmdb.org/t/p/w500${element.profile_path}` : `${profileImg}` } alt={element.name} className="w-full h-auto rounded-lg shadow-md" />
            <h3 className="mt-2 text-lg font-semibold"><strong>Nombre:</strong> {element.name} </h3>
            <h3 className="mt-2 text-lg font-semibold"><strong>Personaje:</strong> {element.character} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastCarousel;
