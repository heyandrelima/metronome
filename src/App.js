import React, { useState } from 'react';
import './App.css';

import Measure from './components/Measure';
import Player from './components/Player';

function App() {
  const [ bpm, setBpm ] = useState(60);

  const handleMeasure = newBpm => {
    setBpm(parseInt(newBpm));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Metronome</h1>
      </header>

      <main>
        <Measure callback={handleMeasure} />
        <Player bpm={bpm} />
      </main>
    </div>
  );
}

export default App;
