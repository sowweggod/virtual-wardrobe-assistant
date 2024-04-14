import React from "react";
import "./MyComponent.css";

function Header(){
    return(
        <header className="header">
            <div className="wrapper">
                <div className="header-wrapper">
                    <div className="header-navbar">
                        <ul className="header-menu">
                            <li className="header-item">
                                <a href="/" className="header-link">Wardrobe</a>
                            </li>
                            <li className="header-item">
                                <a href="/" className="header-link">Search</a>
                            </li>
                            <li className="header-item">
                                <a href="/" className="header-link">Profile</a>
                            </li>
                            <li className="header-item">
                                <a href="/" className="header-link">Sets</a>
                            </li>
                            <li className="header-item">
                                <a href="/" className="header-link">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;