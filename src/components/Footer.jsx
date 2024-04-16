import React from "react";
import "./MyComponent.css"
import footer_photo from "../img/Footer.svg"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-navbar">
                    <div className="footer-item">
                        <p className="footer-item-text">Virtual Wardrobe Assistant</p>
                    </div>
                    <div className="footer-chat">
                        <img src={footer_photo} alt="chat" className="footer-chat-img" />
                    </div>
                </div>
            </div>
        </footer>
    )
}