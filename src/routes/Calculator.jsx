import React from 'react';
import '../App.css';

export default class Calculator extends React.Component {
  constructor() {
    
    super();
    this.state = {
      display: "",
      result: 0.00,
      currentOperator: ""
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);

  }

  handleNumbers(event) {
    let inputNumber = String(event.target.value);
    let display = this.state.display;

    if (
      this.state.currentOperator !== "" ||
      this.state.currentOperator === "C" 
      ) {
      display = inputNumber;
    } else {
      display = display + inputNumber;
    }

    this.setState({
        display: display
    });
  }

  handleOperator(event) {
    let operator = event.target.value;

    if (operator === "C") {
      this.setState({
        display: "0",
        result: 0.00,
        currentOperator: ""
      });
    } else {
      this.setState({
        result: Number(this.state.display),
        currentOperator: operator
      });
    }
  } 

  handleEquals() {
    this.setState({
      display: "🥁"
  });
  }


  render() {
    return (
      <>
      <div id="calculator">
        <pre>
            State <br/>
            display: {this.state.display}<br/>
            result: {this.state.result}<br/>
            currentOperator: {this.state.currentOperator}
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
              value={","} 
              onClick={this.handleOperator}>,</button>
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