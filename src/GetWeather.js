
const getWeather = (postcode) => {
    const openWeatherKey = 'bdd454f47dc7feddacfe5125750ba300';
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${postcode},AU&appid=${openWeatherKey}`;
    return fetch(url)
    .then(res => res.json())
    .then(jsonResponse => {
        console.log(jsonResponse);
        return {
            name: jsonResponse.name,
            description: jsonResponse.weather[0].description,
            main: jsonResponse.weather[0].main
        };
    })
    .catch(error=> {
        return{
            weatherDescription: "Something didn't work"
        };
    });
}

const GetWeather = {
    getWeather: getWeather
}

export default GetWeather;