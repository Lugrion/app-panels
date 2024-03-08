import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [username_register, setUsername_register] = useState('');
    const [password_register, setPassword_register] = useState('');
    const [notification, setNotification] = useState({ message: '', type: '' });
    const navigate = useNavigate();

    const handleSubmit_login = async (e) => {
        e.preventDefault();
        try {
            const user_response = await axios.get('http://localhost:3000/users');
            const users = user_response.data;
    
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                const userId = existingUser.id;
                console.log('Login successful:', existingUser);
                localStorage.setItem("user", JSON.stringify({ id: userId, username: username }))
                setNotification({ message: 'Login successful', type: 'success' });
                setTimeout(() => navigate('/'), 1000); // Navigate after 2 seconds
            } else {
                console.error('Invalid username or password');
                setNotification({ message: 'Invalid username or password', type: 'danger' });
                setTimeout(() => setNotification({ message: '', type: ''}), 1000);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setNotification({ message: 'Login failed. Please try again later.', type: 'danger' });
            setTimeout(() => setNotification({ message: '', type: ''}), 1000);
        }
    };
    
    const handleSubmit_register = async (e) => {
        e.preventDefault();
        try {
            const user_response = await axios.get('http://localhost:3000/users');
            const users = user_response.data;
            const existingUser = users.find(user => user.username === username_register);
            if (existingUser) {
                console.error('User already registered');
                setNotification({ message: 'User already registered', type: 'danger' });
                setTimeout(() => setNotification({ message: '', type: ''}), 1000);
                return;
            }
    
            await axios.post('http://localhost:3000/users', {
                username: username_register,
                password: password_register
            });
            setNotification({ message: 'Registration successful', type: 'success' });
            setTimeout(() => setNotification({ message: '', type: ''}), 1000);
        } catch (error) {
            console.error('Registration failed:', error);
            setNotification({ message: 'Registration failed. Please try again later.', type: 'danger' });
            setTimeout(() => setNotification({ message: '', type: ''}), 1000);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {notification.message && (
                        <div className={`alert alert-${notification.type}`} role="alert">
                            {notification.message}
                        </div>
                    )}
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Login</h2>
                            <form onSubmit={handleSubmit_login}>
                                <div className="form-group p-2">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <form onSubmit={handleSubmit_register}>
                                <div className="form-group p-2">
                                    <input
                                        type="text"
                                        value={username_register}
                                        onChange={(e) => setUsername_register(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <input
                                        type="password"
                                        value={password_register}
                                        onChange={(e) => setPassword_register(e.target.value)}
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
