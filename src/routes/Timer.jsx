import React from 'react';
import '../App.css';

export default class Timer extends React.Component {
  constructor() { 
    super();
    this.state = {
      display: "0",
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleNumbers(event) {

  }

  handleOperator(event) {
  
  } 

  handleEquals() {

  }


  render() {
    return (
      <>
      <div id="calculator">
        <pre>
            display: {this.state.display}<br/>
            result: {this.state.result}<br/>
            currentOperator: {this.state.currentOperator}<br/>
            clearDisplay: {String(this.state.clearDisplay)}
        </pre>
        <div id="display">
          {this.state.display}
        </div>
      </div>
      </>
    );
  };

};