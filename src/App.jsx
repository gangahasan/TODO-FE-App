import React from 'react'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'
import SearchTodo from './components/SearchTodo'
import SortTheList from './components/SortTheList'

const App = () => {
  return (
    <div className='border-2 border-gray-400 p-2 w-150 place-self-center rounded-md flex flex-col  place-items-center'>
      <AddTodo />
      <div className='flex justify-center gap-4 w-100'>
        <SearchTodo />
        <SortTheList />
      </div>
      <TodosList />
    </div>
  )
}

export default App