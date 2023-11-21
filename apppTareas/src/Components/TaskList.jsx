import React from 'react'
import { FiDelete } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { useState } from 'react';
import '../styles/TaskList.css'


export const TaskList = ({ tasks, taskDel }) => {

  const [end, setEnd] = useState(false)

  return (
    <>
      <div className='tasks'>
        {tasks && tasks.map(task => (
          <div className='task-container' key={task.id}>
            <div className={end? "task-list-container task-end":"task-list-container"} >
              <p className='task-title'>{task.title}</p>
            </div>
            <div className='task-actions'>
              <button onClick={()=>setEnd(!end)} className='task-complete'><BiTask/></button>
              <button onClick={() => taskDel(task.id)} ><FiDelete className='task-delete' /></button>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}
