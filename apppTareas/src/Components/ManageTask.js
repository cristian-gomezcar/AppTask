import React from 'react'

export const ManageTask = () => {

  const taskreducer = (state = [], action = {}) => {

    switch (action.type) {
      case '[TASK] Add':
        return [...state, action.payload] // action.paylod revuelve todo el objeto add
      case '[TASK] Delete':
        return state.filter(task => task.id !== action.payload);
      default:
        return state;
    }

  }
  return {
    taskreducer
  }
}
