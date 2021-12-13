import { useEffect } from 'react'
import wallet from "../../utils/wallet";
import './style.scss'; 
function ConnectModal(props) {
  const { isOpen, closeModal } = props

  const handleConnect = async (walletType) => {
    try {
      await wallet.setProvider(walletType);
      await wallet.login(walletType);
    } catch (e) {
      console.log("error in connect ", e);
    }
    closeModal()
  }

  // useEffect(() => {
  //   handleConnect('metamask')
  // }, [])

    return (
      isOpen ? <div className="overlay">
        <div className="modal">
          <div className="modal-header">
            <div className="title">
              Connect your wallet
            </div>
            <div className="description">
              Please connect your wallet with <a href="https://snowtrace.io/" target="_blank">Avalanche network</a>
            </div>
            <div className="close-btn" onClick={() => closeModal()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 5.91016L6 18.0901" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 5.91016L18 18.0901" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="modal-body">
            <button onClick={() => handleConnect('metamask')}>
              <img src="../assets/icons/Metamask.png" />
              Metamask
            </button>
            {/* <button>
              <img src="../assets/icons/TrustWallet.png" />
              TrustWallet
            </button> */}
            <button onClick={() => handleConnect('walletconnect')}>
              <img src="../assets/icons/WalletConnect.png" />
              WalletConnect
            </button>
          </div>
        </div>
      </div>
      : <></>
    );
  }
  
  export default ConnectModal;