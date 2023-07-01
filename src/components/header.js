import { memo } from "react";
import "./header.css";
const Header = memo(() => {
  return (
    <div className="header13">
      <div className="headerleft9">
        <div className="categories9">
          <div className="item58">
            <div className="home11">
              <img
                className="iconoutlinehome9"
                alt=""
                src="/iconoutlinehome.svg"
              />
            </div>
          </div>
          <div className="item59">
            <div className="investment9">Investment</div>
            <img className="lighticon7" alt="" src="/lighticon.svg" />
          </div>
          <div className="item60">
            <div className="investment9">Request a Loan</div>
          </div>
          <div className="item61">
            <div className="investment9">Loans List</div>
          </div>
          <div className="item62">
            <div className="investment9">Portfolio</div>
          </div>
          <div className="item62">
            <div className="investment9">Profile</div>
          </div>
        </div>
        <div className="logo20">
          <b className="investment9">LendMe</b>
        </div>
        <img className="vector-icon9" alt="" src="/vector.svg" />
      </div>
    </div>
  );
});

export default Header;
