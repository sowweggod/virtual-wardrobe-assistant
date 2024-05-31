import React, { useState } from 'react';
import "./MyComponent.css";

const Filter = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };
    
    return (
        <div>
            <div className="filter" onClick={toggleFilters}>
                <p>Фильтр</p>
            </div>
            {showFilters && (
                <div className="filter-options">
                    <p>Издательства</p>
                    <p>ФИО авторов</p>
                    <p>Автор</p>
                    <p>Кол-во иллюстраций</p>
                    <p>Филиал</p>
                    <p>Кол-во в прокате</p>
                    <p>Год</p>
                    <p>Кол-во шт</p>
                    <p>Кол-во страниц</p>
                    <p>Цена</p>
                    <p>Факультет</p>
                </div>
            )}
        </div>
    );
};

export default Filter;
