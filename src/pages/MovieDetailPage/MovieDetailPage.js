import React, { useState, useEffect } from 'react'
import PlayerComponent from '../../components/PlayerComponent/PlayerComponent';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/moviesServices';
import Image from '../../components/ImageDetail/ImageDetail';

function MovieDetailPage() {
  const videoId = 'rmoneJ_797s?si=u2dTegCcFuGuzxcr';
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovieDetails(null);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {movieDetails ? (

        <div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="font-bold mt-4 text-3xl font-bold my-12">{movieDetails.title}</h2>
            <div className="flex flex-col sm:flex-row mx-8">
              <div className="w-full sm:w-1/2 md:w-1/4">
                <Image image={`${process.env.REACT_APP_BASE_URL_IMG}${movieDetails.poster_path}`} />
              </div>
              <div className="w-full sm:w-1/2 md:w-3/4 sm:pl-4">
                <p className="text-[#555] mb-4">{movieDetails.overview}</p>
                <p className="text-[#555] mb-4">Fecha de lanzamiento: {movieDetails.releaseDate}</p>
                <p className="text-[#555] mb-4">Duración: {movieDetails.runtime} minutes</p>
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-[#333]">Generos:</h2>
                  <ul className="list-disc list-inside">
                    {movieDetails.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='mt-[15%] mb-[60px] mx-8'>
              <h2 className="font-bold mt-4 text-3xl font-bold my-12">Trailer</h2>
              <PlayerComponent videoId={videoId} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  )
}

export default MovieDetailPage;