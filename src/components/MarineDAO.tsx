import React from 'react';
import styles from '../App.module.css'

const MarineDao = () => {
    return (
        <div className={`${styles.pageBack} grid grid-cols-4`}>
            <div className='grid grid-cols-1 justify-center content-start pl-12 pt-12'>
                <h2 className={styles.heading}>MarineDAO</h2>
                <p className={`${styles.subHeading} py-5`}>Owning a ship has never <br/> been easier!
                </p>
                <p className={`${styles.description} py-5 w-50`}>
                    Mint an NFT, become a member of <br/> the community, divide profits and <br/> partake a role in the
                    future <br/>
                    of the company!
                </p>
                <div className='py-5'>
                    <button className={` ${styles.joinBtn} py-1 px-5 border border-1 rounded-md border-teal-300`}>Join
                        MarineDAO
                    </button>

                </div>
            </div>
            <div className={`${styles.back} grid col-start-2 col-span-3 content-end`}>
                {/*<img className={styles.image} height={400} width={800} src={boat}/>*/}
            </div>


        </div>
    );
};

export default MarineDao;
