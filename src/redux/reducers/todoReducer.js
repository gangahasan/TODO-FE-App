import { ADD_TODO } from "../actions/actions";

const todoList = JSON.parse(localStorage.getItem("todos")) || [];
console.log({ todoList });

const initState = { todos: todoList };
export const todoReducer = (state = initState, action) => {
  console.log({ action });

  switch (action.type) {
    case ADD_TODO:
      localStorage.setItem(
        "todos",
        JSON.stringify([...state.todos, action.payload])
      );

      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
