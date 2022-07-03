import './App.css';
import './styles-components/controls.css'
import './styles-components/botones.css'
import Boton from './component/Boton';
import { useState } from 'react';

const bankOne = [
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

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

function App() {

  /* Power */
  const [power, setPower] = useState(true);

  const powerInactive={
    'padding-right': '27px',
    'transition' : '0.5s'
  }

  const powerActive={
    'padding-left': '27px',
    'transition' : '0.5s'
  }

  const cambioPower = () => {
    setPower(!power)
  }

  /* Control */
  const [bank, setBank] = useState(false);

  const controlInactive={
    'padding-right': '27px',
    'transition' : '0.5s'
  }

  const controlActive={
    'padding-left': '27px',
    'transition' : '0.5s'
  }

  const cambioBank = () => {
    setBank(!bank)
  }

  /* key */
  const [name, setName] = useState('');

  return (
    <div className="drum-machine">
      <div className='buttons'>
        <Boton name={[name, setName]} keyName={bankOne[0].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[1].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[2].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[3].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[4].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[5].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[6].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[7].keyTrigger} power={power} bank={bank} />
        <Boton keyName={bankOne[8].keyTrigger} power={power} bank={bank} />
      </div>
      <div className='display'>
      <div className="controls-display">
                <span>Power</span>
                <div className="control"
                style={power ? powerActive : powerInactive} 
                onClick={cambioPower} >
                    <div className="cube"></div>
                </div>
            </div>
            <div className="name-button">
                {name}
            </div>
            <div className='volume-slider'>
            <input
              max='1'
              min='0'
              /*onChange={this.adjustVolume}*/
              step='0.01'
              type='range'
              /*value={this.state.sliderVal}*/
            />
            </div>
            <div className="controls-display">
                <span>Bank</span>
                <div className="control" 
                style={bank ? controlActive : controlInactive} 
                onClick={cambioBank} >
                    <div className="cube"></div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default App;
