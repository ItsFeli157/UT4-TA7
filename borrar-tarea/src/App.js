import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index); 
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={handleChange}
          placeholder="Agregar una nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
