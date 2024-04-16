import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"
import '../App.css';
import Search from "../components/Search";
import {List} from "../components/List";
import Cover from "../components/Cover";

function Main(){
    return(
        <>
            <Cover/>
            <Search/>
            <List/>
        </>
    )
}

export default Main;