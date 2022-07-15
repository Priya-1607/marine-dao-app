import React from 'react';
import './App.css';
import boat from './assets/images/boat.svg'
import boatGroup from './assets/images/boat-group.svg'
import MarineDAO from "./components/MarineDAO";
import CargoShip from "./components/CargoShip";
import MarineDaoShip from "./components/MarineDaoShip";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <div>
       <MarineDAO/>
        <CargoShip/>
        <MarineDaoShip/>
        <RoadMap/>
    </div>
  );
}

export default App;
