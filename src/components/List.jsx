import React, { useState } from 'react';
import "./MyComponent.css";
import card_photo from "../img/card.svg"
import load_more from "../img/load-more.svg"
import Card from "./Card";

const hello = [
    {
        name: 'Одежда',
        id: 1
    },
    {
        name: 'World!',
        id: 2
    },
    {
        name: 'World!',
        id: 3
    },
    {
        name: 'World!',
        id: 4
    },
    {
        name: 'World!',
        id: 5
    },
    {
        name: 'World!',
        id: 6
    },
    {
        name: 'World!',
        id: 7
    },
    {
        name: 'World!',
        id: 8
    }
];

export function List() {
    const [visibleCards, setVisibleCards] = useState(7);

    const loadMoreCards = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 7);
    };

    return (
        <div className="cards-container">
            <div className="cards">
                {hello.slice(0, visibleCards).map(card => (
                    /*<div className="cards__name" key={card.id}>
                        <img src={card_photo} alt="Card" className="cards-photo"/>
                    </div>*/
                    <Card/>
                ))}
                {visibleCards < hello.length && (
                    <button className="load-more-btn" onClick={loadMoreCards}>
                        <img src={load_more} alt="Load more" className="load-more-btn-photo"/>
                    </button>
                )}
            </div>
        </div>
    );
}

export default List;