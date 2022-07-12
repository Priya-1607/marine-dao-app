import React from 'react';
import boatGroup from "../assets/images/boat-group.svg";

function CargoShip() {
    return (
        <div className="cargoShip diagonal-end grid grid-cols-2">
            <div className="left">
                <div className="ineer">


                      <span className="top" >Cargo Ships</span><br/>


                    <span className="top-2">Fundrising DAO</span><br/>
                    <p className="top-3">Mint an NFT,become a member of the community,divide profits and partake a role in the future of the company!</p>

            </div>
            </div>

            <div className="right"><img src={boatGroup}/></div>

        </div>

    );
}

export default CargoShip;