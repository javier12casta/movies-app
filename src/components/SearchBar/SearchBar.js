import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchTerm.trim().toLowerCase()); // Convertimos el término de búsqueda a minúsculas y eliminamos espacios en blanco
    };
  
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-400 px-4 py-2 rounded-md mr-2 w-[50%]"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Buscar</button>
    </form>
  );
};

export default SearchBar;