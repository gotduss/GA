/* Imports */
import './HourlyTemperatures.css';

/* Carousel component */
const HourlyTemperatures = ({hourlyTemps, hours}) => {
    return (
        <div className="carousel-item">
            <div className="hours">{hours}</div>
            {hourlyTemps}<sup>&deg;</sup>C
        </div>
    );
}

export default HourlyTemperatures;