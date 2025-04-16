import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortTodos } from '../features/todo/todoActions';
// import { sortTheList } from '../redux/actions/actions';


const SortTheList = () => {
    const todos = useSelector((state)=>state.todo.todos);
    console.log({todos})
    const [sortValue, setSortValue]=useState("");

    const dispatch = useDispatch();

    const handleSort = (e) => {
      const sortValue = e.target.value;
      setSortValue(sortValue); 

      dispatch(sortTodos(sortValue)); 
    };
  return (
    <div className="w-30">
      <select className="border-1 border-gray-400 bg-blue-600 text-white rounded-sm p-2 w-38 flex justify-items-start gap-2 place-items-center outline-0" 
           value={sortValue} onChange={handleSort}>
        <option value="">ALL</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </div>
  );
}

export default SortTheList