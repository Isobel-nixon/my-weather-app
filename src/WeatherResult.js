import React from 'react';

export class WeatherResult extends React.Component{
    render(){
        let result;
        if(this.props.weather===''){
            result = <h1>What's the weather today?</h1>
        }else{
            result = <h1>The weather in {this.props.location} is {this.props.weather}</h1>           
        }
        return result;
    }
}