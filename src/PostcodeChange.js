import React from 'react';

export class PostcodeChange extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const newPostcode = e.target.querySelector(
            'input[type="text"]').value;
        //e.target.querySelector('input[type="text"]').value = '';
        this.props.onSubmit(newPostcode);
    }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
                    <input type='text' className='postcode' placeholder='Enter Postcode Here'></input>
                    <input type='submit'></input>
        </form>
        )}
}