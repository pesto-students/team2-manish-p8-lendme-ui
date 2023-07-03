import Header from "../components/header";
import "./signup-page.css";
const SignupPage = () => {
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
              <div className="firstname1">
                <div className="create-password">First Name</div>
                <div className="search-bar14">
                  <div className="alexan">Alexan</div>
                  <div className="search-bar-child" />
                </div>
              </div>
              <div className="firstname1">
                <div className="create-password">Last Name</div>
                <div className="search-bar15">
                  <div className="doe">Doe</div>
                </div>
              </div>
            </div>
            <div className="name11">
              <div className="firstname1">
                <div className="create-password">Email</div>
                <div className="search-bar15">
                  <div className="doe">alexan.doe@gmail.com</div>
                </div>
              </div>
              <div className="firstname1">
                <div className="create-password">Mobile</div>
                <div className="search-bar15">
                  <div className="doe">9988998899</div>
                </div>
              </div>
            </div>
            <div className="name11">
              <div className="firstname1">
                <div className="create-password">Pan No.</div>
                <div className="search-bar18" />
              </div>
              <div className="firstname1">
                <div className="create-password">Aadhar No.</div>
                <div className="search-bar18" />
              </div>
            </div>
            <div className="password">
              <div className="create-password">Create Password</div>
              <div className="search-bar20">
                <div className="doe">at least 8 characters</div>
                <img className="icons27" alt="" src="/icons13.svg" />
              </div>
            </div>
            <div className="password">
              <div className="create-password">Confirm Password</div>
              <div className="search-bar21">
                <img className="icons27" alt="" src="/icons13.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom3">
          <div className="cta14">
            <div className="log-in">Sign up</div>
            <img className="icons29" alt="" src="/icons14.svg" />
          </div>
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
