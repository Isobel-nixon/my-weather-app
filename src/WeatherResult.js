import React from 'react';

export class WeatherResult extends React.Component{
    render(){
        let result;
        if(this.props.description===''){
            result = <h1>What's the weather today?</h1>
        }else{
            result = <h1>{this.props.name} will experience {this.props.description}</h1>           
        }
        return result;
    }
}