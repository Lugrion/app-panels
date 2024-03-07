import React from "react";
import ListaDeTareas from '../../components/ListaDeTareas';

export default function Home() {
    return (
        <>
            {/* 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div className='container-fluid'>
                    <ul className="d-flex justify-content-center flex-wrap p-2">
                        <li className="nav-item">
                            <button className="btn btn-primary">Create Label</button>
                        </li>
                    </ul>
                </div>
            </nav>
        */}

            <div className='aplicacion-tareas'>
                <div className='tareas-lista-principal'>
                    <h1>Mis Tareas</h1>
                    <ListaDeTareas />
                </div>
            </div>

        </>
    )
}
