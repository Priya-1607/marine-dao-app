import React from 'react';
import lineshort from '../assets/images/line-short.svg'
import anchor from '../assets/images/anchor.svg'
import ship from '../assets/images/ship.svg'
import lightHouseNoShadow from '../assets/images/lighthouse-no-shadow.svg'

import waves from "../assets/images/waves.svg";
import styles from "../App.module.css";

function RoadMapSecond() {
    return (
        <div>
            <div className="main">
            <div className='grid grid-cols-2 col-span-2 relative  justify-center content-start pl-12 subMain'>
                <div className="grid grid-cols-2 noSpace">
                    <div className={`${styles.roadmapOverlay} flex`}>
                <img className={"lightHouseNoShadow"} src={lightHouseNoShadow} width={130}/>

                        <h1 className={`${styles.heading} relative left-16`}>Road</h1>
                        <h1 className={`${styles.heading} relative top-16 right-52`}>Map</h1>
                    </div>
                    <div className='absolute 2xl:-top-24 2xl:rotate-[351deg;] 2xl:left-48 lg:top-32 md:left-28 md:mt-44 pr-10 md:rotate-[396deg;]'>
                        <img src={lineshort} className={"2xl:w-[650px] lg:w-[500px] md:w-[400px] "}/>


                    </div>

                    <div><img className={"ship2 2xl:ml-96  md:ml-14 lg:ml-36 p-3 py-3 opacity-100"} src={ship} width={200}/></div>
                </div>
                <div className='grid grid-rows-9 relative grid-flow-row gap-4 anc'>

                    <div className={'grid grid-cols-1 gap-y-48 space-between'}>
                    <img className={"anchor"} src={anchor} width={80}/>
                    </div>

                    <p className="phase2 grid-rows-4 row-span-1">
                        Phase 1</p><p className="para2">200/1500 NFTs<br/>Drop daily until September 2022</p>
                    <p className="phase2">Phase 2</p><p className="para2">500/1500 NFTs<br/>Drop daily until December 2022</p>
                    <p className="phase2">Phase 3</p><p className="para2">1000/1500 NFTs<br/>Drop daily until February 2023</p>
                    <p className="phase2">Phase 4</p><p className="para2">1500/1500 NFTs.Final release.<br/>Promote in April 2023</p>

                </div>

                <div className={'absolute bottom-0 right-0'}>
                    <img className={'wa opacity-40'} src={waves}/>
                </div>


            </div>


            </div>

        </div>
    );
}


export default RoadMapSecond;
