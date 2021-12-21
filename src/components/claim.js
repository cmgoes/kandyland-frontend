import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import {ethers} from 'ethers';

import './style.scss';

const KandySale = require("../kandysale-abi.json");
const KandySale_ADDRESS = "0xfc84aA4A1d909f2A9f73e7324a24586E28A00Fe9";

function ClaimBox() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('');  
  const [invested, setInvested] = useState(0);
  const [depositInterval, setDepositInterval] = useState(null);

  const provider = new ethers.providers.Web3Provider(window.ethereum); 
  const KandySaleContract = new ethers.Contract(KandySale_ADDRESS, KandySale, provider);

  const { userAddress } = useSelector(
    (state) => state.user
  );

  const onClaimKandy = async() => {      
    const claim = await KandySaleContract.canClaim();
    if (userAddress === "") {
      setStatus("❗Please make sure wallet connected on Avalanch Network.");
    }  
    else {    
      if (claim === false) {
        setStatus("Claim not started yet!");
        console.log(claim);
      } else {
        try {          
          const claimKandyTX = await KandySaleContract.connect(provider.getSigner()).claimKANDY(          
            { gasLimit: ethers.utils.hexlify(80000), gasPrice: ethers.utils.parseUnits("25", "gwei") }         
          )    
          let receipt = await claimKandyTX.wait();        
          console.log(claimKandyTX);
          console.log(receipt);               
          setStatus("CLAIMED KANDY, PURCHASE MORE!"); 

        } catch(e) {  
          console.error(e)
        }
      }      
    }
  }; 

  const getInvested = async () => {
    try {            
      const _invested = await KandySaleContract.invested(userAddress);
      const Invested = parseFloat(_invested.toString()) / 10 ** 9;
      setInvested(Invested);   
      console.log(invested);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(userAddress) {
      setIsLoggedIn(true);           
    } else{
      setIsLoggedIn(false)
    }    
  }, [userAddress]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {    
    if (depositInterval) {
      clearInterval(depositInterval);
    }
    getInvested();
    setDepositInterval(setInterval(getInvested, 1000 * 10));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="kandy-box">
      <div className="box-title">Claim Kandy</div>
      <div className="box-body">
        <div className="input-label">Amount to claim</div>
        <div className="input-box">
          <input type="number" />
          {isLoggedIn? <button onClick={onClaimKandy}>Claim</button> : <button onClick={onClaimKandy} disabled>Claim</button>}
        </div>
        <div className="box-status">
          <span>Deposited: {invested * 5} MIM</span>
          <span>Available to claim: {invested} Kandy</span>
          <span>Claiming available from: 21th Dec</span>
          <span className='status-text'>{status}</span>
        </div>
      </div>
    </div>
  );
}
  
  export default ClaimBox;