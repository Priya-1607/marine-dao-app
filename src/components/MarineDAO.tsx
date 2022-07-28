import React from 'react';
import styles from '../App.module.css'
import boat from '../assets/images/boat.svg'

const MarineDao = () => {
    return (
        <div className={`${styles.pageBack} flex pt-12`}>
            <div className='justify-center content-start pl-12'>
                <h2 className={styles.heading}>MarineDAO</h2>
                <p className={`${styles.subHeading} py-5`}>Owning a ship has never <br/> been easier!
                </p>
                <p className={`${styles.description} py-5`}>
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
            <div className={`${styles.back}`}>

                <img className={styles.image} src={boat}/>
            </div>


        </div>
    );
};

export default MarineDao;

/*
<p>This example demonstrates how to assign an "onmouseover" and "onmouseout" event to a h1 element.</p>

<h1 id="demo" onMouseOver="mouseOver()" onMouseOut="mouseOut()">Mouse over me</h1>


<script>
    function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

    function mouseOut() {
    document.getElementById("demo").style.color = "black";
}
</script>*/