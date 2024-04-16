import React from "react";
import "./MyComponent.css"
import Card from "./Card";
import ShowMore from "../img/show-more.svg";

export default function MainCards(){
    return(
        <>
            <div className="main-gallery-wrapper">
                <div className="main-cards-wrapper">
                    <p className="main-cards-text">Wardrobe</p>
                    <button ClassName="main-cards-btn">
                        <img src={ShowMore} alt="Show More" className="main-cards-btn-img"/>
                    </button>
                    <div className="main-cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                    <div className="main-cards-wrapper">
                        <p className="main-cards-text">Sets</p>
                        <button className="main-cards-btn">
                            <img src={ShowMore} alt="Show More" className="main-cards-btn-img"/>
                        </button>
                        <div className="main-cards">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
