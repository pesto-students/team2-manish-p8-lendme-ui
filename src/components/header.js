import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { urlRoutes } from "../constants";

const Header = memo(
  ({
    isUserLoggedIn = false,
    userFullName = "abc abc",
    userEmail = "abc@abc.abc",
  }) => {
    const navigate = useNavigate();

    const handleNavigationOnclick = useCallback(
      (url) => {
        navigate(url, { replace: true });
      },
      [navigate]
    );
    if (isUserLoggedIn) {
      return (
        <>
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
                  Investment
                  <img className="lighticon7" alt="" src="/lighticon.svg" />
                </div>
                <div
                  className="item60"
                  onClick={() =>
                    handleNavigationOnclick(urlRoutes.loanRequestForm)
                  }
                >
                  Request a Loan
                </div>
                <div
                  className="item61"
                  onClick={() =>
                    handleNavigationOnclick(urlRoutes.loggedInLandingLoansList)
                  }
                >
                  Loans List
                </div>
                <div
                  className="item62"
                  onClick={() =>
                    handleNavigationOnclick(urlRoutes.portfolioPage)
                  }
                >
                  Portfolio
                </div>
                <div
                  className="item62"
                  onClick={() => handleNavigationOnclick(urlRoutes.profilePage)}
                >
                  Profile
                </div>
              </div>
              <div
                className="logo20"
                onClick={() => handleNavigationOnclick(urlRoutes.landingPage)}
              >
                <b className="investment9">LendMe</b>
              </div>
              <img className="vector-icon9" alt="" src="/vector.svg" />
            </div>
          </div>
          <div className="profileandlogout6">
            <div className="content-wrapper4">
              <div className="content38">
                <div className="jenny-wilson6">{userFullName}</div>
                <div className="jenwilsonexamplecom6">{userEmail}</div>
              </div>
            </div>
            <div className="log-out6">
              <img className="left-icon5" alt="" src="/left-icon.svg" />
              <div className="layout6">
                <div
                  className="label30"
                  onClick={() => handleNavigationOnclick(urlRoutes.loginPage)}
                >
                  Log out
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="header8">
          <div className="headerleft6">
            <div className="categories6">
              <div className="item40">
                <div className="home7">
                  <img
                    className="iconoutlinehome6"
                    alt=""
                    src="/iconoutlinehome5.svg"
                  />
                </div>
              </div>
              <div className="item41">Personal Loan</div>
              <div className="item42">Investment</div>
              <div className="item42">How it works</div>
              <div className="item42">About us</div>
              <div className="item42">Contact us</div>
            </div>
            <div
              className="logo13"
              onClick={() => handleNavigationOnclick(urlRoutes.landingPage)}
            >
              <b>LendMe</b>
            </div>
            <img className="vector-icon6" alt="" src="/vector4.svg" />
          </div>
          <div className="buttons3">
            <div
              className="lightbutton5"
              onClick={() => handleNavigationOnclick(urlRoutes.loginPage)}
            >
              <div className="log-in2">Log In</div>
            </div>
            <div
              className="lightbutton6"
              onClick={() => handleNavigationOnclick(urlRoutes.signupPage)}
            >
              <div className="log-in2">Sign Up</div>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default Header;
