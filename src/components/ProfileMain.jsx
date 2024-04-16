import React from "react";
import "./MyComponent.css"
import profile_photo from "../img/profile-photo.svg"
import settings from "../img/settings.svg"
function ProfileMain(){
    return(
        <>
            <div className="profile-cover-wrapper">
                <div className="settings">
                    <button className="settings-button">
                    <img src={settings} alt="Settings" className="settings-icon"/>
                    </button>
                </div>
                <div className="profile">
                    <img src={profile_photo} alt="Profile photo" className="profile-photo"/>
                    <h1 className="profile-name">Name Surname</h1>
                </div>
            </div>
        </>
    )
}

export default ProfileMain;