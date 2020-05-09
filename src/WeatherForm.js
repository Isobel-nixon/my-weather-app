import React from 'react';
import {WeatherResult} from './WeatherResult';
import {PostcodeChange} from './PostcodeChange';
import GetWeather from './GetWeather'

export class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {weather: '', location: ''};
        this.getWeather = this.getWeather.bind(this);
    }
    
    getWeather(postcode){
        GetWeather.getWeather(postcode).then(weather=>{
            this.setState({weather: weather.weatherDescription, location: weather.weatherLocation});
        })
    }

    render(){
        return (
            <div>
                <WeatherResult weather={this.state.weather} location={this.state.location}/>
                <PostcodeChange onSubmit = {this.getWeather}/>
            </div>
        );
    }
}