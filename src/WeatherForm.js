import React from 'react';
import {WeatherResult} from './WeatherResult';
import {PostcodeChange} from './PostcodeChange';
import GetWeather from './GetWeather';
import WeatherGif from './WeatherGif';
import Tenor from './Tenor';

export class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {description: '', name: '', gifSrc: ''};
        this.getWeather = this.getWeather.bind(this);
        this.getGif = this.getGif.bind(this);
    }

    getGif(description){
        Tenor.getGif(description).then(gifSrc =>{
            this.setState({gifSrc: gifSrc})
        })
    }
    
    getWeather(postcode){
        GetWeather.getWeather(postcode).then(weather=>{
            this.setState({description: weather.description, name: weather.name});
            this.getGif(this.state.description);
        });
    }

    render(){
        return (
            <div>
                <WeatherGif src={this.state.gifSrc}/>
                <WeatherResult description={this.state.description} name={this.state.name}/>
                <PostcodeChange onSubmit = {this.getWeather}/>
            </div>
        );
    }
}