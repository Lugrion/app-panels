import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const userString = localStorage.getItem("user");
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <i className="bi bi-stack" style={{ fontSize: '32px', color: 'white', marginRight: '5px', animation: 'pulse 1s infinite' }}></i>
                        {/* Add a hover effect to the brand */}
                        <span className="navbar-brand-text ps-3">Tasker</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-toggler">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <div className="bg-secondary rounded">
                                    {
                                        userString == null ? (
                                            <Link className="nav-link" to="/login">Login / Sign Up</Link>
                                        ) : (
                                            <div className="d-flex align-items-center">
                                                <span className="m-2">Welcome, {JSON.parse(userString).username}</span>
                                                <button className="btn btn-danger" onClick={() => { localStorage.removeItem("user"); navigate("/login") }}>Log out</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
