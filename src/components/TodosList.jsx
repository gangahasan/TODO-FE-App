import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteTodo,
  fetchTodos,
  toggleTodoStatus,
  editTodos,
} from "../features/todo/todoActions";

const TodosList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [editTodo, setEditTodo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggle = (todo) => {
    dispatch(toggleTodoStatus(todo));
  };

  const handleEdit = (todo) => {
    setEditTodo({ ...todo }); // Create a copy to edit
    setShowModal(true);
  };

  const handleSave = () => {
    if (editTodo && editTodo.id) {
      dispatch(editTodos(editTodo));
      setEditTodo(null);
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="p-4">
      {todos.length === 0 ? (
        <p className="text-center font-semibold">No Todo's available Yet!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 shadow-md rounded-md">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-6 text-left">Done</th>
                <th className="py-2 px-4 text-left">Title & Description</th>
                <th className="py-2 px-4 text-left">Created Date</th>
                <th className="py-2 px-4 text-left">Completed Date</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr
                  key={todo.id}
                  className="border-t border-gray-300 hover:bg-gray-50"
                >
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => handleToggle(todo)}
                      className="w-5 h-5"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <div>
                      <p className="font-semibold">{todo.title}</p>
                      <p className="text-sm text-gray-600">
                        {todo.description}
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {new Date(todo.createDate).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {todo.isCompleted
                      ? new Date(todo.completedDate).toLocaleString()
                      : "-"}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        todo.isCompleted
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {todo.isCompleted ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="py-2 px-4 mt-3 flex items-center justify-start gap-4">
                    <button
                      className="text-blue-600 font-medium hover:underline"
                      onClick={() => handleEdit(todo)}
                    >
                      <MdOutlineModeEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✨ Modal for editing */}
      {showModal && editTodo && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Edit Todo</h2>
            <input
              type="text"
              value={editTodo.title}
              onChange={(e) =>
                setEditTodo({ ...editTodo, title: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
              autoFocus
            />
            <textarea
              value={editTodo.description}
              onChange={(e) =>
                setEditTodo({ ...editTodo, description: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodosList;
