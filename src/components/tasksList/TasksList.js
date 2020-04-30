import React, { useState } from'react';
import './TasksList.css';
import Task from '../task/Task';

export default function TasksList({tasks,deleteTask,updateTask}){
    const [isVisible , setIsVisible] =useState(true)
    const toggleVisibility =()=>{
      setIsVisible(!isVisible)
    }
    return (
      <div className="tasks-list">
        <div className="togglee">
           <button className="button-show" onClick={toggleVisibility} > Show tasks</button>
        </div>
        <div>
        {isVisible &&
            tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                duration={task.duration}
                description={task.description}
                type={task.type}
                date={task.date}
                deleteTask={deleteTask}
                updateTask={updateTask}>
              </Task>
            ))}
        </div>
     
      </div>
    )
}

 
