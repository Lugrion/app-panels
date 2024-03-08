import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tarea from './Tarea';
import TareaFormulario from './TareaFormulario';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const userString = localStorage.getItem("user");
  const userId = userString ? JSON.parse(userString).id : null;
  console.log(userId)
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const fetchTasks = async () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const userId = JSON.parse(userString).id;
        try {
          const response = await axios.get(`http://localhost:3000/tasks?userId=${userId}`);
          setTareas(response.data);
        } catch (error) {
          console.error('Failed to fetch tasks:', error);
        }
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever they change
    localStorage.setItem('tasks', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = tarea => {
    setTareas(prevTareas => [tarea, ...prevTareas]);
  };

  const eliminarTarea = async id => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      setTareas(prevTareas => prevTareas.filter(tarea => tarea.id !== id));
      alert('Task deleted successfully!');
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Failed to delete task. Please try again later.');
    }
  };

  const completarTarea = async id => {
    const tarea = tareas.find(tarea => tarea.id === id);
    try {
      await axios.patch(`http://localhost:3000/tasks/${id}`, { completada: !tarea.completada });
      setTareas(prevTareas =>
        prevTareas.map(t => (t.id === id ? { ...t, completada: !t.completada } : t))
      );
      alert('Task updated successfully!');
    } catch (error) {
      console.error('Failed to update task:', error);
      alert('Failed to update task. Please try again later.');
    }
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
