import React from 'react';
import boatGroup from "../assets/images/boat-group.svg";

function CargoShip() {
    return (
        <div className="cargoShip grid grid-cols-2">

                <div className="left">

                    <h1>Cargo Ships</h1>


                    <h2>Fundrising DAO</h2>
                    <p>Mint an NFT,become a member of the community,divide profits and partake a role in the future of the company!</p>


            </div>



            <div><img src={boatGroup}/></div>

        </div>

    );
}

export default CargoShip;