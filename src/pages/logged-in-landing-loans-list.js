import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import "./logged-in-landing-loans-list.css";
const LoggedInLandingLoansList = () => {
  return (
    <div className="loggedinlandingloanslist">
      <div className="header4">
        <div className="headerleft3">
          <div className="categories3">
            <div className="item18">
              <div className="home4">
                <img
                  className="iconoutlinehome3"
                  alt=""
                  src="/iconoutlinehome2.svg"
                />
              </div>
            </div>
            <div className="item19">
              <div className="investment3">Investment</div>
              <img className="lighticon3" alt="" src="/lighticon3.svg" />
            </div>
            <div className="item20">
              <div className="investment3">Request a Loan</div>
            </div>
            <div className="item21">
              <div className="investment3">Loans List</div>
            </div>
            <div className="item22">
              <div className="investment3">Portfolio</div>
            </div>
            <div className="item22">
              <div className="investment3">Profile</div>
            </div>
          </div>
          <div className="logo6">
            <b className="investment3">LendMe</b>
          </div>
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </div>
      </div>
      <div className="profileandlogout3">
        <div className="content-wrapper1">
          <div className="content6">
            <div className="jenny-wilson3">Jenny Wilson</div>
            <div className="jenwilsonexamplecom3">jen.wilson@example.com</div>
          </div>
        </div>
        <Button
          className="log-out3"
          variant="outlined"
          name="log_out"
          id="log_out"
          color="primary"
          href="/loginpage"
        >
          Log out
        </Button>
      </div>
      <div className="filters">
        <b className="title6">Filters</b>
        <div className="section">
          <div className="section-title">
            <div className="principle-amount1">Principle amount</div>
            <img className="icons12" alt="" src="/icons5.svg" />
          </div>
          <div className="item24">
            <div className="checkbox">
              <div className="fill" />
              <img
                className="iconsoutlinecheckmark"
                alt=""
                src="/iconsoutlinecheckmark.svg"
              />
            </div>
            <div className="less-than">Less than ₹ 50,000</div>
          </div>
          <div className="item24">
            <div className="checkbox1">
              <div className="fill1" />
              <div className="outline" />
            </div>
            <div className="less-than">₹ 50,000 - ₹ 1Lakh</div>
          </div>
          <div className="item24">
            <div className="checkbox1">
              <div className="fill1" />
              <div className="outline" />
            </div>
            <div className="less-than">₹ 1Lakh - ₹ 10Lakhs</div>
          </div>
          <div className="item24">
            <div className="checkbox1">
              <div className="fill1" />
              <div className="outline" />
            </div>
            <div className="less-than">Greater than ₹ 10Lakhs</div>
          </div>
        </div>
        <div className="section">
          <div className="section-title1">
            <div className="annual-interest-rate">Annual Interest Rate</div>
            <img className="icons12" alt="" src="/icons6.svg" />
          </div>
          <div className="scale-option-parent">
            <div className="scale-option">
              <img className="radio-empty" alt="" src="/radio--empty.svg" />
            </div>
            <div className="less-than">{`< 5%`}</div>
          </div>
          <div className="scale-option-parent">
            <div className="scale-option">
              <img className="radio-empty" alt="" src="/radio--empty.svg" />
            </div>
            <div className="less-than">5% - 8%</div>
          </div>
          <div className="scale-option-parent">
            <div className="scale-option">
              <img className="radio-empty" alt="" src="/radio--empty.svg" />
            </div>
            <div className="less-than">8%-12%</div>
          </div>
          <div className="scale-option-parent">
            <div className="scale-option">
              <img className="radio-empty" alt="" src="/radio--empty.svg" />
            </div>
            <div className="less-than">12%-16%</div>
          </div>
          <div className="scale-option-parent">
            <div className="scale-option4">
              <div className="scale-option">
                <img className="radio-empty" alt="" src="/radio--filled.svg" />
              </div>
            </div>
            <div className="less-than">{`> 16%`}</div>
          </div>
          <div className="dropdown">
            <div className="show-more">Show more</div>
            <img className="icons12" alt="" src="/icons7.svg" />
          </div>
        </div>
      </div>
      <div className="searchbar">
        <div className="section2">
          <FormControl
            className="content7"
            variant="standard"
            id="principle_amount"
          >
            <InputLabel color="primary">Principle Amount</InputLabel>
            <Select
              color="primary"
              name="principle_amount"
              id="principle_amount"
              defaultValue="Select"
              size="medium"
              label="Principle Amount"
            />
            <FormHelperText />
          </FormControl>
          <img className="icons15" alt="" src="/icons8.svg" />
        </div>
        <img className="divider-icon" alt="" src="/divider.svg" />
        <div className="section3">
          <div className="content8">
            <div className="title7">Tenure</div>
            <div className="subtitle3">Select</div>
          </div>
          <img className="icons15" alt="" src="/icons9.svg" />
        </div>
        <img className="divider-icon" alt="" src="/divider1.svg" />
        <div className="section4">
          <div className="content9">
            <div className="title7">Interest Rate</div>
            <div className="subtitle3">Select</div>
          </div>
          <img className="icons15" alt="" src="/icons10.svg" />
        </div>
        <div className="lightbutton2">
          <div className="search">Find a suitable Loan</div>
        </div>
      </div>
      <div className="loggedinlandingloanslist-child" />
      <div className="checkout3">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
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
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout4">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
              </div>
            </div>
          </div>
          <div className="verified">
            <img className="checkbox1" alt="" src="/icons12.svg" />
            <div className="show-more">Verified User</div>
          </div>
        </div>
        <div className="list3">
          <div className="row18">
            <div className="principle-amount2">Principle Amount</div>
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout5">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
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
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout6">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
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
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout7">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
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
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout8">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
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
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout9">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
              </div>
            </div>
          </div>
          <div className="verified">
            <img className="checkbox1" alt="" src="/icons12.svg" />
            <div className="show-more">Verified User</div>
          </div>
        </div>
        <div className="list3">
          <div className="row18">
            <div className="principle-amount2">Principle Amount</div>
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout10">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
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
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
      <div className="checkout11">
        <div className="user1">
          <div className="space">
            <div className="container1">
              <div className="content10">
                <div className="content-wrapper1">
                  <div className="total">Cameron Williamson</div>
                </div>
                <div className="subtitle5">Product Designer</div>
              </div>
            </div>
          </div>
          <div className="verified">
            <img className="checkbox1" alt="" src="/icons12.svg" />
            <div className="show-more">Verified User</div>
          </div>
        </div>
        <div className="list3">
          <div className="row18">
            <div className="principle-amount2">Principle Amount</div>
            <div className="div56">₹ 1,30,000</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Interest Rate</div>
            <div className="div56">5.5%</div>
          </div>
          <div className="row18">
            <div className="principle-amount2">Tenure</div>
            <div className="div56">2 years</div>
          </div>
          <div className="divider1" />
          <div className="row21">
            <div className="total">Total</div>
            <div className="div58">₹ 1,65,960</div>
          </div>
        </div>
        <div className="cta5">
          <div className="show-more">Check Loan Details</div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInLandingLoansList;
