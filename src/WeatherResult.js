import React from 'react';

export const WeatherResult = (props) => {
    let result;
    if(props.description===''){
        result = <h1>What's the weather today?</h1>
    }else{
        result = <h1>{props.name} will experience {props.description}</h1>           
    }
    return result;
}