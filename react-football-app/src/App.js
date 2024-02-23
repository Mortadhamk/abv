//App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './PlayerList';
import React from 'react'; // Importez React si vous l'utilisez

function App() {
  return (
    <div className="App">
      <div>
        <PlayerList/>
      </div>
    </div>
  );
}

export default App;
