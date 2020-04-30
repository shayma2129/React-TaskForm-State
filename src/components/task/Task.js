import React, { useState } from 'react';
import './Task.css';


export default function Task({id, title, duration,description,type,date,deleteTask,updateTask }) {
   const [updateMode,setUpdateMode]=useState(false)
   const [titleToUpdate,setTitleToUpdate]=useState(title)
   const [durationToUpdate,setDurationToUpdate]=useState(duration)
   const [descriptionToUpdate,setDescriptionToUpdate]=useState(description)
   const [typeToUpdate,setTypeToUpdate]=useState(type)
   const [dateToUpdate,setDateToUpdate]=useState(date)
   const handleUpdateTask=()=>{
    updateTask(id,titleToUpdate,durationToUpdate,descriptionToUpdate,typeToUpdate,dateToUpdate)
    setUpdateMode(false)
   }


    return (
        <div className="w3-container">
            {!updateMode ?(
                <div className="w3-panel w3-card">
                  <div className="details-container">
                         <h6>{title} - ({duration} min ) - ({type}) - ({description}) -({date})</h6>
                  </div>
                  <div className="actions">
                    <button className="button-task-warning"  onClick = {()=>deleteTask(id)}>
                        <i className="glyphicon glyphicon-trash"></i></button>
                       
                    <button className="button-task-success" onClick={()=>setUpdateMode(true)}>
                    <i className=" glyphicon glyphicon-edit"></i></button>
                  </div>
                </div>
            ):(
                <div className="w3-panel w3-card">
                <div className="details-container">
                    <input type="text" name="title" value={titleToUpdate} 
                    onChange={e=>setTitleToUpdate(e.target.value)}/>
                    <input type="number" name="duration" value={durationToUpdate} 
                    onChange={e=>setDurationToUpdate(e.target.value)}/>
                    <input type="text" name="description" value={descriptionToUpdate} 
                    onChange={e=>setDescriptionToUpdate(e.target.value)}/>
                    <input type="text" name="type" value={typeToUpdate} 
                    onChange={e=>setTypeToUpdate(e.target.value)}/>
                    <input type="date" name="date" value={dateToUpdate} 
                    onChange={e=>setDateToUpdate(e.target.value)}/>
                </div>
                    <div className="actions">
                    <button className="button-task-success" onClick={handleUpdateTask}><i class=" glyphicon glyphicon-edit"></i></button>
                    </div>
                    
                </div>
               

            )}
           
        </div> 
    )
}

 
