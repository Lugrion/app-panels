import React, { useState } from "react";
import axios from 'axios';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [username_register, setUsername_register] = useState('');
    const [password_register, setPassword_register] = useState('');

    const handleSubmit_login = async (e) => {
        e.preventDefault();
        try {
            const user_response = await axios.get('http://localhost:3000/users');
            const users = user_response.data;
    
            // Comprueba si el usuario existe
            const existingUser = users.find(user => user.username === username);
            if (existingUser) {
                console.log('Login successful:', existingUser);
                alert("Login successful");
            } else {
                console.error('User not found');
                alert("User not found");
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    
    const handleSubmit_register = async (e) => {
        e.preventDefault();
        try {
            const user_response = await axios.get('http://localhost:3000/users');
            const users = user_response.data;
    
            // Comprueba si el usuario ya está registrado
            const existingUser = users.find(user => user.username === username_register);
            if (!existingUser) {
                // Si el usuario no está registrado, lo registra
                const newUserResponse = await axios.post('http://localhost:3000/users', {
                    username: username_register,
                    password: password_register,
                });
                console.log('User registered:', newUserResponse.data);
                alert("Register successful");
            } else {
                console.error('User already registered');
                alert("User already registered");
            }
        } catch (registerError) {
            console.error('Registration failed:', registerError);
        }
    };
    


    return (
        <>
            <h2 className="p-4">Login</h2>
                <form onSubmit={handleSubmit_login} className="p-2 m-2">
                    <div className="form-group">
                        <label htmlFor="form_login_name">Name</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control" id="form_login_name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_login_passwd">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" id="form_login_passwd"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Login</button>
                </form>


            <h2 className="p-4">Register</h2>
                <form onSubmit={handleSubmit_register} className="m-2 p-2">
                    <div className="form-group">
                        <label htmlFor="form_register_name">Name</label>
                        <input
                            type="text"
                            value={username_register}
                            onChange={(e) => setUsername_register(e.target.value)}
                            className="form-control" id="form_register_name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="form_register_passwd">Password</label>
                        <input
                            type="password"
                            value={password_register}
                            onChange={(e) => setPassword_register(e.target.value)}
                            className="form-control" id="form_register_passwd"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Register</button>
                </form>



        </>
    )
}

