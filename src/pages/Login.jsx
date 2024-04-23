import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "../components/MyComponent.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/login/', {  
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid email or password');
        }
    };

    return (
        <div className='login'>
            <h2>Log in</h2>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="login__button">Log in</button>
                    </div>
                </form>
            </div>
            <p className='login__text'>Don't have an account? <Link to='/register' className='login__link'>Register here</Link></p>
        </div>
    );
}

export default Login;
