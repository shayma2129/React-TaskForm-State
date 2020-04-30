import React, { useState ,memo} from'react';
import './TaskForm.css';

function TaskForm({addTask}){
  
    const [title ,setTitle]=useState("")
    const [duration , setDuration]=useState(0)
    const [description , setDescription]=useState("")
    const [type , setType]=useState("")
    const [date , setDate]=useState("")
    const HandleAddTask =()=>{
        addTask(title,duration,description,type,date)
        setTitle("")
        setDuration(0)
        setDescription("")
        setType("")
        setDate("")
       setIsVisible(!isVisible)
       
    }  
    const [isVisible , setIsVisible] =useState(true)
    const taskFormVisibility =()=>{
      setIsVisible(!isVisible)
    }
    return (
        
       <div>
        { !isVisible ? (
        <div className="task-form"> 
            <div className="form-inline">
                    <label>title:</label>
                    <input 
                     type="text"  
                     name="title" 
                     value={title} 
                     onChange= {e=> setTitle(e.target.value)} />
                    <label>duration:</label>
                    <input 
                     type="number" 
                     name="duration" 
                     value={duration} 
                     onChange= {e=> setDuration(e.target.value)}/>
                    <label>description:</label>
                    <textarea 
                     type="text" 
                     name="description" 
                     value={description} 
                     onChange= {e=> setDescription(e.target.value)}/>
                     <label>type:</label>
                    <input 
                     type="text" 
                     name="type" 
                     value={type} 
                     onChange= {e=> setType(e.target.value)}/> 
                    <label>date:</label>
                    <input 
                     type="Date" 
                     name="date" 
                     value={date} 
                     onChange= {e=> setDate(e.target.value)}/>
                <button type="submit"className="button" onClick={HandleAddTask} >Add a Task</button>
            </div>
            </div>
            ):(
               <div className="toggle">
                  <button className="showform showform1" onClick={taskFormVisibility} > Show Task Form</button>
                </div>
            )}
       </div>
    )
}

export default memo(TaskForm)