import React from 'react';
import Main from "./pages/Main"
import { Route, Router, Routes } from 'react-router-dom';
import Gallery from "./pages/Gallery"
import Header from './components/Header';
import Cover from './components/Cover';
import Search from './components/Search';
import List from './components/List'
import Footer from './components/Footer';
import Profile from "./pages/Profile";
import './App.css';
import RegistrationForm from './pages/RegistrationForm';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;