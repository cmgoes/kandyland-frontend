import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import './style.scss';

function PurchaseBox() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  const MinAmount = 200;
  const MaxAmount = 400;

  const handleChange = (event) => setAmount(event.target.value); 
  const onMaxHandle = () => setAmount(MaxAmount);
  const onInvalidHandle = () => setStatus('Please input amount between Min and Max!');
  
  const { userAddress } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if(userAddress) {
      setIsLoggedIn(true)
    } else{
      setIsLoggedIn(false)
    }
  }, [userAddress])

  return (
    <div className="kandy-box">
      <div className="box-title">Purchase Kandy</div>
      <div className="box-body">
        <div className="input-label">Enter a amount of MIM</div>
        <div className="input-box">
          <div className="input-purchase">
            <input type="number" value={amount} onChange={handleChange} placeholder='200'/>
            <button onClick={onMaxHandle}>Max</button>
          </div>
          {isLoggedIn? [(amount >= MinAmount && amount <= MaxAmount) ? <button>Buy</button> : 
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