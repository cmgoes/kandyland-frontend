import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import {ethers} from 'ethers';
import './style.scss';

const KandySale = require("../kandysale-abi.json");
const KandySale_ADDRESS = "0xfc84aA4A1d909f2A9f73e7324a24586E28A00Fe9";
const Mim = require("../mim-abi.json");
const Mim_ADDRESS = "0x130966628846BFd36ff31a822705796e8cb8C18D";

function PurchaseBox() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  const MinAmount = 200;
  const MaxAmount = 400;

  // const jsonProvider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.defibit.io/");
  let jsonProvider = ethers.getDefaultProvider();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  
  const KandySaleContract = new ethers.Contract(KandySale_ADDRESS, KandySale, jsonProvider);
  const MimContract = new ethers.Contract(Mim_ADDRESS, Mim, jsonProvider);

  const handleChange = (event) => setAmount(event.target.value); 
  const onMaxHandle = () => setAmount(MaxAmount);
  const onInvalidHandle = () => setStatus('Please input amount between Min and Max!');
  
  const { userAddress } = useSelector(
    (state) => state.user
  );

  const onBuyKandy = async() => {   
    const _amountOfMIMToSwap = ethers.utils.parseEther("0.000000001").mul(ethers.BigNumber.from(amount)).toString();    
    if (userAddress === "") {
      setStatus("❗Please make sure wallet connected on Avalanch Network.");
    }  
    else {    
      try {          
        const buyKandyTX = await KandySaleContract.connect(provider.getSigner()).buyKANDY(
          _amountOfMIMToSwap,
          { gasLimit: ethers.utils.hexlify(300000), gasPrice: ethers.utils.parseUnits("25", "gwei") }         
        )    
        let receipt = await buyKandyTX.wait();        
        console.log(buyKandyTX);
        console.log(receipt);               
        setStatus("PURCHASED KANDY, CLAIM NOW!"); 

      } catch(e) {  
        console.error(e)
      }      
    }
  }
  
  const onApproveMIM = async() => {   
    const _amountMIMToAllow = ethers.utils.parseEther("1").mul(ethers.BigNumber.from(2000)).toString();    
    if (userAddress === "") {
      setStatus("❗Please make sure wallet connected on Avalanch Network.");
    }  
    else {    
      try {          
        const approveMIMTX = await MimContract.connect(provider.getSigner()).approve(
          ethers.utils.getAddress("0xfc84aA4A1d909f2A9f73e7324a24586E28A00Fe9"),
          _amountMIMToAllow,
          { gasLimit: ethers.utils.hexlify(80000), gasPrice: ethers.utils.parseUnits("25", "gwei") }         
        )    
        let receipt = await approveMIMTX.wait();        
        console.log(approveMIMTX);
        console.log(receipt);               
        setStatus("APPROVED MIM, PURCHASE NOW!"); 

      } catch(e) {  
        console.error(e)
      }      
    }
  }

  useEffect(() => {
    if(userAddress) {
      setIsLoggedIn(true)
    } else{
      setIsLoggedIn(false)
    }
  }, [userAddress])

  return (
    <div className="kandy-box">
      <div className="box-pad">
        <div className="box-title">Purchase Kandy</div>
        {isLoggedIn? <button onClick={onApproveMIM}>Approve</button> : <button onClick={onApproveMIM} disabled>Approve</button>}
      </div>
      <div className="box-body">
        <div className="input-label">Enter a amount of Kandy</div>
        <div className="input-box">
          <div className="input-purchase">
            <input type="number" value={amount} onChange={handleChange} placeholder='200'/>
            <button onClick={onMaxHandle}>Max</button>
          </div>
          {isLoggedIn? [(amount >= MinAmount && amount <= MaxAmount) ? <button onClick={onBuyKandy}>Buy</button> : 
          <button onClick={onInvalidHandle}>Buy</button>] : <button disabled>Buy</button> }          
        </div>
        <div className="box-status">
          <span>Min amount of Kandy: 200</span>
          <span>Max amount of Kandy: 400</span>
          <span>Conversion: 5 MIM = 1 KANDY</span>
          <span className='status-text'>{status}</span>
        </div>
      </div>
    </div>
  );
}
  
  export default PurchaseBox;