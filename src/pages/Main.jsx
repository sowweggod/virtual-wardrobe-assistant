import React from 'react';
import '../App.css';
import Search from "../components/Search";
import Filter from "../components/Filter";
import MainCards from "../components/MainCards";

function Main(){
    return(
        <>
            <Search/>
            <Filter/>
            <MainCards/>
        </>
    )
}

export default Main;