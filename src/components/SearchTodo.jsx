import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, searchTodo } from '../features/todo/todoActions';
// import { searchTodo } from '../redux/actions/actions';

const SearchTodo = () => {
    const todos = useSelector((state)=>state.todo.tods);
    // const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch();
    const handleSearch = (e) => {
      const text = e.target.value.trim();
      if (text) {
        dispatch(searchTodo(text));
      } else {
        dispatch(fetchTodos()); // fetch all if search is cleared
      }
    };
    
  return (
    <div className="w-full">
      <div className="border-1 border-gray-400 rounded-sm  p-2 w-100 flex justify-items-start gap-2 place-items-center">
        <CiSearch />
        <input
          className="outline-0"
          type="text"
          placeholder="Search todos..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchTodo