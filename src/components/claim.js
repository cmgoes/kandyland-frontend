import './style.scss';

function ClaimBox() {
    return (
      <div className="kandy-box">
        <div className="box-title">Claim Kandy</div>
        <div className="box-body">
          <div className="input-label">Amount to claim</div>
          <div className="input-box">
            <input type="number" />
            <button>Claim</button>
          </div>
          <div className="box-status">
            <span>Deposited: 2000 MIM</span>
            <span>Available to claim: 500 Kandy</span>
            <span>Claiming available from: 15th Dec</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default ClaimBox;