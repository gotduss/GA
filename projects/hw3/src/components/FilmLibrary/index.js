/* Imports */
import { useState } from 'react';
import TMDB from "../FilmData";
import FilmRow from "../FilmRow";
import FilmDetail from "../FilmDetail";
import FilmDetailEmpty from '../FilmDetail/FilmDetailEmpty';
import './FilmLibrary.css';

/* FilmLibrary component */
const FilmLibrary = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [favouriteFilms, setFavouriteFilms] = useState([]);

  const handleDetailsClick = (film) => setSelectedFilm(film);

  const handleFavouriteClick = (film) => {
    if (!favouriteFilms.find((f) => f.id === film.id)) {
      setFavouriteFilms([...favouriteFilms, film]);
    }
  }

  const handleRemoveFavouriteClick = (film) => {
    const newArr = favouriteFilms.filter((f) => f.id !== film.id);
    setFavouriteFilms([...newArr]);
  }

  const handleTabDisplayClick = (tab) => setActiveTab(tab);

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button className={`film-list-filter${activeTab === 'all' ? ' is-active' : ''}`} onClick={() => handleTabDisplayClick('all')}>
            ALL
            <span className="section-count">{TMDB.films.length}</span>
          </button>
          <button className={`film-list-filter${activeTab === 'faves' ? ' is-active' : ''}`} onClick={() => handleTabDisplayClick('faves')}>
            FAVES
            <span className="section-count">{favouriteFilms.length}</span>
          </button>
        </div>

        {activeTab === 'all' ? (
          TMDB.films?.map(film => <FilmRow
              key={film.id}
              title={film.title}
              poster_path={film.poster_path}
              release_date={film.release_date}
              detailsClick={() => handleDetailsClick(film)}
              favouriteClick={() => handleFavouriteClick(film)}
              removeFavouriteClick={() => handleRemoveFavouriteClick(film)}
              isFavourite={favouriteFilms.some((f) => f.id === film.id) ? 'remove_from_queue' : 'add_to_queue'}
            />
          )
        ) : favouriteFilms.length > 0 ? (
          favouriteFilms.map(film => <FilmRow
            key={film.id}
            title={film.title}
            poster_path={film.poster_path}
            release_date={film.release_date}
            detailsClick={() => handleDetailsClick(film)}
            favouriteClick={() => handleFavouriteClick(film)}
            removeFavouriteClick={() => handleRemoveFavouriteClick(film)}
            isFavourite={'remove_from_queue'}
          />)
        ) : (
          <p>No favourites yet</p>
        )}
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {selectedFilm ? (
          <FilmDetail 
            key={selectedFilm.id} 
            title={selectedFilm.title} 
            poster_path={selectedFilm.poster_path} 
            backdrop_path={selectedFilm.backdrop_path} 
            overview={selectedFilm.overview} 
          />
        ) : (
          <FilmDetailEmpty />
        )}
      </div>
    </div>
  );
}

export default FilmLibrary;
