import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import '../App.css';
import Search from "../components/Search";
import Cover from "../components/Cover";
import MainCards from "../components/MainCards";

function Main(){
    return(
        <>
            <Cover/>
            <Search/>
            <MainCards/>
        </>
    )
}

export default Main;