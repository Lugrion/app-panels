import React from "react";
import ListaDeTareas from '../../components/ListaDeTareas';

export default function Home() {
    const userString = localStorage.getItem("user");
    const isLoggedIn = userString !== null;

    return (
        <>
            <div className='aplicacion-tareas'>
                <div className='tareas-lista-principal'>
                    <h1>Pending Tasks</h1>
                    {isLoggedIn ? (
                        <ListaDeTareas />
                    ) : (
                        <div className="alert alert-warning" role="alert">
                            Please <a href="/login">log in</a> to use the app.
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
