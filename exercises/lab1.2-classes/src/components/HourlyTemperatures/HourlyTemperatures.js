/* Imports */
import { Component } from 'react';
import './HourlyTemperatures.css';

/* HourlyTemperatures component */
class HourlyTemperatures extends Component {
    render() {
        return (
            <div className="carousel-item">
                <div className="hours">{this.props.hours}</div>
                {this.props.hourlyTemps}<sup>&deg;</sup>C
            </div>
        )
    }
}

export default HourlyTemperatures;
