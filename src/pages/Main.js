import { useState } from 'react'
import Header from '../components/header';
import Board from '../components/board';
import JoinUs from '../components/join';
import Footer from '../components/footer';
import ConnectModal from '../components/modal/connectmodal';
import WalletModal from '../components/modal/walletmodal';
import '../style.scss';

function Main() {
  const [connectModal, setConnectModal] = useState(false)
  const [walletModal, setWalletModal] = useState(false)
  return (
    <div className="App">
      <Header openConnectModal={() => setConnectModal(true)}  openWalletModal={() => setWalletModal(true)} />
      <Board />
      <JoinUs />
      <Footer />
      <ConnectModal isOpen={connectModal} closeModal={() => setConnectModal(false)} />
      <WalletModal isOpen={walletModal} closeModal={() => setWalletModal(false)} />
    </div>
  );
}

export default Main;
