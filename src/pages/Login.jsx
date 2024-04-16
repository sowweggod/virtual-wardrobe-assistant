import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../components/MyComponent.css";

const Login = () => {
    // Состояния для каждого поля
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    // Обработчик изменения значения поля Name
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Обработчик изменения значения поля Surname
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    // Обработчик изменения значения поля Email
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Обработчик изменения значения поля Ph. number
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    // Обработчик изменения значения поля Password
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return(
        <div className='login'>
            <h2>Log in</h2>
            <div className="login-container">
                <form>
                    <div>
                        <p htmlFor="email">Login</p>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <p htmlFor="password">Password</p>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </form>
            </div>
            <div className="button-container">
            <button type="submit" className='login__button'>Log in</button>
            </div>
        </div>
    );
}

export default Login;
