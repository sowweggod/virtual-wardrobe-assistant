import React from "react";
import "./MyComponent.css";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header className="header">
            <div className="wrapper">
                <div className="header-wrapper">
                    <div className="header-navbar">
                        <ul className="header-menu">
                            <li className="header-item">
                                <Link to="/" className="header-link">Wardrobe</Link>
                            </li>
                            <li className="header-item">
                                <Link to="/" className="header-link">Search</Link>
                            </li>
                            <li className="header-item">
                                <Link to="/" className="header-link">Profile</Link>
                            </li>
                            <li className="header-item">
                                <Link to="/" className="header-link">Sets</Link>
                            </li>
                            <li className="header-item">
                                <Link href="/" className="header-link">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;