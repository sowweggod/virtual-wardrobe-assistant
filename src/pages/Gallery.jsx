import React from 'react';
import { List } from "../components/List";
import Search from "../components/Search";

function Gallery() {
    const handleSearch = (query) => {
        // Ваша логика обработки поиска
        console.log('Выполняется поиск:', query);
    };

    return (
        <>
            <Search onSearch={handleSearch} />
            <List />
        </>
    );
}


export default Gallery;
