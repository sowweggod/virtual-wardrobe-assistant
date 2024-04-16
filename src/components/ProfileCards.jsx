import React from "react";
import "./MyComponent.css"
import Card from "./Card";
import ShowMore from "../img/show-more.svg"

export default function ProfileCards(){
    return(
        <>
        <div className="profile-gallery-wrapper">
            <div className="profile-cards-wrapper">
                <p className="profile-cards-text">My sets</p>
                <button className="profile-cards-btn">
                    <img src={ShowMore} alt="Show More" className="profile-cards-btn-img"/>
                </button>
                <div className="profile-cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
            <div className="profile-cards-wrapper">
                <p className="profile-cards-text">My wardrobe</p>
                <button className="profile-cards-btn">
                    <img src={ShowMore} alt="Show More" className="profile-cards-btn-img"/>
                </button>
                <div className="profile-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
        </>
    )
}