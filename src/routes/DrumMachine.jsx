import React from 'react';
import '../App.css';

const drumPadList = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

export default class DrumMachine extends React.Component {
  constructor() {
    
    super();
    this.state = {
      input: "",
      nowPlaying: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleChange(event) {
      this.setState({
          input: event.target.value
      });
  }

  handleKeyPress = ({ key }) => {
    let keyUpperCase = key.toUpperCase();
    if (drumPadList.find(e => e.keyTrigger === keyUpperCase)) {
      console.log(keyUpperCase + " was pressed");
      this.playSound(keyUpperCase);
    }
  };


  playSound(keyTrigger) {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.setState({
      input: keyTrigger,
      nowPlaying: drumPadList.find(e => e.keyTrigger === keyTrigger).id
    });
    // this.activatePad();
    // setTimeout(() => this.activatePad(), 100);
    // this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          Key pressed: {this.state.nowPlaying}
        </div>

        {drumPadList.map((drumPad, index) => (
          <div 
            className = "drum-pad" 
            key = {index}
            id = {drumPad.id}
            onClick = { () => {
              this.playSound(drumPad.keyTrigger);
            }} >
            <audio
              className='clip' 
              id={drumPad.keyTrigger} 
              src={drumPad.url} />
            {drumPad.keyTrigger}
          </div>
        ))}
      </div>
    );
  };

};