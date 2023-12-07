/* Imports */
import { useState, useEffect } from 'react';
import { TMDB_API_URL, TMDB_API_KEY } from "../FilmData";
import FilmRow from "../FilmRow";
import FilmDetail from "../FilmDetail";
import YearSelect from '../Actions/YearSelect';
import './FilmLibrary.css';

/* FilmLibrary component */
const FilmLibrary = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [favouriteFilms, setFavouriteFilms] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [releaseYear, setReleaseYear] = useState(2022);

  useEffect(() => {
    const displayFilms = async () => {
      try {
        const response = await fetch(`${TMDB_API_URL}/discover/movie?primary_release_year=${releaseYear}&sort_by=popularity.desc&api_key=${TMDB_API_KEY}&page=${pageNumber}`);
        console.log("response", response);
        if (response.ok) {
          const data = await response.json();
          console.log("data", data);
          // If it's the first page, set the films directly; otherwise, append the new films
          setFilms((prevFilms) => {
            return pageNumber === 1 ? data.results : [...prevFilms, ...data.results];
          });
        } else {
          setError(true);
          setErrorMessage('An error occurred while fetching film details. Please try again later.');
        }
      } catch(error) {
        setError(true);
        setErrorMessage('An error occurred while fetching film details. Please try again later.');
      }
    }
    displayFilms();
  }, [pageNumber, releaseYear]);

  // Loads following pages when load more button is clicked
  const handleLoadMoreClick = async () => setPageNumber(pageNumber + 1);

  // Handles the display of the film details on click
  const handleDetailsClick = async (film) => {
    try {
      const response = await fetch(`${TMDB_API_URL}/movie/${film.id}?api_key=${TMDB_API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        console.log("selectedFilm", selectedFilm);
        setSelectedFilm(data);
      } else {
        setError(true);
        setErrorMessage('An error occurred while fetching film details. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(true);
      setErrorMessage('An error occurred while fetching film details. Please try again later.');
    }
  }

  // const handleDetailsClick = (film) => setSelectedFilm(film);

  // Handles adding a film to the favourite list on click
  const handleFavouriteClick = (film) => {
    if (!favouriteFilms.find((f) => f.id === film.id)) {
      setFavouriteFilms([...favouriteFilms, film]);
    }
  }

  // Handles removing a film from the favourite list on click
  const handleRemoveFavouriteClick = (film) => {
    const newArr = favouriteFilms.filter((f) => f.id !== film.id);
    setFavouriteFilms([...newArr]);
  }

  // Switching between the all or favourite list of films
  const handleTabDisplayClick = (tab) => setActiveTab(tab);

  const handleYearSelectChange = async (e) => {
    console.log("event", e);
    const selectedYear = e.target.value;
    setReleaseYear(selectedYear);
    setPageNumber(1); // Reset the page number when the year changes.
  }

  return (
    <div className="FilmLibrary">
      {error ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
        <>
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              <button className={`film-list-filter${activeTab === 'all' ? ' is-active' : ''}`} onClick={() => handleTabDisplayClick('all')}>
                ALL
                <span className="section-count">{films.length}</span>
              </button>
              <button className={`film-list-filter${activeTab === 'faves' ? ' is-active' : ''}`} onClick={() => handleTabDisplayClick('faves')}>
                FAVES
                <span className="section-count">{favouriteFilms.length}</span>
              </button>
            </div>

            {activeTab === 'all' && (
              <YearSelect YearSelectChange={handleYearSelectChange} releaseYear={releaseYear} />
            )}

            {activeTab === 'all' ? (
              films?.map((film, index) => <FilmRow
                  key={`${film.id}-${index}`}
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
              favouriteFilms.map((film, index) => <FilmRow
                key={`${film.id}-${index}`}
                title={film.title}
                poster_path={film.poster_path}
                release_date={film.release_date}
                detailsClick={() => handleDetailsClick(film)}
                favouriteClick={() => handleFavouriteClick(film)}
                removeFavouriteClick={() => handleRemoveFavouriteClick(film)}
                isFavourite={'remove_from_queue'}
              />)
            ) : (
              <p>You haven't added any favourites yet</p>
            )}
            {activeTab === 'all' && films.length >= 20 && pageNumber < films.length && (
              <button className="load-more-button" onClick={handleLoadMoreClick}>
                Load More
              </button>
            )}
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <FilmDetail 
              selectedFilm={selectedFilm} 
            />
          </div>
        </>
      )}
    </div>
  );
}

export default FilmLibrary;
