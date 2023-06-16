import React from 'react';
import Heart from './components/heart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Feliz cumpleaños, Laura!</h1>
        <p>Esta página es un regalo especial para ti.</p>
      </header>
      <main>
        <Heart/>
      </main>
      <footer>
        <p>Con amor, David</p>
      </footer>
    </div>
  );
}

export default App;
