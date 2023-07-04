import { TextField } from "@mui/material";
import Header from "../components/header";
import "./loan-request-form.css";
import ButtonComponent from "../meterial-ui-components/Button/ButtonComponent";
import { useState } from "react";
const LoanRequestForm = () => {
  const initialValues = {
    principalAmount: "",
    interestRate: "",
    repaymentFrequency: "",
    tenure: "",
    loanPurpose: "",
    loanRequestExpiryDate: "",
    description: "",
    emiStartDate: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const checkDetails = () => {
    console.log(formData);
    //TODO: send data to BE
  };

  return (
    <div className="loanrequestform">
      <Header isUserLoggedIn={true} />

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
                <TextField
                  className="principal-amount"
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
                  onChangeHandler={(e) =>
                    setFormData({...formData, principalAmount: e.target.value})
                  }
                />
              </div>
              <div className="firstname">
                <TextField
                  className="principal-amount"
                  color="primary"
                  variant="outlined"
                  defaultValue=""
                  type="text"
                  name="interest-rate"
                  id="interest-rate"
                  label="Interest Rate (Annually)"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                  onChangeHandler={(e) =>
                    setFormData({ ...formData, interestRate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <TextField
                  className="principal-amount"
                  color="primary"
                  variant="outlined"
                  defaultValue=""
                  type="text"
                  name="repeyment-frequency"
                  id="repeyment-frequency"
                  label="Repayment Frequency"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                  onChangeHandler={(e) =>
                    setFormData({...formData, repaymentFrequency: e.target.value})
                  }
                />
              </div>
              <div className="firstname">
                <TextField
                  className="principal-amount"
                  color="primary"
                  variant="outlined"
                  defaultValue="1 year"
                  type="text"
                  name="tenure"
                  id="tenure"
                  label="Tenure"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                  onChangeHandler={(e) =>
                    setFormData({ ...formData, tenure: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="name">
              <div className="firstname">
                <TextField
                  className="principal-amount"
                  color="primary"
                  variant="outlined"
                  defaultValue="education"
                  type="text"
                  name="loan-purpose"
                  id="loan-purpose"
                  label="Loan purpose"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                  onChangeHandler={(e) =>
                    setFormData({ ...formData, loanPurpose: e.target.value })
                  }
                />
              </div>
              <div className="firstname">
                <TextField
                  className="principal-amount"
                  color="primary"
                  variant="outlined"
                  defaultValue=""
                  type="text"
                  name="loan-request-expiry-date"
                  id="loan-request-expiry-date"
                  label="Loan Request Expiry Date"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                  onChangeHandler={(e) =>
                    setFormData({
                      ...formData,
                      loanRequestExpiryDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="name">
              <TextField
                className="principal-amount"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="description"
                id="description"
                label="Description(optional)"
                placeholder="Placeholder"
                size="medium"
                margin="none"
                onChangeHandler={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <div className="firstname">
                <TextField
                  className="principal-amount"
                  color="primary"
                  variant="outlined"
                  defaultValue=""
                  type="text"
                  name="emi-start-date"
                  id="emi-start-date"
                  label="EMI Start Date"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                  onChangeHandler={(e) =>
                    setFormData({ ...formData, emiStartDate: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <ButtonComponent
            className="cta14"
            buttonText="Request a loan"
            onClickHandler={() => {
              checkDetails();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoanRequestForm;
