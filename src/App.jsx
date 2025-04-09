import React from 'react'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

const App = () => {
  return (
    <div className='border-2 border-gray-400 p-2 w-150 place-self-center rounded-md'>
      <AddTodo />
      <TodosList />
    </div>
  )
}

export default App