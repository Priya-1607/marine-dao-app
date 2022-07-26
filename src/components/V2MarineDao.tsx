import React from 'react';

import V2waves from "../assets/images/Marinewave.svg";

function V2MarineDao() {
    return (
        <div>
            <div className="mainDiv grid justify-items-center ...">
            <h1 className="mainHeading">MarineDAO</h1>
            <h2 className="mainHeading2">Owning a ship has never been easier and funnier</h2><br/>
                <p className="mainHeading3">Owning a ship has never been easier and funnier.</p>
           <p className="mainHeading4"> Mint an NFT,become a member of the community,divide</p>
           <p className="mainHeading5"> profits and partake a role in the future of the company!</p>

                <div>
                    <div>
                        <img className={'opacity-40'} src={V2waves}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default V2MarineDao;