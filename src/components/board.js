import PurchaseBox from '../components/purchase';
import ClaimBox from '../components/claim';

function Board() {
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
            Total sold: <span>Na</span>
          </div>
          <div>
            Total available LBE: <span>200K KANDY</span>
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