import React from 'react';
import './App.css';
import MarineDAO from "./components/MarineDAO";
import CargoShip from "./components/CargoShip";
import MarineDaoShip from "./components/MarineDaoShip";
import RoadMap from "./components/RoadMap";
import RoadmapFirst from "./components/RoadmapFirst";

function App() {
  return (
    <div>
       <MarineDAO/>
        <CargoShip/>
        <MarineDaoShip/>
        <RoadMap/>
        <RoadmapFirst/>
    </div>
  );
}

export default App;
