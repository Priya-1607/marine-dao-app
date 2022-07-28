import React from 'react';
import V2HalfBoat from "../assets/images/V2HalfBoat.svg";

function V2SecondRoadMap() {
    return (
        <div  className="break-before-column mapDiv">
            <div className="mapSubDiv grid grid-cols-2 gap-y-0">
                <div className="leftPhase">
                <h2 className="mapHeading">Phase1</h2>
                <p className="mapPara">200/1500 NFTs<br/>Drop daily until September 2022</p>
                    <h2 className="mapHeading">Phase 2</h2>
                    <p className="mapPara">500/1500 NFTs<br/>Drop daily until December 2022</p>

                </div>

                <div className="RightPhase">
                    <h1 className="V2Road">Road</h1>
                    <p className="V2Map">Map</p>
                    <p className="mapHeading phase3">Phase 3</p>
                    <p className="mapPara">1000/1500 NFTs<br/>Drop daily until February 2023</p>
                    <h2 className="mapHeading">Phase 4</h2>
                    <p className="mapPara">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>

                </div>
                <div>

                    <img className="break-after-column HalfBoat rotate-[0.13deg]" src={V2HalfBoat}/>
                </div>
            </div>
        </div>
    );
}

export default V2SecondRoadMap;