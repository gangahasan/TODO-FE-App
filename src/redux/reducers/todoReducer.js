// import { ADD_TODO, DELETE_TODO, SEARCH_TASK, SORT_THE_LIST, TOGGLE_STATUS } from "../actions/actions";

// const todoList = JSON.parse(localStorage.getItem("todos")) || [];
// // console.log({ todoList });

// const initState = { todos: todoList };
// export const todoReducer = (state = initState, action) => {

//   switch (action.type) {
//     case ADD_TODO:
//       localStorage.setItem(
//         "todos",
//         JSON.stringify([action.payload,...state.todos])
//       );
//       return {
//         ...state,
//         todos: [action.payload, ...state.todos],
//       };

//     case TOGGLE_STATUS:
//       const updatedTodos = state.todos.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, isCompleted: !todo.isCompleted }
//           : todo
//       );
//       localStorage.setItem("todos", JSON.stringify(updatedTodos));
//       return {
//         ...state,
//         todos: updatedTodos,
//       };
//     case SEARCH_TASK:
//             return{
//                 ...state,
//                 todos:action.payload,
//             }
//     case SORT_THE_LIST:
//         return{
//             ...state,
//             todos:action.payload,
//         }
//     case DELETE_TODO:
//             const updatedList = state.todos.filter((todo)=>
//                 todo.id !== action.payload.id
//             )
//              localStorage.setItem("todos", JSON.stringify(updatedList));
//             return{
//                 ...state,
//                 todos:updatedList,
//             }
//     default:
//       return state;
//   }
// };
