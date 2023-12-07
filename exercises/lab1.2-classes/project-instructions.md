## Weather Forecast

You're building a convenient app to show people the weather forecast for the next 5 days. Below is a sample of the forecast data that your app will use.

Your app should:
- Show the weather conditions for each day of the week
- Include an appropriate emoji for the conditions on each day: https://emojipedia.org/search/?q=weather
- Include the maximum temperature (in °C) and wind speed (in km/h) for each day
- Add a red "Heatwave warning" label if the max temperature is 35°C or higher
- Add an orange "Strong wind warning" label if the wind speed is 30km/h or more

**Helpful JavaScript Documentation**

- [Map function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Example data

```js
const forecastData = [
  {
    day: "Monday",
    conditions: "sunny",
    maxTemp: 38,
    wind: 15,
  },
  {
    day: "Tuesday",
    conditions: "stormy",
    maxTemp: 26,
    wind: 36,
  },
  {
    day: "Wednesday",
    conditions: "rainy",
    maxTemp: 25,
    wind: 25,
  },
  {
    day: "Thursday",
    conditions: "cloudy",
    maxTemp: 28,
    wind: 20,
  },
  {
    day: "Friday",
    conditions: "sunny",
    maxTemp: 35,
    wind: 16,
  },
];
```

## Extensions

1. Spend more time styling your app, make each day a separate card/box and make the data clearer to read quickly.
2. Incorporate hourly temperature forecast data as well, using a table or grid. Make the text or background for each hour be coloured according to the temperature to make it easier to read.

Example hourly forecast data:
```js
  {
    day: "Friday",
    conditions: "sunny",
    maxTemp: 35,
    wind: 16,
    hourlyTemp: [17, 17, 17, 17, 18, 19,
                 20, 22, 24, 27, 29, 32,
                 34, 35, 34, 33, 32, 30,
                 28, 26, 24, 21, 19, 18]
  },
```
