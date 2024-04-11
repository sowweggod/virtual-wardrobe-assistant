import React, { useState } from 'react';
import "./MyComponent.css"; // Импортируем файл стилей

const Registration = () => {
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
        <div className="registration-container"> {/* Применяем класс стиля к контейнеру */}
            <h2>Регистрация</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="surname">Surname:</label>
                    <input
                        type="text"
                        id="surname"
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Ph. number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
