import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { sortTheList } from '../redux/actions/actions';


const SortTheList = () => {
    const todos = useSelector((state)=>state.todos);
    const [sortValue, setSortValue]=useState("");
    // console.log({sortValue})

    const dispatch = useDispatch();

    const handleSort=(e)=>{
        let sortValue= e.target.value;
       if(sortValue === "O-N"){
        setSortValue(sortValue)
        const sortedList = [...todos].sort((a,b)=> new Date(a.createDate)-new Date(b.createDate))
        console.log({sortedList})
        // dispatch(sortTheList(sortedList));
       }
       else{
        setSortValue(sortValue);
        const sortedList = [...todos].sort((a, b) => 
          new Date(b.createDate) - new Date(a.createDate)
        );
        console.log({ sortedList });
        dispatch(sortTheList(sortedList));
       }
    }
  return (
    <div className="w-30">
      <select className="border-1 border-gray-400 bg-blue-600 text-white rounded-sm p-2 w-38 flex justify-items-start gap-2 place-items-center outline-0" 
           value={sortValue} onChange={handleSort}>
        <option value="">ALL</option>
        <option value="O-N">Oldest First</option>
        <option value="N-O">Newest First</option>
      </select>
    </div>
  );
}

export default SortTheList