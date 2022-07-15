import React from 'react';
import styles from '../App.module.css'
import ship from './../assets/images/ship.svg'
import lightHouse from './../assets/images/ligh-house.svg'
import waves from './../assets/images/waves.svg'

function MarineDaoShip() {
    return (
        <div>
            <div className={`${styles.marineDaoShip} grid grid-cols-2 relative pb-40`}>

                <div className={'pl-12'}>
                    <img className={'absolute left-1/3 top-24'} width={70} src={lightHouse}/>
                    <img className={'relative left-16 top-28'} src={ship} width={800}/>
                    <img className={'relative left-1/3 '} width={70} src={lightHouse}/>
                </div>


                <div className={'pr-32 pt-24'}>
                    <div className={`${styles.overlay}`}>

                        <h1 className={`${styles.heading1} z-10`}>MarineDAO Ship</h1>
                    </div>
                    <div className={'text-right pr-8 pt-8 z-10 '}>

                        <p className={`${styles.desc} leading-8`}>How important are the cargo ships nowadays?<br/>
                            What are the best logistic ways,used in the<br/>
                            whole world?</p>
                    </div>
                    <div className={'text-right pr-8 z-10 '}>

                        <p className={`${styles.desc} py-8 leading-8`}>What if any person could have<br/> a chance to
                            owe a huge<br/> cargo ship?</p>
                    </div>

                </div>


                <div className={'absolute bottom-0 right-0 '}>
                    <img className={'opacity-40'} src={waves}/>
                </div>

            </div>

        </div>


    );
}

export default MarineDaoShip;
