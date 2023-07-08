import "./profile-page.scss";
import Header from "../components/header";
import IconButton from '@mui/material/IconButton';
import Back from '@mui/icons-material/ChevronLeft';
import ButtonComponent from "../meterial-ui-components/Button/ButtonComponent";
import TextFieldComponent from "../meterial-ui-components/Input/TextFieldComponent";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";

const profilePage = () => {

    const dummyData = {
        firstName : "Rachel",
        lastName : "Green",
        email : "rachel@gmail.com",
        mobile : "1234987655",
        panNumber : "HWF276890",
        adharNumber: "1928 3847 4857"
    }

    let count = 0;
    const userDataLabels = ["First Name", "Last Name", "Email", "Mobile", "PAN Number","Adhar Number"]

    const [newpassword, setNewPassword] = useState('');
    const [currentPassword, SetCurrentPassword] = useState('');
    const [userData, setUserData] = useState(dummyData);
    const [confirmedNewpassword, setConfirmedNewPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const modalBoxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    
    const checkPassword = () => {
        if (newpassword === confirmedNewpassword) {
          console.log("password matching");
        } else {
          //TODO: Highlight password elements
          console.log("passwords not matching");
        }
    };

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div id="profile">
            <Header isUserLoggedIn={true} />

            <div className="profile-page">
                <div className="profile-header">
                    <div className="back-btn">
                        <IconButton aria-label="delete" disabled color="primary">
                            <Back/>
                        </IconButton>
                    </div>
                    <h2 clasname="page-name"> Profile </h2>
                </div>
                <div className="profile-data">
                    <div className="details">
                        <div className="details-header">
                            <h4>User Details</h4>
                            <div className="edit-btn">
                                <ButtonComponent className="edit-btn-comp" buttonText="Edit" style={{ color: "grey", backgroundColor: '#D8D1D1'}} variant="contained" 
                                    onClickHandler={() => {
                                        console.log("here");
                                        handleOpen();
                                    }}
                                />
                            
                                <Modal
                                    open={openModal}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    fullWidth
                                    maxWidth="lg"
                                >
                                    <Box sx={{ ...modalBoxStyle}}>
                                        <div className="edit-data">
                                            <div className="profile-header">
                                                <div className="back-btn">
                                                    <IconButton aria-label="delete" disabled color="primary">
                                                        <Back/>
                                                    </IconButton>
                                                </div>
                                                <h3 clasname="page-name"> Edit Profile </h3>
                                            </div>

                                            <div className="user-data">
                                                <TextFieldComponent
                                                    className="user-data-item"
                                                    color="primary"
                                                    variant="outlined"
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    label="First Name"
                                                    placeholder=""
                                                    size="medium"
                                                    margin="none"
                                                    defaultValue={userData.firstName}
                                                    value={userData.firstName}
                                                    style={{width:417}}
                                                    fullWidth="true"
                                                    onChangeHandler={(e) =>
                                                        setUserData({ ...userData, firstName: e.target.value })
                                                    }
                                                />
                                                <TextFieldComponent
                                                    className="user-data-item"
                                                    color="primary"
                                                    variant="outlined"
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    label="Last Name"
                                                    placeholder=""
                                                    size="medium"
                                                    margin="none"
                                                    defaultValue={userData.lastName}
                                                    value={userData.lastName}
                                                    style={{width:417}}
                                                    onChangeHandler={(e) =>
                                                        setUserData({ ...userData, lastName: e.target.value })
                                                    }
                                                />
                                                <TextFieldComponent
                                                    className="user-data-item"
                                                    color="primary"
                                                    variant="outlined"
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    label="Email"
                                                    placeholder=""
                                                    size="medium"
                                                    margin="none"
                                                    value={userData.email}
                                                    style={{width:417}}
                                                    onChangeHandler={(e) =>
                                                        setUserData({ ...userData, email: e.target.value })
                                                    }
                                                />
                                                <TextFieldComponent
                                                    className="user-data-item"
                                                    color="primary"
                                                    variant="outlined"
                                                    type="text"
                                                    name="mobile"
                                                    id="mobile"
                                                    label="Mobile"
                                                    placeholder=""
                                                    size="medium"
                                                    margin="5px"
                                                    value={userData.mobile}
                                                    style={{width:417}}
                                                    onChangeHandler={(e) =>
                                                        setUserData({ ...userData, mobile: e.target.value })
                                                    }
                                                />
                                            </div>

                                            <div className="edit-modal-btns">
                                                <ButtonComponent
                                                    className="edit-modal-btn"
                                                    buttonText="Cancel"
                                                    type="cancel"
                                                    style={{color: "grey", backgroundColor:"#D8D1D1"}}
                                                    onClickHandler={()=>{
                                                        handleClose();
                                                    }}
                                                />
                                                <ButtonComponent
                                                    className="edit-modal-btn"
                                                    buttonText="Update Profile"
                                                    type="submit"
                                                    style={{minWidth:"311px", backgroundColor:"#047857"}}
                                                    onClickHandler={()=> {
                                                        console.log(userData);
                                                        handleClose();
                                                        //TODO: send updated data to BE
                                                    }}
                                                />
                                            </div>
                                        </div>                                 
                                    </Box>
                                </Modal>
                            </div>
                        </div>
                        <div className="details-data" id="profile-detail">
                            {Object.entries(dummyData).map(([key, value]) => (
                                <div className="detail-item">
                                    <div className="item-name"> {userDataLabels[count++]} </div>
                                    <div className="item-value"> {value} </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className="change-password"> 
                        <h3 className="change-pass-header"> Change Password </h3>

                        <div className="change-pass-body">
                            <div className="change-pass-data">
                                <div> 
                                    <TextFieldComponent
                                        className="bar4"
                                        color="primary"
                                        variant="outlined"
                                        defaultValue=""
                                        type="text"
                                        name="current-pass"
                                        id="current-pass"
                                        label="Current password"
                                        placeholder=""
                                        size="medium"
                                        margin="none"
                                        value={currentPassword}
                                        onChangeHandler={(e) =>{SetCurrentPassword(e.target.value)}}
                                    />
                                </div>

                                <div>
                                    <TextFieldComponent
                                        className="bar4"
                                        color="primary"
                                        variant="outlined"
                                        defaultValue="abc@abc.abc"
                                        type="text"
                                        name="new-pass"
                                        id="new-pass"
                                        label="New Password"
                                        placeholder="at least 8 characters"
                                        size="medium"
                                        margin="none"
                                        value={newpassword}
                                        onChangeHandler={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <TextFieldComponent
                                        className="bar4"
                                        color="primary"
                                        variant="outlined"
                                        defaultValue="abc@abc.abc"
                                        type="text"
                                        name="new-pass"
                                        id="new-pass"
                                        label="Confirm New Password"
                                        placeholder=""
                                        size="medium"
                                        margin="none"
                                        value={confirmedNewpassword}
                                        onChangeHandler={(e) => setConfirmedNewPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <ButtonComponent className="change-pass-btn" buttonText="Update" variant="contained" style={{ backgroundColor: '#047857'}} onClickHandler={() => {checkPassword()}}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
} 

export default profilePage;