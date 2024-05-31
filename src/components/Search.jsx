import React, { useState } from 'react';
import "./MyComponent.css";
import search from "../img/search.svg"

const GlobalSearch = () => {
    
    return (
        <div>
            <div className="search">
                <form className="form-container">
                    <img className="icon" src={search} alt="Search" />
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Поиск..."
                    />
                </form>
                <button className="add-button" type="button">+</button>
            </div>
        </div>
        

    );
};

export default GlobalSearch;
