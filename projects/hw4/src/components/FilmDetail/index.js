/* Imports */
import FilmDetailEmpty from './FilmDetailEmpty';
import './FilmDetail.css';

/* FilmDetails component */
const FilmDetail = ({ selectedFilm }) => {
  if (!selectedFilm) {
    return <FilmDetailEmpty />;
  }

  const { id, title, poster_path, backdrop_path, overview, tagline } = selectedFilm;

  return (
    <div key={id} className="FilmDetail is-hydrated">
      <figure className="film-backdrop">
        <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={`${title} backdrop`} />
        <h1 className="film-title">{title}</h1>
      </figure>

      <div className="film-meta">
        <div className="film-detail-overview">
          <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} className="film-detail-poster" alt={`${title} poster`} />
          <p>{tagline}</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default FilmDetail;
