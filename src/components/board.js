import { useState, useEffect } from 'react';
import {ethers} from 'ethers';

import PurchaseBox from '../components/purchase';
import ClaimBox from '../components/claim';

const KandySale = require("../kandysale-abi.json");
const KandySale_ADDRESS = "0x121609b6400BC15F4b8BeCEFE186ac1F92a4bC8f";

function Board() {
  const [sold, setSold] = useState(0);
  const [priceInterval, setPriceInterval] = useState(null);
  const Max_sold = 200000;

  const provider = new ethers.providers.Web3Provider(window.ethereum); 
  const KandySaleContract = new ethers.Contract(KandySale_ADDRESS, KandySale, provider);

  const getSold = async () => {
    try {            
      const _sold = await KandySaleContract.sold();
      const Sold = parseFloat(_sold.toString()) / 10 ** 9;
      setSold(Sold);   
      console.log(sold);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {    
    if (priceInterval) {
      clearInterval(priceInterval);
    }
    getSold();
    setPriceInterval(setInterval(getSold, 1000 * 10));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <div className="board-title">    
          Kandyland LBE
      </div>
      <div className="board-status">
        <div>
          Status: <span className="status-label">Live</span>
        </div>
        <div>
          Total sold: <span>{sold}</span>
        </div>
        <div>
          Total available LBE: <span>{ Max_sold - sold } KANDY</span>
        </div>
      </div>
      <div className="board-bar">
        <div className="bar-items">
          <div>
            <span>Total whitelist spots</span>
            <span>600</span>
          </div>
          <div>
            <span>Total spots claimed</span>
            <span>400</span>
          </div>
          <div>
            <span>Remaining</span>
            <span>200</span>
          </div>
        </div>
        <div className="bar-line">
          <div className="active-bar"></div>
        </div>
      </div>
      <div className="boxes">
        <PurchaseBox />
        <ClaimBox />
      </div>
    </div>
  );
}
  
  export default Board;