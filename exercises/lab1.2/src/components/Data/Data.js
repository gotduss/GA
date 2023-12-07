const forecastData = [
    {
      id: 1,
      day: "Monday",
      conditions: "sunny",
      maxTemp: 38,
      wind: 15,
    },
    {
      id: 2,
      day: "Tuesday",
      conditions: "stormy",
      maxTemp: 26,
      wind: 36,
    },
    {
      id: 3,
      day: "Wednesday",
      conditions: "rainy",
      maxTemp: 25,
      wind: 25,
    },
    {
      id: 4,
      day: "Thursday",
      conditions: "cloudy",
      maxTemp: 28,
      wind: 20,
      hourlyTemp: [15, 18, 18, 19, 18, 19,
        20, 22, 24, 27, 29, 32,
        34, 35, 34, 33, 32, 30,
        28, 26, 24, 20, 17, 16],
    },
    {
      id: 5,
      day: "Friday",
      conditions: "sunny",
      maxTemp: 35,
      wind: 16,
      hourlyTemp: [17, 17, 17, 17, 18, 19,
        20, 22, 24, 27, 29, 32,
        34, 35, 34, 33, 32, 30,
        28, 26, 24, 21, 19, 18],
    },
];

export default forecastData;
