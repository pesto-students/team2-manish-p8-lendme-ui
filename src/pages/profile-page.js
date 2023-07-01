import { Button } from "@mui/material";
import "./profile-page.css";
const ProfilePage = () => {
  return (
    <div className="profilepage">
      <div className="header2">
        <div className="headerleft1">
          <div className="categories1">
            <div className="item6">
              <div className="home1">
                <img
                  className="iconoutlinehome1"
                  alt=""
                  src="/iconoutlinehome1.svg"
                />
              </div>
            </div>
            <div className="item7">
              <div className="investment1">Investment</div>
              <img className="lighticon1" alt="" src="/lighticon1.svg" />
            </div>
            <div className="item8">
              <div className="investment1">Request a Loan</div>
            </div>
            <div className="item9">
              <div className="investment1">Loans List</div>
            </div>
            <div className="item10">
              <div className="investment1">Portfolio</div>
            </div>
            <div className="item10">
              <div className="investment1">Profile</div>
            </div>
          </div>
          <div className="logo2">
            <b className="investment1">LendMe</b>
          </div>
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
      </div>
      <div className="profileandlogout1">
        <div className="content-container">
          <div className="content1">
            <div className="jenny-wilson1">Jenny Wilson</div>
            <div className="jenwilsonexamplecom1">jen.wilson@example.com</div>
          </div>
        </div>
        <div className="log-out1">
          <img className="left-icon1" alt="" src="/left-icon1.svg" />
          <div className="layout2">
            <div className="label9">Log out</div>
          </div>
        </div>
      </div>
      <div className="settings1">
        <div className="top3">
          <div className="icon-container">
            <img className="icon2" alt="" src="/icon1.svg" />
          </div>
          <div className="profile3">Profile</div>
        </div>
      </div>
      <div className="user-details1">User Details</div>
      <div className="checkout1">
        <div className="list1">
          <div className="row6">
            <div className="first-name1">First Name</div>
            <div className="jenny1">Jenny</div>
          </div>
          <div className="row6">
            <div className="first-name1">Last Name</div>
            <div className="jenny1">Wilson</div>
          </div>
          <div className="row6">
            <div className="first-name1">Email</div>
            <div className="jenny1">jenny.wilson@example.com</div>
          </div>
          <div className="row6">
            <div className="first-name1">Mobile</div>
            <div className="jenny1">9988998899</div>
          </div>
          <div className="row6">
            <div className="first-name1">PAN Number</div>
            <div className="jenny1">HWF234243</div>
          </div>
          <div className="row6">
            <div className="first-name1">Aadhar Number</div>
            <div className="jenny1">7566 6789 6788</div>
          </div>
        </div>
      </div>
      <Button
        className="lightbutton1"
        variant="outlined"
        name="edit"
        id="edit"
        color="primary"
        href="/create-event"
      >
        Edit
      </Button>
      <div className="sign-up2">
        <div className="top4">
          <div className="title3">
            <div className="change-password-container">
              <div className="change-password1">{`Change Password `}</div>
            </div>
          </div>
        </div>
        <div className="midldle1">
          <div className="inputs2">
            <div className="current-password2">
              <div className="current-password3">Current Password</div>
              <div className="search-bar11">
                <img className="icons5" alt="" src="/icons1.svg" />
              </div>
            </div>
            <div className="current-password2">
              <div className="current-password3">Create new Password</div>
              <div className="search-bar12">
                <div className="first-name1">at least 8 characters</div>
                <img className="icons5" alt="" src="/icons1.svg" />
              </div>
            </div>
            <div className="current-password2">
              <div className="current-password3">Confirm new Password</div>
              <div className="search-bar11">
                <img className="icons5" alt="" src="/icons1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom2">
          <div className="cta3">
            <div className="label9">Update</div>
            <img className="icons8" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
