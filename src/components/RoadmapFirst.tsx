import React from 'react';
import styles from './../App.module.css';
import line from '../assets/images/line.svg'
import lightHouseNoShadow from '../assets/images/lighthouse-no-shadow.svg'
import anchor from '../assets/images/anchor.svg'
import ship from '../assets/images/ship.svg'


function RoadmapFirst() {
    return (

        <div className={`${styles.roadmapBg} flex justify-center content-center px-12 pt-12 pb-32`}>
            <div className='absolute p-24'>
                <img src={line} width={1100}/>

            </div>
            <div className={'grid grid-cols-3 gap-y-48 space-between'}>
                <div className={`${styles.roadmapOverlay} flex`}>
                    <img src={lightHouseNoShadow} width={130}/>
                    <h1 className={`${styles.heading} relative left-16`}>Road</h1>
                    <h1 className={`${styles.heading} relative top-16 right-52`}>Map</h1>
                </div>

                <div className={'text-center grid content-end'}>
                    <h2 className={`${styles.phases}`}>Phase 1</h2>
                    <span className={'flex justify-center'}>
                         <p className={`${styles.desc} `}>200/1500 NFTs <br/>
                        Drop daily until September 2022</p>
                    </span>

                </div>
                <div className={'grid justify-center'}>
                    <div className={'flex justify-center content-center'}>
                        <img src={anchor} width={80}/>

                    </div>
                    <h1 className={`${styles.bigRelease} py-2`}>Big Release</h1>
                </div>
                <div className={'text-center'}>
                    <h2 className={`${styles.phases}`}>Phase 2</h2>
                    <span className={'flex justify-center'}>
                         <p className={styles.desc}>500/1500 NFTs <br/>
                        Drop daily until December 2022</p>
                    </span>


                </div>
                <div className={'text-center relative top-32'}>
                    <h2 className={`${styles.phases} `}>Phase 3</h2>
                    <span className={'flex justify-center'}>
                        <p className={styles.desc}>1000/1500 NFTs <br/>
                        Drop daily until February 2023</p>
                    </span>

                </div>
                <div className={`text-center`}>
                    <div className={`grid justify-center`}>
                        <img src={ship} width={120}/>

                    </div>
                    <h2 className={`${styles.phases}`}>Phase 4</h2>
                    <span className={'flex justify-center'}>
                        <p className={styles.desc}>1500/1500 NFTs. Final release.<br/>
                    Promote in April 2023</p>
                    </span>

                </div>
            </div>

        </div>
    );
}

export default RoadmapFirst;
