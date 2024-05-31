import React from 'react';
import Main from "./pages/Main"
import Branches from "./pages/Branches.jsx"
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/branches" element={<Branches />} />
                
            </Routes>
        </>
    );
}

export default App;