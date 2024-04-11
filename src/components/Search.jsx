import React, { useState } from 'react';
import "./MyComponent.css";

const GlobalSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Передаем внешнему обработчику запрос на поиск
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="search">
            <form className="form-container" onSubmit={handleSubmit}>
                <img className="icon" src="" alt="Search" />
                <input
                    className="input-field"
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Поиск..."
                />
            </form>
        </div>

    );
};

export default GlobalSearch;
