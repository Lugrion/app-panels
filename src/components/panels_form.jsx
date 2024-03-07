import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function PanelsForm(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();

        const AddPanel = {
            id: uuidv4(),
            texto: input,
            labels: []
        }

        props.onSubmit(AddPanel);
    }
    return (
        <form
            className='form-group'
            onSubmit={manejarEnvio}>
            <input
                className='form-text-input'
                type='text'
                placeholder='Name the Panel'
                name='texto'
                onChange={manejarCambio}
            />
            <button className="btn btn-primary m-3">
                Create Panel
            </button>
        </form>
    );
}

export default PanelsForm;