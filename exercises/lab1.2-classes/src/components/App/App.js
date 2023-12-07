/* Imports */
import forecastData from "../Data/Data";
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import './App.css';

/* App component */
function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <div className="weather-forecast">
        {forecastData.map(item => <WeatherForecast key={item.id} day={item.day} conditions={item.conditions} maxTemp={item.maxTemp} wind={item.wind} hourlyTemps={item.hourlyTemp} />)}
      </div>
    </div>
  );
}

export default App;
