import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import RentFormPage from './pages/RentFormPage/RentFormPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/pelicula/:id" element={<MovieDetailPage />} />
          <Route path="/alquiler" element={<RentFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
