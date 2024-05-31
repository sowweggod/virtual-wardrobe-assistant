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
                                <Link to="/" className="header-link">Книги</Link>
                            </li>
                            <li className="header-item">
                                <Link to="/branches" className="header-link">Филиалы</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;