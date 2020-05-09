import React from 'react';
import {WeatherResult} from './WeatherResult';
import {PostcodeChange} from './PostcodeChange';
import GetWeather from './GetWeather'

export class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {description: '', name: ''};
        this.getWeather = this.getWeather.bind(this);
    }
    
    getWeather(postcode){
        GetWeather.getWeather(postcode).then(weather=>{
            this.setState({description: weather.description, name: weather.name});
        })
    }

    render(){
        return (
            <div>
                <WeatherResult description={this.state.description} name={this.state.name}/>
                <PostcodeChange onSubmit = {this.getWeather}/>
            </div>
        );
    }
}