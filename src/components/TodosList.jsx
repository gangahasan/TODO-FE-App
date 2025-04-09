import React, { useState } from "react";
import { useSelector } from "react-redux";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos, "todos");
  console.log("hello");
  console.log({ todos });

  return (
    <div>
      {/* if todos are empty */}
      {todos.length === 0 && <b>No Todo's available Yet!</b>}
      {/* todos exist case */}
      {todos.length > 0 && (
        <div className="flex flex-col gap-2 place-items-center p-2">
          {todos.map((todo) => {
            return (
              <div
                key={todo?.id}
                className="flex justify-between gap-4 p-2 m-2 
            border-1 border-gray-400 rounded-md w-100"
              >
                <div className="flex gap-4">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="flex flex-col place-items-start">
                    <h2 className="font-bold">{todo?.title}</h2>
                    <p>{todo?.description}</p>
                    <p>Created: {todo?.createdDate}</p>
                  </div>
                </div>
                <div>
                  <p>completed</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodosList;
