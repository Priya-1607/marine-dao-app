import React from 'react';
import ships from "../assets/images/ships-and-containers.svg";
import wave from "../assets/images/waves.svg";
import anchor from "../assets/images/anchor.svg";

function ThirdRoadMap() {
    return (

            <div className="ShipMain block">

            <label className="img origin-center rotate-3 md:rotate-2 imgShip"><img src={ships} width={1000}/></label>

                <div className="subHead">

                    <div className='grid grid-rows-9 relative grid-flow-row roadGap'>
                        <p className="road">Road <p className="map">Map</p></p>

                        <p className="phase2 grid-rows-4 row-span-1">Phase 1</p><p className="para2">200/1500 NFTs<br/>Drop daily until September 2022</p>
                        <p className="phase2">Phase 2</p><p className="para2">500/1500 NFTs<br/>Drop daily until December 2022</p>
                        <p className="phase2">Phase 3</p><p className="para2">1000/1500 NFTs<br/>Drop daily until February 2023</p>
                        <p className="phase2">Phase 4</p><p className="para2">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>

                    </div>

                </div>
              <label className="wave opacity-40"><img src={wave}/></label>


        </div>


    );
}

export default ThirdRoadMap;