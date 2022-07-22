import React from 'react';
import boatGroup from "../assets/images/boat-group.svg";

function CargoShip() {
    return (
        <div className="cargoShip diagonal-end grid grid-cols-2">
            <div className="left md:-mr-56 lg:mx-auto">
                <div className="ineer md:mt-14">


                      <p className="top lg:pl-8 lg:-mt-8 lg:text-4xl" >Cargo Ships</p><br/>


                    <span className="top-2 lg:pl-8">Fundrising DAO</span><br/>
                    <p className="top-3 lg:pl-8">Mint an NFT,become a member of<br/> the community,divide profits and<br/> partake a role in the future<br/> of the company!</p>

            </div>
            </div>

            <div className="right md:87 "><img  src={boatGroup}/></div>

        </div>

    );
}

export default CargoShip;