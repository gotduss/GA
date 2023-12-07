/* Imports */
import { Link } from 'react-router-dom';
import './FilmRow.css';

/* FilmRow component */
const FilmRow = ({ id, title, poster_path, release_date, favouriteClick, removeFavouriteClick, isFavourite }) => {
    const releaseDate = new Date(release_date);

    return (
        <div className="FilmRow">
            <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={`${title} film poster`} />
            <div className="film-summary">
                <h3>{title}</h3>
                <p>{releaseDate.getFullYear()}</p>
                <div className="actions">
                    {isFavourite === 'add_to_queue' ? (
                        <button className="action" onClick={favouriteClick}>
                            <span className="material-icons">add_to_queue</span>
                        </button>
                    ) : (
                        <button className="action" onClick={removeFavouriteClick}>
                            <span className="material-icons">remove_from_queue</span>
                        </button>
                    )}
                    <Link to={`/films/${id}`} className="action">
                        <span className="material-icons">read_more</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FilmRow;
