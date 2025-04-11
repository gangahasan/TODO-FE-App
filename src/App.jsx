import React from 'react'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'
import SearchTodo from './components/SearchTodo'
import SortTheList from './components/SortTheList'
import { useSelector } from 'react-redux'

const App = () => {
  const todos = useSelector((state)=>state.todos)
  return (
    <div className='border-2  border-gray-400 p-2 w-100  md:w-150 md:p-2  sm:p-2 place-self-center rounded-md flex flex-col  place-items-center'>
      <AddTodo />
      {todos?.length >= 2 &&
        <div className='flex justify-center gap-4 w-100'>
          <SearchTodo />
          <SortTheList />
        </div>
      }
      <TodosList />
    </div>
  )
}


export default App