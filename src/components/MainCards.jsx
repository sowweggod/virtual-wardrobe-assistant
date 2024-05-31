import React from "react";
import "./MyComponent.css"
import Card from "./Card";
import ShowMore from "../img/show-more.svg";

export default function MainCards(){
    return(
        <>
            <div className="main-gallery-wrapper">
                <div className="main-cards-wrapper">
                    <div className="main-cards">
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
