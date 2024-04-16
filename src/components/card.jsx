import React from "react";
import "./MyComponent.css"
import card_photo from "../img/card.svg";

export default function Card(){
    return(
        <>
            <div className="cards__name">
                <img src={card_photo} alt="Card" className="cards-photo"/>
            </div>
        </>
    )
}