import React from 'react';
import V2Boat from "../assets/images/V2Boat.svg";

function V2ThirdRoadMap( ) {
    return (
        <div>

            <div className="V2Main grid grid-cols-3 gap-4">

                <div className="leftBlock">
                    <p className="grid-rows-4 row-span-1 phaseV2">Phase 1</p><p className="V2para">200/1500 NFTs<br/>Drop daily until September 2022</p>
                    <p className="phaseV2">Phase 2</p><p className="V2para">500/1500 NFTs<br/>Drop daily until December 2022</p>

                </div>
                <div className="rightBlock relative">
                    <p className="phaseV2">Phase 3</p><p className="V2para ">1000/1500 NFTs<br/>Drop daily until February 2023</p>
                    <p className="phaseV2">Phase 4</p><p className="V2para">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>
                </div>
                    <div>
                        <span>Road</span>
                        <span>Map</span>
                    </div>
                <img src={V2Boat} width={1500}/>



                </div>
            </div>

    );
}

export default V2ThirdRoadMap;