import React from 'react';
import line from '../assets/images/line.svg'
import anchor from '../assets/images/anchor.svg'
import ship from '../assets/images/ship.svg'
import lightHouseNoShadow from '../assets/images/lighthouse-no-shadow.svg'
import wave from "../assets/images/waves.svg";
import waves from "../assets/images/waves.svg";

function RoadMapSecond() {
    return (
        <div>
            <div className="main">
            <div className='grid grid-cols-2 relative pb-40 justify-center content-start pl-12'>
                <div>
                <img src={lightHouseNoShadow} width={130}/>
                    <h1 className={`relative left-16`}>Road</h1>
                    <h1 className={`relative top-16 right-52`}>Map</h1>
                    <img src={line} width={400}/>
                    <img src={ship} width={160}/>
                </div>
                <div className='grid grid-rows-9 relative grid-flow-row gap-4'>
                    <img src={anchor} width={80}/>
                    <p className="phase2 grid-rows-4 row-span-1">Phase 1</p><p className="para2">200/1500 NFTs<br/>Drop daily until September 2022</p>
                    <p className="phase2">Phase 2</p><p className="para2">500/1500 NFTs<br/>Drop daily until December 2022</p>
                    <p className="phase2">Phase 3</p><p className="para2">1000/1500 NFTs<br/>Drop daily until February 2023</p>
                    <p className="phase2">Phase 4</p><p className="para2">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>

                </div>


            </div>
                <div className={'absolute bottom-0 right-0'}>
                    <img className={'wa opacity-40'} src={waves}/>
                </div>

            </div>

        </div>
    );
}

export default RoadMapSecond;