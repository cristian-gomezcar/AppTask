import React from 'react'
import { useRef, useReducer } from 'react'
import { TaskList } from './TaskList'
import { ManageTask } from './ManageTask'
import { FiFilePlus } from "react-icons/fi";

import '../styles/InputSearch.css'

export const InputSearch = () => {

  const { taskreducer } = ManageTask()

  const [tasks, dispatch] = useReducer(taskreducer, [])

  const inputRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    if (inputRef.current.value == "") return alert("Ingrese el nombre de alguna tarea")

    

    const add = {
      id: new Date().getTime(),
      title: inputRef.current.value
    }

    const action = {
      type: '[TASK] Add',
      payload: add
    }

    dispatch(action);
    inputRef.current.value = ""
  }

  const taskDel = (id) => {
    const action = {
      type: '[TASK] Delete',
      payload: id
    }
    dispatch(action);
  }

  return (
    <>
      <div onSubmit={handleForm} className="input-content">
        <form className="form-floating">
          <input autoFocus type="text" ref={inputRef} className="form-control mInput" />
          <label className='input-label'>Ingrese el nombre de la tarea</label>
          <button type="submit"><FiFilePlus className='input-icon'/></button>

        </form>
      </div>
      <TaskList tasks={tasks} taskDel={taskDel} />
    </>
  )
}
