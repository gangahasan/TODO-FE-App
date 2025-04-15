import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/todoSlice";
import {nanoid } from "nanoid"
import { FaPlus } from "react-icons/fa";
import { addTodo } from "../features/todo/todoActions";


const AddTodo = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTodo = {
      id: nanoid(),
      title: title,
      description: description,
      isCompleted: false,
      createDate: new Date().toISOString(), // ✅ fix this line
      completedDate: null,
    };
      dispatch(addTodo(newTodo))
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="my-4 w-full flex flex-col items-center">
      {!showForm && (
        <div className="w-full">
         <button
          onClick={() => setShowForm(true)}
          className="text-3xl font-bold float-middle bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600"
        >
           <FaPlus />
        </button>
        </div>
    
      )}

      {showForm && (
        <div className="w-full max-w-md bg-gray-100 p-4 rounded-md mt-4 shadow-md">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-2 border border-gray-400 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 mb-2 border border-gray-400 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={handleAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
