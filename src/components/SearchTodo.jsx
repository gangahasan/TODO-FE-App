import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchTodo = () => {
  return (
    <div className="w-50">
      <button className="border-1 border-gray-400 rounded-sm  px-2 w-48 flex justify-center gap-2 place-items-center float-start">
        <CiSearch />
        <p>Search</p>
      </button>
    </div>
  );
}

export default SearchTodo