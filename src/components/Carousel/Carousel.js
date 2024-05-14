import React, { useState, useRef } from 'react';
import './Carousel.css'; // Importa tu archivo CSS con los estilos personalizados

const Carousel = ({ movies }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(movies.length - itemsPerPage, prevIndex + itemsPerPage));
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (isDragging) {
      const currentX = e.clientX || e.touches[0].clientX;
      const deltaX = currentX - dragStartX;
      containerRef.current.scrollLeft -= deltaX;
      setDragStartX(currentX);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  console.log(startIndex);

  return (
    <div
      ref={containerRef}
      className="carousel"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {movies.map((movie, index) => (
        <div key={movie.id} className="carousel__item">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-lg shadow-md" />
          <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
        </div>
      ))}
      <button onClick={handlePrev} className="carousel__button carousel__button--prev">Prev</button>
      <button onClick={handleNext} className="carousel__button carousel__button--next">Next</button>
    </div>
  );
};

export default Carousel;
