/* Imports */
import Carousel from 'react-multi-carousel';
import HourlyTemperatures from '../HourlyTemperatures/HourlyTemperatures';
import './WeatherForecast.css';
import 'react-multi-carousel/lib/styles.css';

/* WeatherForecast component */
const WeatherForecast = ({day, conditions, maxTemp, wind, hourlyTemps, hours}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1600 },
          items: 5,
        },
        laptop_lg: {
            breakpoint: { max: 1599, min: 1200 },
            items: 3,
        },
        laptop_sm: {
            breakpoint: { max: 1199, min: 992 },
            items: 4,
        },
        tablet: {
          breakpoint: { max: 991, min: 768 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 4,
        }
    };

    return (
        <div className="weather-item">
            <div className="day">{day}</div>
            {maxTemp >= 35 && <div className="warning high">Heatwave warning</div>}
            {wind >= 30 && <div className="warning medium">Strong wind warning</div>}
            <div className="conditions">
                <img src={`images/${conditions}.png`} alt={conditions} />
                <p>{conditions}</p>
                <div className="hourly-temperatures">
                    {hourlyTemps && (<Carousel responsive={responsive} arrows={false} swipeable={true} draggable={true}>
                        {hourlyTemps.map((hourlyTemp, index) => <HourlyTemperatures key={`${hourlyTemp}-${index}`} hourlyTemps={hourlyTemp} hours={index} />)}
                    </Carousel>)}
                </div>
            </div>
            <div className="more-details">
                <div className="max-temp"><span>Max temperature:</span> {maxTemp}<sup>&deg;</sup>C</div>
                <div className="wind"><span>Wind:</span> {wind}km/h</div>
            </div>
        </div>
    );
};

export default WeatherForecast;
