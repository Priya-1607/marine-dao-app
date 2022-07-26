import React from 'react';
import './App.css';
import MarineDAO from "./components/MarineDAO";
import CargoShip from "./components/CargoShip";
import MarineDaoShip from "./components/MarineDaoShip";
import ThirdRoadMap from "./components/ThirdRoadMap";
import RoadmapFirst from "./components/RoadmapFirst";
import RoadMapSecond from "./components/RoadMapSecond";
import V2MarineDao from "./components/V2MarineDao";
import V2SecondRoadMap from "./components/V2SecondRoadMap";
import V2ThirdRoadMap from "./components/V2ThirdRoadMap";

function App() {
  return (
    <div>

       <MarineDAO/>
        <CargoShip/>
        <MarineDaoShip/>
        <ThirdRoadMap/>
        <RoadmapFirst/>
        <RoadMapSecond/>
        <V2MarineDao/>
        <V2ThirdRoadMap/>
        <V2SecondRoadMap/>

    </div>
  );
}

export default App;
