import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import logo from '../assets/logo.svg';
function Header(props) {
  const { openConnectModal, openWalletModal } = props
  // const [address, setAddress] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
    <div className="header">
      <div className="logo">    
          <img src={logo} alt='' />Kandyland
      </div>
      <div className="wallet">
        {isLoggedIn ? 
        <div className="user-info">
          {/* <span className="balance">12.043 KANDY</span> */}
          <button className="address" onClick={() => openWalletModal()}>
            {userAddress.replace(userAddress.substring(6, 38), "...")}
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.37468 0.839866H4.1901H5.69083H7.26963C7.87588 0.839866 8.43313 1.26254 8.61016 1.8813H1.37278C1.14731 1.88019 0.900448 1.68315 0.900448 1.36058C0.900448 1.03711 1.1487 0.839866 1.37468 0.839866ZM7.26963 0H5.69083H4.1901H1.37468C0.580157 0 0 0.642625 0 1.36058C0 1.40813 0.00254449 1.45535 0.00752723 1.50207C0.00258381 1.52699 0 1.55269 0 1.57895V2.30123V4.3617V7.91154C0 9.06823 1.00696 10 2.23911 10H9.76085C11.001 10 12 9.06079 12 7.91154V3.97661C12.0067 2.81987 11 1.8813 9.76686 1.8813H9.52989C9.33458 0.835845 8.42411 0 7.26963 0ZM0.900448 2.72116H1.37103L1.37468 2.72117H5.69083L5.69294 2.72116H9.11644L9.11855 2.72117L9.12066 2.72116H9.76686C10.5022 2.72116 11.104 3.28245 11.0995 3.97282L11.0995 3.97536V7.91154C11.0995 8.59879 10.5017 9.16014 9.76085 9.16014H2.23911C1.50229 9.16014 0.900448 8.60255 0.900448 7.91154V4.36192L0.900448 4.3617L0.900448 2.72116ZM9.57476 5.94066C9.57476 6.01487 9.51026 6.07504 9.43069 6.07504C9.35112 6.07504 9.28662 6.01487 9.28662 5.94066C9.28662 5.86644 9.35112 5.80628 9.43069 5.80628C9.51026 5.80628 9.57476 5.86645 9.57476 5.94066ZM9.43069 5.23517C9.01295 5.23517 8.67432 5.55103 8.67432 5.94066C8.67432 6.33028 9.01295 6.64615 9.43069 6.64615C9.84843 6.64615 10.1871 6.33029 10.1871 5.94066C10.1871 5.55103 9.84843 5.23517 9.43069 5.23517Z" fill="white"/>
            </svg>
          </button>
        </div>
        : 
        <button className="connect-btn" onClick={() => openConnectModal()}>
            Connect to your wallet
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.37468 0.839866H4.1901H5.69083H7.26963C7.87588 0.839866 8.43313 1.26254 8.61016 1.8813H1.37278C1.14731 1.88019 0.900448 1.68315 0.900448 1.36058C0.900448 1.03711 1.1487 0.839866 1.37468 0.839866ZM7.26963 0H5.69083H4.1901H1.37468C0.580157 0 0 0.642625 0 1.36058C0 1.40813 0.00254449 1.45535 0.00752723 1.50207C0.00258381 1.52699 0 1.55269 0 1.57895V2.30123V4.3617V7.91154C0 9.06823 1.00696 10 2.23911 10H9.76085C11.001 10 12 9.06079 12 7.91154V3.97661C12.0067 2.81987 11 1.8813 9.76686 1.8813H9.52989C9.33458 0.835845 8.42411 0 7.26963 0ZM0.900448 2.72116H1.37103L1.37468 2.72117H5.69083L5.69294 2.72116H9.11644L9.11855 2.72117L9.12066 2.72116H9.76686C10.5022 2.72116 11.104 3.28245 11.0995 3.97282L11.0995 3.97536V7.91154C11.0995 8.59879 10.5017 9.16014 9.76085 9.16014H2.23911C1.50229 9.16014 0.900448 8.60255 0.900448 7.91154V4.36192L0.900448 4.3617L0.900448 2.72116ZM9.57476 5.94066C9.57476 6.01487 9.51026 6.07504 9.43069 6.07504C9.35112 6.07504 9.28662 6.01487 9.28662 5.94066C9.28662 5.86644 9.35112 5.80628 9.43069 5.80628C9.51026 5.80628 9.57476 5.86645 9.57476 5.94066ZM9.43069 5.23517C9.01295 5.23517 8.67432 5.55103 8.67432 5.94066C8.67432 6.33028 9.01295 6.64615 9.43069 6.64615C9.84843 6.64615 10.1871 6.33029 10.1871 5.94066C10.1871 5.55103 9.84843 5.23517 9.43069 5.23517Z" fill="white"/>
            </svg>
        </button>
      }
      </div>
    </div>
  );
}
  
  export default Header;