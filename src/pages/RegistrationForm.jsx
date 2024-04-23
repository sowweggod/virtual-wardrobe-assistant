import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "../components/MyComponent.css";

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/register/', {
                name,
                surname,
                email,
                phoneNumber,
                password
            });
            console.log(response.data);
            setError('');
        } catch (error) {
            console.error('Registration error:', error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className='registration'>
            <h2>Registration</h2>
            <div className="registration-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p htmlFor="name">Name</p>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <p htmlFor="surname">Surname</p>
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                    <div>
                        <p htmlFor="email">Email</p>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <p htmlFor="phoneNumber">Phone Number</p>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <p htmlFor="password">Password</p>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p>{error}</p>}
                    <div className="button-container">
                        <button type="submit" className="registration__button">Register now</button>
                    </div>
                </form>
            </div>
            <div>
                <p className='login__text'>Already have an account? <Link to='/login' className='login__link'>Log in here</Link></p>
            </div>
            
        </div>
    );
}

export default RegistrationForm;
