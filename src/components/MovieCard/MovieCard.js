import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard({ movie, genres }) {
    const score = Math.round(movie.vote_average * (movie.vote_count / 100));
    const imgURL = `${process.env.REACT_APP_BASE_URL_IMG}${movie.poster_path}`;
    const associateGenres = () => {
        return genres.filter(genre => movie.genre_ids.includes(genre.id))
    };

    return (
        <Link to={`/pelicula/${movie.id}`} className="max-w-sm rounded overflow-hidden shadow-lg movie-card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg movie-card h-[100%]">
            <img src={imgURL} alt={movie.title} className="w-full" />
            <div className="movie-card__score w100">
                <p>Score: {score}</p>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
                {/* <p className="text-gray-700 text-base">{movie.overview}</p> */}
            </div>
            <div className="movie-card__genres">
                {associateGenres(movie).map(genre => (
                    <span key={genre.id} className="movie-card__genres-item">{genre.name}</span>
                ))}
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {movie.release_date}
                </span>
            </div>

        </div>
        </Link>
    );
}

export default MovieCard;