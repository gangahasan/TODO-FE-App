import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortOldToNew } from '../redux/actions/actions';

const SortTheList = () => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch();

    const handleChange=(todos)=>{
        console.log({todos})
        const sortedOToN = todos.sort((a,b)=> {return a.createDate - b.createDate});
        console.log({sortedOToN});
        
        dispatch(sortOldToNew(sortedOToN))
    }
  return (
    <div className="w-50">
      <select className="border-1 border-gray-400 rounded-sm px-2 w-48 flex justify-items-start gap-2 place-items-center outline-0" 
            onChange={()=>handleChange(todos)}>
        <option value="">SortBy CreateDate</option>
        <option value="O-N">Oldest First</option>
        <option value="N-O">Newest First</option>
      </select>
    </div>
  );
}

export default SortTheList