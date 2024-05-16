import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import RentalPage from './pages/RentalPage/RentalPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Footer from './components/Footer/Footer';
import RentalProvider from './hooks/RentalContext';

function App() {
  return (
    <Router>
      <RentalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/pelicula/:id" element={<MovieDetailPage />} />
          <Route path="/rentadas" element={<RentalPage />} />
        </Routes>
      </div>
      <Footer />
      </RentalProvider>
    </Router>
  );
}

export default App;
