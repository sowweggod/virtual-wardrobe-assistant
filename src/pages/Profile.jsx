import React from "react";
import Profile_main from "../components/Profile_main";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";
import ProfileCards from "../components/Profile-cards";

function Profile(){
    return(
        <>
            <Profile_main />
            <ProfileCards   />
        </>
    )
}

export default Profile;