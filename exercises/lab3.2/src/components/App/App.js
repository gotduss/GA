/* Imports */
import { Component } from 'react';
import Jukebox from '../Jukebox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jukebox</h1>
        <Jukebox />
      </div>
    );
  }
}

export default App;
