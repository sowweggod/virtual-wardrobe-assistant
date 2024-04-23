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
import Login from './pages/Login';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<RegistrationForm />}/>

            </Routes>
            <Footer />
        </>
    );
}

export default App;