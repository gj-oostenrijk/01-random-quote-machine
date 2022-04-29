import React from 'react';
import '../App.css';

export default class Calculator extends React.Component {
  constructor() { 
    super();
    this.state = {
      display: "0",
      result: 0.00,
      currentOperator: "",
      clearDisplay: false
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleNumbers(event) {
    let inputNumber = String(event.target.value);
    let display = this.state.display;

    if (this.state.clearDisplayOnNextInput === true ||
      this.state.display === "0") {
      display = "";
    } 

    if (inputNumber === "." && this.state.display.includes(".")) {
      inputNumber = "";
    }

    display = display + inputNumber;

    this.setState({
        display: display,
        clearDisplayOnNextInput: false
    });
  }

  handleOperator(event) {
    let operator = event.target.value;
    let result = this.state.result;

    if (operator === "C") {
      result = 0
    } 
    
    else if (operator === "+") {
      result = this.state.result + Number(this.state.display);
    }

    else if (operator === "-") {
      result = this.state.result - Number(this.state.display);
    }

    else if (operator === "*") {
      result = this.state.result * Number(this.state.display);
    }

    else if (operator === "/") {
      result = this.state.result / Number(this.state.display);
    }

    this.setState({
      display: result,
      result: result,
      currentOperator: operator,
      clearDisplayOnNextInput : true
    });
  } 

  handleEquals() {
    this.setState({
      display:this.state.result + Number(this.state.display),
      result: this.state.result + Number(this.state.display),
      currentOperator: "=",
      clearDisplayOnNextInput : true
    });
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
        <div id="controls">
          <div id="numbersWrapper">
            <button 
              className='number'
              value={7} 
              onClick={this.handleNumbers}
              >7</button>
            <button 
              className='number'
              value={8} 
              onClick={this.handleNumbers}
              >8</button>
            <button 
              className='number'
              value={9} 
              onClick={this.handleNumbers}>9</button>
            <button 
              className='operator'
              value={"+"} 
              onClick={this.handleOperator}>+</button>
            <button 
              className='number'
              value={4} 
              onClick={this.handleNumbers}>4</button>
            <button 
              className='number'
              value={5} 
              onClick={this.handleNumbers}>5</button>
            <button 
              className='number'
              value={6} 
              onClick={this.handleNumbers}>6</button>
            <button 
              className='operator'
              value={"-"} 
              onClick={this.handleOperator}>-</button>
            <button 
              className='number'
              value={1} 
              onClick={this.handleNumbers}>1</button>
            <button 
              className='number'
              value={2} 
              onClick={this.handleNumbers}>2</button>
            <button 
              className='number'
              value={3} 
              onClick={this.handleNumbers}>3</button>
            <button 
              className='operator'
              value={"/"} 
              onClick={this.handleOperator}>/</button>
            <button 
              className='operator'
              value={"C"} 
              onClick={this.handleOperator}>C</button>
            <button 
              className='number'
              value={0} 
              onClick={this.handleNumbers}>0</button>
            <button 
              className='operator'
              value={"."} 
              onClick={this.handleNumbers}>.</button>
            <button 
              className='operator'
              value={"x"} 
              onClick={this.handleOperator}>&times;</button>
            <button 
              className='equals'
              value={"="} 
              onClick={this.handleEquals}>=</button>
          </div>
          <div id="operationsWrapper">
            
          </div>
        </div>
      </div>
      </>
    );
  };

};