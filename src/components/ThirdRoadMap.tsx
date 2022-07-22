import React from 'react';
import ships from "../assets/images/ships-and-containers.svg";
import wave from "../assets/images/waves.svg";
import anchor from "../assets/images/anchor.svg";

function ThirdRoadMap() {
    return (

            <div className="ShipMain block">

            <label className="img origin-center rotate-3 imgShip 2xl:top-0 2xl:ml-28 md:top-[22rem] md:ml-8 "><img src={ships} width={1000}/></label>

                <div className="subHead">

                    <div className='grid grid-rows-9 relative grid-flow-row gap-4 pr-16 md:pr-0 roadGap 2xl:bottom-20 2xl:pr-32'>
                        <p className="road md:top-24">Road <p className="map -top-12 right-24">Map</p></p>
                        <p className="phase2 grid-rows-4 row-span-1">Phase 1</p><p className="para2 md:bottom-3.5">200/1500 NFTs<br/>Drop daily until September 2022</p>
                        <p className="phase2">Phase 2</p><p className="para2 md:bottom-3.5">500/1500 NFTs<br/>Drop daily until December 2022</p>
                        <p className="phase2">Phase 3</p><p className="para2 md:bottom-3.5">1000/1500 NFTs<br/>Drop daily until February 2023</p>
                        <p className="phase2">Phase 4</p><p className="para2 md:bottom-3.5">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>

                    </div>

                </div>
              <label className="wave opacity-40"><img src={wave}/></label>


        </div>


    );
}

export default ThirdRoadMap;