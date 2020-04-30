import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/taskForm/TaskForm.js';
import TasksList from './components/tasksList/TasksList.js';

let loading =false
function App() {
  const [tasks , setTasks]=useState([
    {
       id:"1",
       title: "Learn HTML 5",
       duration : 60,
       description:"learn all what you need about HTML",
       type:"front",
       date:"2020-04-29"
    },
    {
      id:"2",
      title: "Learn Bootstrap",
      duration : 20,
      description:"learn all what you need about Bootstrap",
      type:"front",
      date:"2020-04-29"
    },
    {
      id:"3",
      title: "Learn Angular",
      duration : 80,
      description:"learn all what you need about Bootstrap",
      type:"front",
      date:"2020-04-29"
    }

  ])
  const addTask= (title,duration,description,type,date)=>{
         setTasks([...tasks,{id:tasks.length+1,title ,duration,description,type,date}])
        
  }

  const deleteTask=(id)=>{
    const newTasks=tasks.filter(task=>task.id!==id)
    setTasks(newTasks)
  }
  const updateTask = (id,title,duration,description,type,date)=>{
     const newTasks=tasks.map(task => task.id === id?({title,duration,description,type,date}):task)
     setTasks(newTasks)
  }

  return (
    <div className="App">
        {loading && <div>Loading ... </div>}
        {!loading && (
        <div>
          
      
          <TaskForm addTask={addTask}   />
          <TasksList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
      )}
    </div>
  );
}

export default App;
