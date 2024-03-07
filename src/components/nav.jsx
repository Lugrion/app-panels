import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <i className="bi bi-stack"></i>
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

                                <Link className='nav-link' to="/login">Login / Register</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}