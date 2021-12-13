import { useEffect } from 'react'
import wallet from "../../utils/wallet";
import { useSelector, useDispatch } from "react-redux";
import './style.scss'; 
function ConnectModal(props) {
  const { isOpen, closeModal } = props

  const { userAddress, walletConnected, network } = useSelector(
    (state) => state.user
  );

  const handleLogout = async () => {
    try {
      await wallet.disconnect();
    } catch (e) {
      console.log("error in logout ", e);
    }
    closeModal()
  }

    return (
      isOpen ? <div className="overlay">
        <div className="modal">
          <div className="modal-header">
            <div className="title">
              Account
            </div>
            <div className="close-btn" onClick={() => closeModal()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 5.91016L6 18.0901" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 5.91016L18 18.0901" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="modal-body wallet-modal">
            <button className="address">
              <span></span>
              {userAddress.replace(userAddress.substring(6, 38), "...")}
              <a href={"https://snowtrace.io/address/" + userAddress} target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.25 17.5H3.75C3.41862 17.4996 3.10093 17.3677 2.86661 17.1334C2.63229 16.8991 2.50045 16.5814 2.5 16.25V3.75C2.50045 3.41862 2.63229 3.10093 2.86661 2.86661C3.10093 2.63229 3.41862 2.50045 3.75 2.5H10V3.75H3.75V16.25H16.25V10H17.5V16.25C17.4996 16.5814 17.3677 16.8991 17.1334 17.1334C16.8991 17.3677 16.5814 17.4996 16.25 17.5Z" fill="white"/>
                  <path d="M12.5 1.25V2.5H16.6163L11.25 7.86625L12.1337 8.75L17.5 3.38375V7.5H18.75V1.25H12.5Z" fill="white"/>
                </svg>
              </a>
            </button>
            <button>
              Connect wallet
            </button>
            <button onClick={() => handleLogout()}>
              Log out
            </button>
          </div>
        </div>
      </div>
      : <></>
    );
  }
  
  export default ConnectModal;