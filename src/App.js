import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad'


 let sounds = [
  {
    key:'Q',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key:'W',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'

  },
  {
    key:'E',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key:'A',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key:'S',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key:'D',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key:'Z',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key:'X',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key:'C',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
]

class App extends  React.Component {
 
  render(){
    return(
      <div id="drum-machine" className="container">
        <div id="display" className="display">
        <h1>Toca la cancion</h1>
        {sounds.map((sound,index)=>(
          <DrumPad text={sound.key} key={index} audio={sound.mp3}/>
    
        ))}
        </div>
      </div>
    )
  }
  
}

export default App;
