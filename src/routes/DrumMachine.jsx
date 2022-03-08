import React from 'react';
import '../App.css';

export default class DrumMachine extends React.Component {
    constructor() {
    
      super();
      this.state = {
        input: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
  
  
  
    render() {
      return (
        <div id="drumMachine">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>

        </div>
      );
    };
  
};