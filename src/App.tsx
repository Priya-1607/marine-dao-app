import React from 'react';
import './App.css';
import MarineDAO from "./components/MarineDAO";
import CargoShip from "./components/CargoShip";
import MarineDaoShip from "./components/MarineDaoShip";
import ThirdRoadMap from "./components/ThirdRoadMap";
import RoadmapFirst from "./components/RoadmapFirst";
import RoadMapSecond from "./components/RoadMapSecond";

function App() {
  return (
    <div>
       <MarineDAO/>
        <CargoShip/>
        <MarineDaoShip/>
        <ThirdRoadMap/>
        <RoadmapFirst/>
        <RoadMapSecond/>
    </div>
  );
}

export default App;
