import { Button } from "@mui/material";
import "./profile-page.scss";
import Header from "../components/header";
import IconButton from '@mui/material/IconButton';
import Back from '@mui/icons-material/ChevronLeft';
import ButtonComponent from "../meterial-ui-components/Button/ButtonComponent";
import TextFieldComponent from "../meterial-ui-components/Input/TextFieldComponent";
import { useState } from "react";

const profilePage = () => {

    const [newpassword, setNewPassword] = useState('');
    const [currentPassword, SetCurrentPassword] = useState('');

    const [confirmedNewpassword, setConfirmedNewPassword] = useState('');

    const dummyData = {
        "username" : "Rachel",
        "lastname" : "Green",
        "Email" : "rachel@gmail.com",
        "Mobile" : "1234987655",
        "PAN Number" : "HWF276890",
        "Adhar Number": "1928 3847 4857"
    }

    const checkPassword = () => {
        if (newpassword === confirmedNewpassword) {
          console.log("password matching");
        } else {
          //TODO: Highlight password elements
          console.log("passwords not matching");
        }
      };


    return (
        <div id="profile">
            <div className="header">
                <h2> <center> header </center></h2>
            </div>

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
                                <ButtonComponent className="edit-btn-comp" buttonText="Edit" variant="outlined" onClickHandler={() => {}}/>
                            </div>
                        </div>
                        <div className="details-data" id="profile-detail">
                            {Object.entries(dummyData).map(([key, value]) => (
                                <div className="detail-item">
                                    <div className="item-name"> {key} </div>
                                    <div className="item-value"> {value} </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className="change-password"> 
                        <h4 className="change-pass-header"> Change Password </h4>

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
                                        name="email"
                                        id="email"
                                        label="New Password"
                                        placeholder="Enter email"
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
                                        name="email"
                                        id="email"
                                        label="Confirm New Password"
                                        placeholder=""
                                        size="medium"
                                        margin="none"
                                        value={confirmedNewpassword}
                                        onChangeHandler={(e) => setConfirmedNewPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <ButtonComponent className="change-pass-btn" buttonText="Change Password" variant="contained" onClickHandler={() => {checkPassword()}}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
} 

export default profilePage;