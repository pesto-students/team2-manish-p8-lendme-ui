import { Button } from "@mui/material";
import "./profile-page.css";
import Header from "../components/header";
const ProfilePage = () => {
  return (
    <div className="profilepage">
      <Header isUserLoggedIn={true} />
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
