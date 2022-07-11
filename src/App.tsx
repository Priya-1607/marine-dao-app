import React from 'react';
import './App.css';
import boat from './assets/images/boat.svg'
import boatGroup from './assets/images/boat-group.svg'
import MarineDAO from "./components/MarineDAO";
import CargoShip from "./components/CargoShip";

function App() {
  return (
    <div>
       <MarineDAO/>
        <CargoShip/>
    </div>
  );
}

export default App;
