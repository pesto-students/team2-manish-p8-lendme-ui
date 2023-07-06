import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Header from "../components/header";
import "./loan-request-form.css";
import ButtonComponent from "../meterial-ui-components/Button/ButtonComponent";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

const LoanRequestForm = () => {
  const initialValues = {
    principalAmount: "",
    interestRate: "",
    repaymentFrequency: "",
    tenure: "",
    loanPurpose: "",
    loanRequestExpiryDate: null,
    description: "",
    emiStartDate: null,
  };

  const [formData, setFormData] = useState(initialValues);
  const checkDetails = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(formData);
    //TODO: send data to BE
  };

  return (
    <div className="loanrequestform">
      <Header isUserLoggedIn={true} />
      <form className="sign-up" onSubmit={(e) => checkDetails(e)}>
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
              <FormControl className="firstname">
                <TextField
                  className="loan-request-form-field"
                  color="primary"
                  variant="outlined"
                  type="number"
                  name="principle_amount"
                  id="principle_amount"
                  label="Principal Amount (in Rs)"
                  placeholder="Enter principal amount"
                  size="medium"
                  required={true}
                  margin="none"
                  value={formData.principalAmount}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val < 0 || val > 10000000 || val % 1 !== 0) {
                      return;
                    }
                    setFormData({
                      ...formData,
                      principalAmount: val,
                    });
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "e" || e.key === "-") {
                      e.preventDefault();
                    }
                  }}
                />
              </FormControl>
              <FormControl className="firstname">
                <TextField
                  className="loan-request-form-field"
                  color="primary"
                  variant="outlined"
                  type="number"
                  name="interest-rate"
                  id="interest-rate"
                  label="Interest Rate (% Annually)"
                  placeholder="Enter interest rate"
                  size="medium"
                  required={true}
                  margin="none"
                  value={formData.interestRate}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val < 0 || val > 100) {
                      return;
                    }
                    setFormData({ ...formData, interestRate: val });
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "e" || e.key === "-") {
                      e.preventDefault();
                    }
                  }}
                />
              </FormControl>
            </div>
            <div className="name">
              <FormControl className="firstname">
                <InputLabel>Repayment Frequency</InputLabel>
                <Select
                  className="loan-request-form-field"
                  type="text"
                  name="repayment-frequency"
                  id="repayment-frequency"
                  label="Repayment Frequency"
                  placeholder="Enter repayment frequency"
                  size="medium"
                  required={true}
                  margin="none"
                  value={formData.repaymentFrequency}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      repaymentFrequency: e.target.value,
                    })
                  }
                >
                  <MenuItem value={1}>Monthly</MenuItem>
                  <MenuItem value={2}>Quaterly</MenuItem>
                  <MenuItem value={3}>Half-yearly</MenuItem>
                  <MenuItem value={4}>Yearly</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="firstname">
                <TextField
                  className="loan-request-form-field"
                  color="primary"
                  variant="outlined"
                  type="number"
                  name="tenure"
                  id="tenure"
                  label="Tenure (in Months)"
                  placeholder="Enter tenure"
                  size="medium"
                  required={true}
                  margin="none"
                  value={formData.tenure}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val < 0 || val > 100) {
                      return;
                    }
                    setFormData({ ...formData, tenure: val });
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "e" || e.key === "-") {
                      e.preventDefault();
                    }
                  }}
                />
              </FormControl>
            </div>
            <div className="name">
              <FormControl className="firstname">
                <TextField
                  className="loan-request-form-field"
                  color="primary"
                  variant="outlined"
                  type="text"
                  name="loan-purpose"
                  id="loan-purpose"
                  label="Loan purpose"
                  placeholder="Enter loan purpose"
                  size="medium"
                  required={true}
                  margin="none"
                  value={formData.loanPurpose}
                  onChange={(e) =>
                    setFormData({ ...formData, loanPurpose: e.target.value })
                  }
                />
              </FormControl>
              <FormControl className="firstname">
                <DatePicker
                  className="loan-request-form-field"
                  label="Loan Request Expiry Date"
                  value={formData.loanRequestExpiryDate}
                  required={true}
                  onChange={(e) => {
                    setFormData({ ...formData, loanRequestExpiryDate: e });
                  }}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      required: true,
                    },
                  }}
                />
              </FormControl>
            </div>
            <div className="name">
              <TextField
                className="loan-request-form-field description-field"
                color="primary"
                variant="outlined"
                type=""
                name="description"
                id="description"
                label="Description (optional)"
                placeholder="Enter description"
                size="medium"
                margin="none"
                value={formData.description}
                fullWidth={false}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <FormControl className="firstname">
                <DatePicker
                  className="loan-request-form-field"
                  label="EMI Start Date"
                  value={formData.emiStartDate}
                  required={true}
                  onChange={(e) => {
                    setFormData({ ...formData, emiStartDate: e });
                  }}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      required: true,
                    },
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="bottom">
          <ButtonComponent
            className="cta14"
            buttonText="Request a loan"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default LoanRequestForm;
