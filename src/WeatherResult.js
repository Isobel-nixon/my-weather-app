import React from 'react';

export class WeatherResult extends React.Component{

    getWeather(){
        const postcode = this.props.postcode;
        const openWeatherKey = 'bdd454f47dc7feddacfe5125750ba300';
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${postcode},AU&appid=${openWeatherKey}`;
        fetch(url)
        .then(res => res.json())
        .then(jsonResponse => {
            return [jsonResponse.name,jsonResponse.weather[0].description];
        })
        .catch(error => {
            return;
        })
    }

    render(){
        let result;
        if(this.props.postcode==='default'){
            result = <h1>What's the weather today?</h1>
        }else{
            result = this.getWeather()
            console.log(result)
            result = <h1>In {result[0]} there will be {result[1]}.</h1>
            
        }
        return result;
    }
}