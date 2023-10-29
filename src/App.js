import React, { useState } from 'react';
import './ToDoList.css';
import Footer from './Footer'; // Import the Footer component

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('low');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false, priority: newTaskPriority }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]); // Clear all tasks
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select onChange={(e) => setNewTaskPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={addTask}>Add</button>
        <button onClick={clearTasks} className="clear-button">Clear</button> {/* Clear button */}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
            <span className={`priority ${task.priority}`}>{task.priority}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default App;

