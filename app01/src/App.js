import React,{useEffect} from 'react';
import './App.css';
// import Parent from './components/ToDo/Parent'
import Parent from './components/ToDo/Parent'

var socket = require('socket.io-client')('http://localhost:4000');

// helloWorld-ReactHooks-SocketIO-master

function App() {

  // [Electro Choc TBoGT] Major Lazer ft. Leftside & Supahype - Jump Up

  const disconnect = () => socket.emit(`disconnect`, { src: socket.id })
  useEffect(() => window.addEventListener('beforeunload', () => disconnect()), [])

  return (
    <div>
      
      <Parent socket={socket}/>

    </div>
  );
}

export default App;
