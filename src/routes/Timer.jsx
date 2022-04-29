import React from 'react';
import '../App.css';

export default class Timer extends React.Component {
  constructor() { 
    super();
    this.state = {
      sessionSetting: 25,
      breakSetting: 5,
      timeLeft: Date(),
      display: "25:00",
    };
    this.handleTimerIncrement = this.handleTimerIncrement.bind(this);
  }

  handleTimerIncrement() {

  }

  handleTimerRecrement() {
  
  } 

  handlePauseIncrement() {

  }

  handlePauseDecrement() {
  
  } 

  handleStart() {

  }

  handlePause() {

  }

  handleReset() {

  }


  render() {
    return (
      <>
      <div id="timer">

        <div className='settings'>
          <button id="break-decrement" className='incrementButton'>-1</button>
          <span id="break-label">{this.state.breakSetting}</span>
          <button id="break-increment" className='incrementButton' >+1</button>
        </div>

        <div className='settings'>
          <button id="session-decrement" className='incrementButton'>-1</button>
          <div id="session-label">
            Session Length 
            <div id="session-length">{this.state.sessionSetting}</div>
          </div>
          <button id="session-increment" className='incrementButton'>+1</button>
        </div>

        <div id="timer-label">
          Session
          <div id="time-left">{this.state.timeLeft}</div>
        </div>
        <button id='start_stop'></button>
        <button id='reset'></button>
        
      </div>
      </>
    );
  };

};