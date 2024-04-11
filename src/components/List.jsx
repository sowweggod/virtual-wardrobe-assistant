import React, { useState } from 'react';
import "./MyComponent.css";

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
                    <div className="cards__name" key={card.id}>
                        <p className='cards__text'>{card.name}</p>
                    </div>
                ))}

                {visibleCards < hello.length && (
                    <button className="load-more-btn" onClick={loadMoreCards}>
                        +
                    </button>
                )}
            </div>
        </div>
    );
}
