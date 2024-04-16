import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../components/MyComponent.css";

const RegistrationForm = () => {
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
        <div className='registration'>
            <h2>Registration</h2>
            <div className="registration-container"> {/* Применяем класс стиля к контейнеру */}
                <form>
                    <div>
                        <p htmlFor="name">Name</p>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <p htmlFor="surname">Surname</p>
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={handleSurnameChange}
                        />
                    </div>
                    <div>
                        <p htmlFor="email">Email</p>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <p htmlFor="phoneNumber">Ph. number</p>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
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
            <button type="submit" className='registration__button'>Register now</button>
            <p className='login__text'>Already have an account? <Link to='/login' className="login">Log in.</Link> </p>
            </div>
        </div>
    );
}

export default RegistrationForm;
