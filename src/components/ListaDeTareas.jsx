import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tarea from './Tarea';
import TareaFormulario from './TareaFormulario';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const userString = localStorage.getItem("user");
  const userId = userString ? JSON.parse(userString).id : null;

  useEffect(() => {
    const fetchTasks = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:3000/tasks?user_id=${userId}`);
          setTareas(response.data);
        } catch (error) {
          console.error('Failed to fetch tasks:', error);
        }
      }
    };

    fetchTasks();
  }, [userId]); // Fetch tasks whenever userId changes

  const agregarTarea = async tarea => {
    if (userId) {
      try {
        const response = await axios.post('http://localhost:3000/tasks', {
          ...tarea,
          user_id: userId
        });
        setTareas(prevTareas => [...prevTareas, response.data]);
        // alert('Task added successfully!');
      } catch (error) {
        console.error('Failed to add task:', error);
        alert('Failed to add task. Please try again later.');
      }
    }
  };

  const eliminarTarea = async id => {
    if (userId) {
      try {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        setTareas(prevTareas => prevTareas.filter(tarea => tarea.id !== id));
        // alert('Task deleted successfully!');
      } catch (error) {
        console.error('Failed to delete task:', error);
        alert('Failed to delete task. Please try again later.');
      }
    }
  };

  const completarTarea = async id => {
    if (userId) {
      const tarea = tareas.find(tarea => tarea.id === id);
      try {
        await axios.patch(`http://localhost:3000/tasks/${id}`, { completada: !tarea.completada });
        setTareas(prevTareas =>
          prevTareas.map(t => (t.id === id ? { ...t, completada: !t.completada } : t))
        );
        // alert('Task updated successfully!');
      } catch (error) {
        console.error('Failed to update task:', error);
        alert('Failed to update task. Please try again later.');
      }
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
