import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;
const tmdbApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        api_key: API_KEY
    }
});

export const fetchMovies = async () => {
    try {
        const response = await tmdbApi.get('discover/movie');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await tmdbApi.get(`movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}genre/movie/list`, {
            params: {
                api_key: API_KEY
            }
        });
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};