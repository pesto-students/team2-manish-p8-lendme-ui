import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login-page.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/signuppage");
  }, [navigate]);

  const onCTAContainerClick = useCallback(() => {
    navigate("/loggedinlandingloanslist");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signuppage");
  }, [navigate]);

  return (
    <div className="loginpage">
      <div className="header6">
        <div className="headerleft5">
          <div className="categories5">
            <div className="item34">
              <div className="home6">
                <img
                  className="iconoutlinehome5"
                  alt=""
                  src="/iconoutlinehome4.svg"
                />
              </div>
            </div>
            <div className="item35">
              <div className="google">Personal Loan</div>
            </div>
            <div className="item36">
              <div className="google">Investment</div>
            </div>
            <div className="item36">
              <div className="google">How it works</div>
            </div>
            <div className="item36">
              <div className="google">About us</div>
            </div>
            <div className="item36">
              <div className="google">Contact us</div>
            </div>
          </div>
          <div className="logo10">
            <b className="google">LendMe</b>
          </div>
          <img className="vector-icon5" alt="" src="/vector5.svg" />
        </div>
        <div className="buttons2" onClick={onButtonsContainerClick}>
          <div className="lightbutton4">
            <div className="sign-up5">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="log-in1">
        <div className="logo12">
          <img
            className="black-and-white-collection-15"
            alt=""
            src="/black-and-white-collection-15.svg"
          />
          <div className="lendme">LendMe</div>
        </div>
        <div className="header7">
          <b className="keep-me-signed">Login</b>
          <div className="subtitle14">
            Welcome back. Enter your credentials to access your account
          </div>
        </div>
        <div className="email6">
          <div className="label23">Email Address</div>
          <TextField
            className="bar4"
            color="primary"
            variant="standard"
            defaultValue="abc@abc.abc"
            type="text"
            name="email"
            id="email"
            label="Email Address"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="email6">
          <div className="email6">
            <div className="label24">
              <div className="left-text">Password</div>
              <b className="right-text">Forgot Password</b>
            </div>
            <TextField
              className="bar4"
              color="primary"
              variant="standard"
              defaultValue="password"
              type="password"
              name="password"
              id="password"
              label="Password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
          </div>
          <div className="sub-label">Please enter correct password</div>
        </div>
        <div className="checkbox4">
          <div className="checkbox-icon">
            <div className="fill4" />
            <img
              className="iconsoutlinecheckmark1"
              alt=""
              src="/iconsoutlinecheckmark1.svg"
            />
          </div>
          <div className="label25">
            <div className="keep-me-signed">Keep me signed in</div>
          </div>
        </div>
        <div className="cta15" onClick={onCTAContainerClick}>
          <div className="sign-up5">Continue</div>
        </div>
        <div className="bottom4">
          <div className="container10">
            <div className="or1">
              <div className="or-sign-up-with-wrapper">
                <div className="or-sign-up">or sign up with</div>
              </div>
              <div className="or-child" />
            </div>
            <div className="socials1">
              <div className="google-button1">
                <div className="google-logo">
                  <img
                    className="logo-googleg-48dp"
                    alt=""
                    src="/logo-googleg-48dp.svg"
                  />
                </div>
                <div className="google">Google</div>
              </div>
              <div className="apple-button1">
                <div className="path4-wrapper">
                  <img className="path4-icon1" alt="" src="/path41.svg" />
                </div>
                <div className="google">Apple</div>
              </div>
              <div className="apple-button1">
                <div className="path4-wrapper">
                  <img className="logo-googleg-48dp" alt="" src="/path14.svg" />
                </div>
                <div className="google">Facebook</div>
              </div>
            </div>
          </div>
          <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
            <span>{`Don’t have an Account? `}</span>
            <b className="sign-up-here">Sign up here</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
