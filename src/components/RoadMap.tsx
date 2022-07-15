import React from 'react';
import ships from "../assets/images/ships-and-containers.svg";
import wave from "../assets/images/waves.svg";

function RoadMap() {
    return (

            <div className="ShipMain">

            <label className="img "><img src={ships}/></label>

                <div className="subHead">
            <p className="road">Road <p className="map">Map</p></p>
                    <div className="leftPara">

            <span className="phase">Phase 1</span><p className="para">200/1500 NFTs<br/>Drop daily until September 2022</p>
            <span className="phase">Phase 2</span><p className="para">500/1500 NFTs<br/>Drop daily until December 2022</p>
            <span className="phase">Phase 3</span><p className="para">1000/1500 NFTs<br/>Drop daily until February 2023</p>
            <span className="phase">Phase 4</span><p className="para">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>
                    </div>

                </div>
              <label className="wave"><img src={wave}/></label>


        </div>


    );
}

export default RoadMap;