import React from "react";

function Panels({ id, nombre, labels }) {
    return (
    <>
        <div className="Panel-name">Nombre{nombre}</div>
        <div className="Panel-labels"> Test{labels}</div>
        <div
            className='tarea-contenedor-iconos'
            onClick={() => deletePanel(id)}>
        </div>
    </>
    );
}

export default Panels;