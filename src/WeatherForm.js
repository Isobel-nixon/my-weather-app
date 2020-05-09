import React from 'react';
import {WeatherResult} from './WeatherResult';
import {PostcodeChange} from './PostcodeChange';

export class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {postcode:'default'}
        this.changePostcode = this.changePostcode.bind(this)
    }
    
    changePostcode(newPostcode){
        this.setState({
            postcode: newPostcode
        });
    }

    render(){
        return (
            <div>
                <WeatherResult postcode={this.state.postcode}/>
                <PostcodeChange onSubmit = {this.changePostcode}/>
            </div>
        );
    }
}