/* Imports */
import { Component } from 'react';
import Carousel from 'react-multi-carousel';
import HourlyTemperatures from '../HourlyTemperatures/HourlyTemperatures';
import 'react-multi-carousel/lib/styles.css';
import './WeatherForecast.css';

/* WeatherForecast component */
class WeatherForecast extends Component {
    render() {
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
                <div className="day">{this.props.day}</div>
                {this.props.maxTemp >= 35 && <div className="warning high">Heatwave warning</div>}
                {this.props.wind >= 30 && <div className="warning medium">Strong wind warning</div>}
                <div className="conditions">
                    <img src={`images/${this.props.conditions}.png`} alt={this.props.conditions} />
                    <p>{this.props.conditions}</p>
                    <div className="hourly-temperatures">
                        {this.props.hourlyTemps && (<Carousel responsive={responsive} arrows={false} swipeable={true} draggable={true}>
                            {this.props.hourlyTemps.map((hourlyTemp, index) => <HourlyTemperatures key={`${hourlyTemp}-${index}`} hourlyTemps={hourlyTemp} hours={index} />)}
                        </Carousel>)}
                    </div>
                </div>
                <div className="more-details">
                    <div className="max-temp"><span>Max temperature:</span> {this.props.maxTemp}<sup>&deg;</sup>C</div>
                    <div className="wind"><span>Wind:</span> {this.props.wind}km/h</div>
                </div>
            </div>
        )
    }
}

export default WeatherForecast;
