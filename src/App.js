import React, { useState } from 'react';
import './App.css'

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const task = {
      id: todoList.length + 1,
      taskName: newTask,
      completed: false
    }
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  }

  const handleChange = (event) => {
    setNewTask(event.target.value);
  } ;

  const deleteTask = (id) => { 
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  const handleCompleted = (id) => {
    const newTodoList = todoList.map(task => {
      if (task.id === id) {
        if(!task.completed) {
          task.color = "green"
        } else {
          task.color = "black"
        }
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" className="input" onChange={handleChange} />
      <button className="button" onClick={addTask}>Add</button>
      <ul>
        {todoList.map((task) => (
          <li key={task.id}>
            <div className='id'>
            {task.id}
            </div>
            <span 
  className={task.completed ? "completed" : "notCompleted"}
  onClick={() => handleCompleted(task.id)}
  style={{color: task.color}}
>
  {task.taskName}
</span>
            <button className="button2" onClick={() => deleteTask(task.id)}>Delete</button>
            <button className='button4' onClick={() => handleCompleted(task.id)}>
              {task.completed ? "Unfinish task" : "Finish task"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
