import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/actions";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();

    const todoObj = {
      id: nanoid(),
      title: title,
      description: description,
      iscompleted: false,
      createdDate: new Date().toISOString(),
      completedDate: new Date().toISOString(),
    };
    dispatch(addTodo(todoObj));
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">TODO</h1>
      <form onSubmit={handleAdd} id="form">
        <div className="flex flex-col place-items-center gap-2 m-4">
          <div className=" border-1 border-gray-400 rounded-md w-80">
            <input
              className="w-80 p-2"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="border-1 border-gray-400 rounded-md w-80">
            <input
              className="w-80 p-2"
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-80">
            <button
              type="submit"
              className="float-end bg-blue-600 text-white px-4 py-1 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
