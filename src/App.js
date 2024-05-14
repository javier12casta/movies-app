import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import RentFormPage from './pages/RentFormPage/RentFormPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import RentPage from './pages/RentPage/RentPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/pelicula/:id" element={<MovieDetailPage />} />
          <Route path="/alquiler" element={<RentFormPage />} />
          <Route path="/rentadas" element={<RentPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
