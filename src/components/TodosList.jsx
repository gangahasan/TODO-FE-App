import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatus } from "../redux/actions/actions";
// import { toggleStatus } from "../redux/actions/actions";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos, "todos");
  const handleChange = (todo) => {
    dispatch(toggleStatus(todo));
  };

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
                className="flex justify-between gap-4 p-2 m-2 border-1 border-gray-400 rounded-md w-100"
                key={todo?.id}
              >
                <div>
                  <button
                    onClick={() => handleChange(todo)}
                    className="border-2 border-gray-400 p-2 rounded-sm text-green-500"
                  >
                    {todo.isCompleted ? "✔" : " "}
                  </button>
                </div>
                <div className="flex flex-col place-items-start">
                  <h2 className="font-bold">{todo?.title}</h2>
                  <p>{todo?.description}</p>
                  <div>
                    {todo?.isCompleted ? (
                      <p>Completed:{todo?.completedDate}</p>
                    ) : (
                      <p>Created: {todo?.createdDate}</p>
                    )}
                  </div>
                </div>
                <div>
                  <p>{todo?.isCompleted ? "completed" : "pending"}</p>
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
