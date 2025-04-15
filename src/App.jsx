import React from 'react'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'
// import SearchTodo from './components/SearchTodo'
// import SortTheList from './components/SortTheList'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import TodosPage from './features/pages/TodosPage'
import { Route, Routes } from 'react-router-dom'
import Login from './features/pages/Login'
import Register from './features/pages/Register'

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
      </Routes>
    </div>
  );
}


export default App