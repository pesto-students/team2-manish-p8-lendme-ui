import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  CircularProgress,
} from "@mui/material";
import "./logged-in-landing-loans-list.scss";
import Header from "../components/header/header";
import { useEffect, useState } from "react";
import { loanStatus, urlRoutes } from "../constants";
import { numberWithCommaINR } from "../utils/number-utils";
import { months2years } from "../utils/date-utils";
import ButtonComponent from "../components/material-ui-components/button/button-component";
import { read } from "../utils/axios-utils";
import { getFullName } from "../utils/string-utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoggedInLandingLoansList = () => {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([]);

  const [findSuitableLoanFormData, setFindSuitableLoanFormData] = useState({
    principleAmount: "",
    tenure: "",
    interestRate: "",
  });

  const [principleAmountFilterData, setPrincipleAmountFilterData] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const [interestRateFilterData, setInterestRateFilterData] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resp = await read("loan?limit=100&offset=0");
      if (resp.status === "SUCCESS") {
        const user = JSON.parse(localStorage.getItem("user"));
        const loanList = resp.data.loans.filter(
          (loan) =>
            loan.loanStatus === loanStatus.REQUESTED &&
            user.email !== loan.borrower?.email
        );
        console.log(loanList);
        setLoans(loanList);
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    })();
  }, []);

  const onClickFindSuitableLoan = () => {
    console.log(findSuitableLoanFormData);
    //call get loans with filters
  };

  const handleCheckLoanDetailsClick = (loanData) => {
    navigate(`${urlRoutes.loanDetailPage}/${loanData.id}`);
  };

  return (
    <div className="loggedinlandingloanslist">
      <Header />
      <div className="filters">
        <b className="title6">Filters</b>
        <div className="section">
          <div className="section-title">
            <div className="principle-amount1">Principle amount</div>
          </div>
          <div className="item24">
            <Checkbox
              checked={principleAmountFilterData.one}
              onChange={() => {
                setPrincipleAmountFilterData({
                  ...principleAmountFilterData,
                  one: !principleAmountFilterData.one,
                });
              }}
            />
            <div className="less-than">Less than ₹ 50,000</div>
          </div>
          <div className="item24">
            <Checkbox
              checked={principleAmountFilterData.two}
              onChange={() => {
                setPrincipleAmountFilterData({
                  ...principleAmountFilterData,
                  two: !principleAmountFilterData.two,
                });
              }}
            />
            <div className="less-than">₹ 50,000 - ₹ 1Lakh</div>
          </div>
          <div className="item24">
            <Checkbox
              checked={principleAmountFilterData.three}
              onChange={() => {
                setPrincipleAmountFilterData({
                  ...principleAmountFilterData,
                  three: !principleAmountFilterData.three,
                });
              }}
            />
            <div className="less-than">₹ 1Lakh - ₹ 10Lakhs</div>
          </div>
          <div className="item24">
            <Checkbox
              checked={principleAmountFilterData.four}
              onChange={() => {
                setPrincipleAmountFilterData({
                  ...principleAmountFilterData,
                  four: !principleAmountFilterData.four,
                });
              }}
            />
            <div className="less-than">Greater than ₹ 10Lakhs</div>
          </div>
        </div>
        <RadioGroup className="section">
          <div className="section-title1">
            <div className="annual-interest-rate">Annual Interest Rate</div>
          </div>
          <div className="scale-option-parent">
            <Radio
              checked={interestRateFilterData.one}
              onChange={() => {
                setInterestRateFilterData({
                  one: true,
                  two: false,
                  three: false,
                  four: false,
                  five: false,
                });
              }}
            />
            <div className="less-than">{`< 5%`}</div>
          </div>
          <div className="scale-option-parent">
            <Radio
              checked={interestRateFilterData.two}
              onChange={() => {
                setInterestRateFilterData({
                  one: false,
                  two: true,
                  three: false,
                  four: false,
                  five: false,
                });
              }}
            />
            <div className="less-than">5% - 8%</div>
          </div>
          <div className="scale-option-parent">
            <Radio
              checked={interestRateFilterData.three}
              onChange={() => {
                setInterestRateFilterData({
                  one: false,
                  two: false,
                  three: true,
                  four: false,
                  five: false,
                });
              }}
            />
            <div className="less-than">8%-12%</div>
          </div>
          <div className="scale-option-parent">
            <Radio
              checked={interestRateFilterData.four}
              onChange={() => {
                setInterestRateFilterData({
                  one: false,
                  two: false,
                  three: false,
                  four: true,
                  five: false,
                });
              }}
            />
            <div className="less-than">12%-16%</div>
          </div>
          <div className="scale-option-parent">
            <div className="scale-option4">
              <Radio
                checked={interestRateFilterData.five}
                onChange={() => {
                  setInterestRateFilterData({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: true,
                  });
                }}
              />
            </div>
            <div className="less-than">{`> 16%`}</div>
          </div>
        </RadioGroup>
      </div>
      <div className="searchbar">
        <div className="section2">
          <FormControl
            className="content7"
            variant="standard"
            id="principle_amount"
          >
            <InputLabel>Principle Amount</InputLabel>
            <Select
              name="principle_amount"
              id="principle_amount"
              size="medium"
              placeholder="Select Principle Amount"
              onChange={(e) =>
                setFindSuitableLoanFormData({
                  ...findSuitableLoanFormData,
                  principleAmount: e.target.value,
                })
              }
            >
              <MenuItem value={"1000-100000"}>{`${numberWithCommaINR(
                1000
              )} - ${numberWithCommaINR(100000)}`}</MenuItem>
              <MenuItem value={"100000-500000"}>{`${numberWithCommaINR(
                100000
              )} - ${numberWithCommaINR(500000)}`}</MenuItem>
              <MenuItem value={"500000-5000000"}>{`${numberWithCommaINR(
                500000
              )} - ${numberWithCommaINR(5000000)}`}</MenuItem>
              <MenuItem value={"5000000"}>{`${numberWithCommaINR(
                5000000
              )}+`}</MenuItem>
            </Select>
          </FormControl>
        </div>
        <img className="divider-icon" alt="" src="/divider.svg" />
        <div className="section3">
          <FormControl className="content7" variant="standard" id="tenure">
            <InputLabel>Tenure</InputLabel>
            <Select
              name="tenure"
              id="tenure"
              size="medium"
              placeholder="Select Tenure"
              onChange={(e) =>
                setFindSuitableLoanFormData({
                  ...findSuitableLoanFormData,
                  tenure: e.target.value,
                })
              }
            >
              <MenuItem value={"0-12"}>Less than an year</MenuItem>
              <MenuItem value={"12-36"}>1-3 years</MenuItem>
              <MenuItem value={"36-60"}>3-5 years</MenuItem>
              <MenuItem value={"60"}>5+ years</MenuItem>
            </Select>
          </FormControl>
        </div>
        <img className="divider-icon" alt="" src="/divider1.svg" />
        <div className="section4">
          <FormControl
            className="content7"
            variant="standard"
            id="interest_rate"
          >
            <InputLabel>Interest Rate</InputLabel>
            <Select
              name="interest_rate"
              id="interest_rate"
              size="medium"
              placeholder="Select Interest Rate"
              onChange={(e) =>
                setFindSuitableLoanFormData({
                  ...findSuitableLoanFormData,
                  interestRate: e.target.value,
                })
              }
            >
              <MenuItem value={"0-5"}>0% to 5%</MenuItem>
              <MenuItem value={"5-10"}>5% to 10%</MenuItem>
              <MenuItem value={"10-15"}>10% to 15%</MenuItem>
              <MenuItem value={"15-20"}>15% to 20%</MenuItem>
              <MenuItem value={"20"}>20% +</MenuItem>
            </Select>
          </FormControl>
        </div>
        <ButtonComponent
          className="search"
          buttonText={"Find a suitable Loan"}
          onClickHandler={onClickFindSuitableLoan}
        />
      </div>
      <div className="loggedinlandingloanslist-child">
        {loading ? (
          <div className="loader-container">
            <CircularProgress
              style={{
                color: "#64748b",
              }}
            />
          </div>
        ) : (
          loans.map((loan) => (
            <div className="checkout3">
              <div className="user1">
                <div className="space">
                  <div className="container1">
                    <div className="content10">
                      <div className="content-wrapper1">
                        <div className="total">
                          {getFullName(
                            loan.borrower.firstName,
                            loan.borrower.lastName
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="verified">
                  <img className="checkbox1" alt="" src="/icons11.svg" />
                  <div className="show-more">Verified User</div>
                </div>
              </div>
              <div className="list3">
                <div className="row18">
                  <div className="principle-amount2">Principle Amount</div>
                  <div className="div56">{numberWithCommaINR(loan.amount)}</div>
                </div>
                <div className="row18">
                  <div className="principle-amount2">Interest Rate</div>
                  <div className="div56">{`${loan.interestRate}%`}</div>
                </div>
                <div className="row18">
                  <div className="principle-amount2">Tenure</div>
                  <div className="div56">{months2years(loan.tenureMonths)}</div>
                </div>
                <div className="divider1" />
                <div className="row21">
                  <div className="total">Total</div>
                  <div className="div58">
                    {numberWithCommaINR(
                      parseFloat(loan.amount || 0) +
                        parseFloat(loan.interest || 0),
                      true
                    )}
                  </div>
                </div>
              </div>
              <ButtonComponent
                className="cta5"
                buttonText={"Check Loan Details"}
                onClickHandler={() => handleCheckLoanDetailsClick(loan)}
              ></ButtonComponent>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LoggedInLandingLoansList;
