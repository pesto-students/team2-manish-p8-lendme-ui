import "./edit-profile-page.css";
const EditProfilePage = () => {
  return (
    <div className="editprofilepage">
      <div className="header1">
        <div className="headerleft">
          <div className="categories">
            <div className="item">
              <div className="home">
                <img
                  className="iconoutlinehome"
                  alt=""
                  src="/iconoutlinehome1.svg"
                />
              </div>
            </div>
            <div className="item1">
              <div className="investment">Investment</div>
              <img className="lighticon" alt="" src="/lighticon1.svg" />
            </div>
            <div className="item2">
              <div className="investment">Request a Loan</div>
            </div>
            <div className="item3">
              <div className="investment">Loans List</div>
            </div>
            <div className="item4">
              <div className="investment">Portfolio</div>
            </div>
            <div className="item4">
              <div className="investment">Profile</div>
            </div>
          </div>
          <div className="logo">
            <b className="investment">LendMe</b>
          </div>
          <img className="vector-icon" alt="" src="/vector1.svg" />
        </div>
      </div>
      <div className="profileandlogout">
        <div className="content-wrapper">
          <div className="content">
            <div className="jenny-wilson">Jenny Wilson</div>
            <div className="jenwilsonexamplecom">jen.wilson@example.com</div>
          </div>
        </div>
        <div className="log-out">
          <img className="left-icon" alt="" src="/left-icon1.svg" />
          <div className="layout1">
            <div className="label7">Log out</div>
          </div>
        </div>
      </div>
      <div className="settings">
        <div className="top1">
          <div className="icon-wrapper">
            <img className="icon1" alt="" src="/icon1.svg" />
          </div>
          <div className="profile1">Profile</div>
        </div>
      </div>
      <div className="user-details">User Details</div>
      <div className="checkout">
        <div className="list">
          <div className="row">
            <div className="first-name">First Name</div>
            <div className="jenny">Jenny</div>
          </div>
          <div className="row">
            <div className="first-name">Last Name</div>
            <div className="jenny">Wilson</div>
          </div>
          <div className="row">
            <div className="first-name">Email</div>
            <div className="jenny">jenny.wilson@example.com</div>
          </div>
          <div className="row">
            <div className="first-name">Mobile</div>
            <div className="jenny">9988998899</div>
          </div>
          <div className="row">
            <div className="first-name">PAN Number</div>
            <div className="jenny">HWF234243</div>
          </div>
          <div className="row">
            <div className="first-name">Aadhar Number</div>
            <div className="jenny">7566 6789 6788</div>
          </div>
        </div>
      </div>
      <div className="lightbutton">
        <div className="investment">Edit</div>
      </div>
      <div className="sign-up1">
        <div className="top2">
          <div className="title2">
            <div className="change-password-wrapper">
              <div className="change-password">{`Change Password `}</div>
            </div>
          </div>
        </div>
        <div className="midldle">
          <div className="inputs1">
            <div className="current-password">
              <div className="create-new-password">Current Password</div>
              <div className="search-bar8">
                <img className="icons1" alt="" src="/icons1.svg" />
              </div>
            </div>
            <div className="current-password">
              <div className="create-new-password">Create new Password</div>
              <div className="search-bar9">
                <div className="first-name">at least 8 characters</div>
                <img className="icons1" alt="" src="/icons1.svg" />
              </div>
            </div>
            <div className="current-password">
              <div className="create-new-password">Confirm new Password</div>
              <div className="search-bar8">
                <img className="icons1" alt="" src="/icons1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom1">
          <div className="cta2">
            <div className="label7">Update</div>
            <img className="icons4" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
