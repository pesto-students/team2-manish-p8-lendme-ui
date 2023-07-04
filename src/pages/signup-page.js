import "./signup-page.css";
import TextFieldComponent from "../meterial-ui-components/Input/TextFieldComponent";
import { useState } from "react";
import ButtonComponent from "../meterial-ui-components/Button/ButtonComponent";
import Header from "../components/header";

const SignupPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    panNo: "",
    adharNo: "",
    password: "",
  };
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [formData, setFormData] = useState(initialValues);

  const checkDetails = () => {
    if (password === confirmedPassword) {
      console.log("password matching");
      formData.password = confirmedPassword;
    } else {
      //TODO: Highlight password elements
    }
  };
  return (
    <div className="signuppage">
      <Header isUserLoggedIn={false} />
      <div className="sign-up3">
        <div className="top7">
          <div className="title9">
            <div className="sign-up-parent">
              <div className="sign-up4">Sign Up</div>
              <div className="well-get-you">
                We’ll get you up and running so you can verify your personal
                information and customize your account.
              </div>
            </div>
          </div>
        </div>
        <div className="middle1">
          <div className="socials">
            <div className="google-button">
              <img className="google-logo-icon" alt="" src="/google-logo.svg" />
              <div className="log-in">Sign up with Google</div>
            </div>
            <div className="apple-button">
              <img className="path4-icon" alt="" src="/path4.svg" />
              <div className="log-in">Sign up with Apple</div>
            </div>
          </div>
          <div className="or">
            <div className="divider10" />
            <div className="title10">
              <div className="text27">or sign up with</div>
            </div>
          </div>
          <div className="inputs3">
            <div className="name11">
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="first-name"
                id="first-name"
                label="First Name"
                placeholder="First Name"
                size="medium"
                margin="none"
                value={formData.firstName}
                onChangeHandler={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="last-name"
                id="last-name"
                label="Last Name"
                placeholder="Last Name"
                size="medium"
                margin="none"
                value={formData.lastName}
                onChangeHandler={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="name11">
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="email"
                id="email"
                label="Email"
                placeholder="abc@gmail.com"
                size="medium"
                margin="none"
                value={formData.email}
                onChangeHandler={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="mobile"
                id="mobile"
                label="Mobile"
                placeholder="mobile number"
                size="medium"
                margin="none"
                value={formData.mobile}
                onChangeHandler={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
            <div className="name11">
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="pan-no"
                id="pan-no"
                label="Pan No."
                placeholder="Pan number"
                size="medium"
                margin="none"
                value={formData.panNo}
                onChangeHandler={(e) =>
                  setFormData({ ...formData, panNo: e.target.value })
                }
              />
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="adhar-no"
                id="adhar-no"
                label="Adhar No."
                placeholder="Adhar number"
                size="medium"
                margin="none"
                value={formData.adharNo}
                onChangeHandler={(e) =>
                  setFormData({ ...formData, adharNo: e.target.value })
                }
              />
            </div>
            <div className="password">
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="adhar-no"
                id="adhar-no"
                label="Create Password"
                placeholder="at least 8 characters"
                size="medium"
                margin="none"
                value={password}
                onChangeHandler={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="password">
              <TextFieldComponent
                className="firstname1"
                color="primary"
                variant="outlined"
                defaultValue=""
                type="text"
                name="confirm-pass"
                id="confirm-pass"
                label="Confirm Password"
                size="medium"
                margin="none"
                value={confirmedPassword}
                onChangeHandler={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="bottom3">
          <ButtonComponent
            className="cta14"
            buttonText="Sign up"
            onClickHandler={() => {
              checkDetails();
            }}
          />
          
          <div className="login">
            <div className="already-have-an">Already have an account?</div>
            <div className="login-here">Login here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
