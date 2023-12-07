/* Imports */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API_URL, TMDB_API_KEY } from "../FilmData";
import FilmDetailEmpty from './FilmDetailEmpty';
import './FilmDetail.css';

/* FilmDetails component */
const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await fetch(`${TMDB_API_URL}/movie/${id}?api_key=${TMDB_API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setFilm(data);
        } else {
          setError(true);
          setErrorMessage('An error occurred while fetching film details. Please try again later.');
        }
      } catch (error) {
        setError(true);
        setErrorMessage('An error occurred while fetching film details. Please try again later.');
      }
    };

    if (id) {
      fetchFilmDetails();
    }
  }, [id]);

  return (
    <div key={id} className="FilmDetail is-hydrated">
      {error ? (
        <p className="error-message">{errorMessage}</p>
      ) : film ? (
        <>
          <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280${film.backdrop_path}`} alt={`${film.title} backdrop`} />
            <h1 className="film-title">{film.title}</h1>
          </figure>

          <div className="film-meta">
            <div className="film-detail-overview">
              <img src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`} className="film-detail-poster" alt={`${film.title} poster`} />
              <p>{film.tagline}</p>
              <p>{film.overview}</p>
            </div>
          </div>
        </>
      ) : (
        <FilmDetailEmpty />
      )}
    </div>
  )
}

export default FilmDetail;
