import { ADD_TODO, TOGGLE_STATUS } from "../actions/actions";

const todoList = JSON.parse(localStorage.getItem("todos")) || [];
console.log({ todoList });

const initState = { todos: todoList };
export const todoReducer = (state = initState, action) => {

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

    case TOGGLE_STATUS:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};
