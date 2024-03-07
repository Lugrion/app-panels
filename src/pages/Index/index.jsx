import React from "react";
import PanelsList from "../../components/panels_list";

export default function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div className='container-fluid'>
                    <ul className="d-flex justify-content-center flex-wrap p-2">
                        <li className="nav-item">
                            <button className="btn btn-primary">Create Label</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <PanelsList />
            <div className="container">
            </div>

        </>
    )
}
