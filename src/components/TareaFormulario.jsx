import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function TareaFormulario(props) {
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = async e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      tareaNueva.user_id = user.id;
    }

    try {
      await axios.post('http://localhost:3000/tasks', tareaNueva);
      props.onSubmit(tareaNueva); // Trigger the parent component's onSubmit function
      setInput(''); // Clear the input field after submitting the task
      alert('Task added successfully!');
    } catch (error) {
      console.error('Failed to add task:', error);
      alert('Failed to add task. Please try again later.');
    }
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Write your task'
        name='texto'
        value={input}
        onChange={manejarCambio}
      />
      <button className='tarea-boton' type='submit'>
        Add Task
      </button>
    </form>
  );
}

export default TareaFormulario;
