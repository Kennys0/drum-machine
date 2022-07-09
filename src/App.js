import './App.css';
import './styles-components/controls.css'
import './styles-components/botones.css'
import Boton from './component/Boton';
import { useState, useEffect, useLayoutEffect, useCallback, useMemo} from 'react';

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
  let [power, setPower] = useState(true);

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
    if(power){
      setTimeout(() => {
        setName("")
      }, 1500);
    }
  }

  /* Control */
  let [bank, setBank] = useState(false);

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
    console.log(bank)
  }

  /* key */
  const [name, setName] = useState('');

  const click = (boton) => {setName(boton.id)}

  const idBank = () => {
    if(bank){
      setName("Heater Kit")
      setTimeout(() => {
        setName("")
      }, 1500);
    } else{
      setName("Smooth Piano Kit")
      setTimeout(() => {
        setName("")
      }, 1500);
    }
  };

  /* Volumen */
  let [volumen, setVolumen] = useState(0.2);

  const adjustVolume = (e) => {
    setVolumen(e.target.value);
    if(power){
      setName("Volumen: " + Math.round(e.target.value * 100));
      setTimeout(() => {
        setName("")
      }, 1500);
    }
  };
  /* keyBoard */
  const [colorKey, setColorKey] = useState(true);
  
  function keyBoardMusic(e) {
    let audio = new Audio;
    audio.volume = document.getElementById("volum").value;
    if(power && !bank){
      switch(e.key.toUpperCase()){
        case bankOne[0].keyTrigger:
      audio.src = bankOne[0].url;
      document.getElementById(bankOne[0].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[0].id).className = "button-inactive";}, 50)
      setName(bankOne[0].id);
        break;
        case bankOne[1].keyTrigger:
      audio.src = bankOne[1].url;
      document.getElementById(bankOne[1].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[1].id).className = "button-inactive";}, 50)
      setName(bankOne[1].id);
        break;
        case bankOne[2].keyTrigger:
      audio.src = bankOne[2].url;
      document.getElementById(bankOne[2].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[2].id).className = "button-inactive";}, 50)
      setName(bankOne[2].id);
        break;            
        case bankOne[3].keyTrigger:
      audio.src = bankOne[3].url;
      document.getElementById(bankOne[3].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[3].id).className = "button-inactive";}, 50)
      setName(bankOne[3].id);
        break;
        case bankOne[4].keyTrigger:
      audio.src = bankOne[4].url;
      document.getElementById(bankOne[4].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[4].id).className = "button-inactive";}, 50)
      setName(bankOne[4].id);
        break;
        case bankOne[5].keyTrigger:
      audio.src = bankOne[5].url;
      document.getElementById(bankOne[5].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[5].id).className = "button-inactive";}, 50)
      setName(bankOne[5].id);
        break;
        case bankOne[6].keyTrigger:
      audio.src = bankOne[6].url;
      document.getElementById(bankOne[6].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[6].id).className = "button-inactive";}, 50)
      setName(bankOne[6].id);
        break;
        case bankOne[7].keyTrigger:
      audio.src = bankOne[7].url;
      document.getElementById(bankOne[7].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[7].id).className = "button-inactive";}, 50)
      setName(bankOne[7].id);
        break;
        case bankOne[8].keyTrigger:
      audio.src = bankOne[8].url;
      document.getElementById(bankOne[8].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[8].id).className = "button-inactive";}, 50)
      setName(bankOne[8].id);
        break;
      }
      audio.play();
    }
    if(power && bank){
      switch(e.key.toUpperCase()){
        case bankTwo[0].keyTrigger:
      audio.src = bankTwo[0].url;
      document.getElementById(bankOne[0].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[0].id).className = "button-inactive";}, 50)
      setName(bankTwo[0].id)
        break;
        case bankTwo[1].keyTrigger:
      audio.src = bankTwo[1].url;
      document.getElementById(bankOne[1].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[1].id).className = "button-inactive";}, 50)
      setName(bankTwo[1].id)
        break;
        case bankTwo[2].keyTrigger:
      audio.src = bankTwo[2].url;
      document.getElementById(bankOne[2].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[2].id).className = "button-inactive";}, 50)
      setName(bankTwo[2].id)
        break;            
        case bankTwo[3].keyTrigger:
      audio.src = bankTwo[3].url;
      document.getElementById(bankOne[3].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[3].id).className = "button-inactive";}, 50)
      setName(bankTwo[3].id)
        break;
        case bankTwo[4].keyTrigger:
      audio.src = bankTwo[4].url;
      document.getElementById(bankOne[4].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[4].id).className = "button-inactive";}, 50)
      setName(bankTwo[4].id)
        break;
        case bankTwo[5].keyTrigger:
      audio.src = bankTwo[5].url;
      document.getElementById(bankOne[5].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[5].id).className = "button-inactive";}, 50)
      setName(bankTwo[5].id)
        break;
        case bankTwo[6].keyTrigger:
      audio.src = bankTwo[6].url;
      document.getElementById(bankOne[6].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[6].id).className = "button-inactive";}, 50)
      setName(bankTwo[6].id)
        break;
        case bankTwo[7].keyTrigger:
      audio.src = bankTwo[7].url;
      document.getElementById(bankOne[7].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[7].id).className = "button-inactive";}, 50)
      setName(bankTwo[7].id)
        break;
        case bankTwo[8].keyTrigger:
      audio.src = bankTwo[8].url;
      document.getElementById(bankOne[8].id).className = "button-active";
      setTimeout(()=>{document.getElementById(bankOne[8].id).className = "button-inactive";}, 50)
      setName(bankTwo[8].id)
        break;
      }
      audio.play();
    }
    };
    
    
    useEffect(()=>{
      document.addEventListener("keyup", keyBoardMusic)
      return() =>{
        document.removeEventListener("keyup", keyBoardMusic)
      }
    }, 
    [power,bank,colorKey])

    setTimeout(()=>{setColorKey(false)}, 1000)
  
  return (
    <div className="drum-machine">
      <div  className='buttons'>
      {
          bankOne.map((boton) => 
          <Boton 
          name={boton.keyTrigger}
          id={boton.id}
          src={boton.url}
          click={click}
          power={power}
          style={colorKey}
          bank={bank}
          volumen={volumen}
          />
          )
        }
      </div>
      <div className='display'>
      <div className="controls-display">
                <span>Power</span>
                <div value={power} id="power" className="control"
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
              id='volum'
              max='1'
              min='0'
              onChange={adjustVolume}
              step='0.01'
              type='range'
              value={volumen}
              name={power}
            />
            </div>
            <div className="controls-display">
                <span>Bank</span>
                <div className="control" 
                style={bank ? controlActive : controlInactive} 
                onClick={cambioBank} >
                    <div className="cube" onClick={idBank}></div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default App;
