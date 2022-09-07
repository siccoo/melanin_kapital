import "./fundstatistics.css";

import { FiArrowUpRight } from "react-icons/fi";
import LoanHistory from "../loanHistory/LoanHistory";

export default function FundStatistics() {
  return (
    <div className="fundStatWrapper">
      <section className="fundStatContainer">
        <p>Get more funding today!</p>
        <span>
          What kind of funding would you like to get for your business?
        </span>
        <div style={{display: 'flex',justifyContent:'space-between'}}>
        <div className="fundStatLoan">
          <p>
            Get <br />A Loan{" "}{" "}
            {" "}<span>
              <FiArrowUpRight />
            </span>
          </p>
        </div>
        <div className="fundStatCapital">
          <p>
            Get Private <br />Capital{" "}
            <span>
              <FiArrowUpRight />
            </span>
          </p>
        </div>
        </div>
        
      </section>

      <section className="fundStatContainerOne">
        <p>Funds statistics</p>
        <div className="roundedContainer">
          <p>KES 6,690,900</p>
          <span>Total private capital</span>
        </div>
        <div className="roundedContainer">
          <p>KES 3,000,000</p>
          <span>Total loan borrowed</span>
        </div>
      </section>
    <LoanHistory />
    </div>
  );
}
