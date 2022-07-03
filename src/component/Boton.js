import React from "react";
import '../styles-components/botones.css'

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

    

function Boton({ keyName, power, bank }){

    function Sonido(){
        let audio = new Audio;
        if(power && !bank){
          switch(keyName){
            case bankOne[0].keyTrigger:
          audio.src = bankOne[0].url;
            break;
            case bankOne[1].keyTrigger:
          audio.src = bankOne[1].url;
            break;
            case bankOne[2].keyTrigger:
          audio.src = bankOne[2].url;
            break;            
            case bankOne[3].keyTrigger:
          audio.src = bankOne[3].url;
            break;
            case bankOne[4].keyTrigger:
          audio.src = bankOne[4].url;
            break;
            case bankOne[5].keyTrigger:
          audio.src = bankOne[5].url;
            break;
            case bankOne[6].keyTrigger:
          audio.src = bankOne[6].url;
              break;
            case bankOne[7].keyTrigger:
          audio.src = bankOne[7].url;
            break;
            case bankOne[8].keyTrigger:
          audio.src = bankOne[8].url;
            break;
          }
      }
      if(power && bank){
        switch(keyName){
          case bankOne[0].keyTrigger:
        audio.src = bankTwo[0].url;
          break;
          case bankOne[1].keyTrigger:
        audio.src = bankTwo[1].url;
          break;
          case bankOne[2].keyTrigger:
        audio.src = bankTwo[2].url;
          break;            
          case bankOne[3].keyTrigger:
        audio.src = bankTwo[3].url;
          break;
          case bankOne[4].keyTrigger:
        audio.src = bankTwo[4].url;
          break;
          case bankOne[5].keyTrigger:
        audio.src = bankTwo[5].url;
          break;
          case bankOne[6].keyTrigger:
        audio.src = bankTwo[6].url;
            break;
          case bankOne[7].keyTrigger:
        audio.src = bankTwo[7].url;
          break;
          case bankOne[8].keyTrigger:
        audio.src = bankTwo[8].url;
          break;
        }
      }
        audio.play();
      }

    return(
        <button onClick={Sonido}>{keyName}</button>
    )
}

export default Boton