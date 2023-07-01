import { TextField } from "@mui/material";
import Header from "../components/header";
import ProfileAndLogout from "../components/profile-and-logout";
import "./loan-request-form.css";
const LoanRequestForm = () => {
  return (
    <div className="loanrequestform">
      <Header />
      <ProfileAndLogout />
      <div className="sign-up">
        <div className="top">
          <div className="title">
            <div className="loan-request-form-wrapper">
              <div className="loan-request-form">Loan Request Form</div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="inputs">
            <div className="name">
              <div className="firstname">
                <div className="principal-amount">Principal Amount</div>
                <TextField
                  className="search-bar"
                  color="primary"
                  variant="outlined"
                  defaultValue="20000"
                  type="text"
                  name="principle_amount"
                  id="principle_amount"
                  label="Principal Amount"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className="firstname">
                <div className="principal-amount">Interest Rate (Annually)</div>
                <div className="search-bar1">
                  <div className="div">8%</div>
                </div>
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <div className="principal-amount">Repayment Frequency</div>
                <div className="search-bar1">
                  <div className="div">Monthly</div>
                </div>
              </div>
              <div className="firstname">
                <div className="principal-amount">Tenure</div>
                <div className="search-bar1">
                  <div className="div">1 Year</div>
                </div>
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <div className="principal-amount">Loan Purpose</div>
                <div className="search-bar1">
                  <div className="div">Education</div>
                </div>
              </div>
              <div className="firstname">
                <div className="principal-amount">Loan Request Expiry Date</div>
                <div className="search-bar1">
                  <div className="div">30/06/2023</div>
                </div>
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <div className="principal-amount">Description (optional)</div>
                <div className="search-bar6" />
              </div>
              <div className="firstname">
                <div className="principal-amount">EMI Start Date</div>
                <div className="search-bar1">
                  <div className="div">30/06/2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="cta">
            <div className="label">Request a Loan</div>
            <img className="icons" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRequestForm;
