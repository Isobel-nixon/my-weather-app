
const getWeather = (postcode) => {
    const openWeatherKey = 'bdd454f47dc7feddacfe5125750ba300';
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${postcode},AU&appid=${openWeatherKey}`;
    fetch(url)
    .then(res => res.json())
    .then(jsonResponse => {
        console.log(jsonResponse)
        return {
            location: "Oakleigh",
            weatherDescription: "Rainy"
        };
    })
}

const GetWeather = {
    getWeather: getWeather
}

export default GetWeather;