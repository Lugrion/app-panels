import React from "react";

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="text-center mb-4">About</h1>
                            <div className="text-center mb-4">
                                <p>No more scattered tasks</p>
                            </div>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/src/assets/solar-panels.jpg" className="d-block w-100" alt="Solar Panels" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/src/assets/nature-tech.jpg" className="d-block w-100" alt="Nature and Technology" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/src/assets/world-frutiger.png" className="d-block w-100" alt="World Frutiger" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <p>All your tasks, one organized space</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
