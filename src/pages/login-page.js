import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-page.css";
import TextFieldComponent from "../meterial-ui-components/Input/TextFieldComponent";
import Header from "../components/header";
import ButtonComponent from "../meterial-ui-components/Button/ButtonComponent";
const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const onCTAContainerClick = useCallback(() => {
    navigate("/loggedinlandingloanslist");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signuppage");
  }, [navigate]);

  const checkDetails = () => {
    console.log(formData);
    //TODO: send data to BE
  }

  return (
    <div className="loginpage">
      <Header isUserLoggedIn={false} />
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
          <TextFieldComponent
            className="bar4"
            color="primary"
            variant="outlined"
            defaultValue="abc@abc.abc"
            type="text"
            name="email"
            id="email"
            label="Email Address"
            placeholder="Enter email"
            size="medium"
            margin="none"
            value={formData.email}
            onChangeHandler={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="email6">
          <div className="email6">
            <div className="label24">
              <div className="left-text"></div>
              <b className="right-text">Forgot Password</b>
            </div>
            <TextFieldComponent
              className="bar4"
              color="primary"
              variant="outlined"
              defaultValue="password"
              type="password"
              name="password"
              id="password"
              label="Password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              value={formData.password}
              onChangeHandler={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
        {/* <div className="cta15" onClick={onCTAContainerClick}>
          <div className="sign-up5">Continue</div>
        </div> */}
        <ButtonComponent
            className="cta14"
            buttonText="Continue"
            onClickHandler={() => {
              checkDetails();
            }}
          />
        <div className="bottom4">
          <div className="container10">
            <div className="or1">
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
