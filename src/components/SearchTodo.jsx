import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
// import { searchTodo } from '../redux/actions/actions';

const SearchTodo = () => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch();
  
    const handleSearch=(e)=>{
        if(e.target.value){
             const searchText = e.target.value;
             const matchedTodo = todos.filter((todo) =>
               todo.title.toLowerCase().includes(searchText.toLowerCase())
             );
            // dispatch(searchTodo(matchedTodo));

        }
    }
    
  return (
    <div className="w-full">
      <div className="border-1 border-gray-400 rounded-sm  p-2 w-100 flex justify-items-start gap-2 place-items-center">
        <CiSearch />
        <input className='outline-0' type="text" placeholder="Search" onChange={handleSearch}/>
     
      </div>
    </div>
  );
}

export default SearchTodo