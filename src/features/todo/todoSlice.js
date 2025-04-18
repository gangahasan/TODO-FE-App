import { createSlice } from "@reduxjs/toolkit";
import {addTodo,fetchTodos,toggleTodoStatus,deleteTodo, searchTodo, sortTodos, editTodos } from "./todoActions";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Fetch Todos failed:", action.error.message);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);
      })
      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.todos[index] = action.payload;
      })
      .addCase(toggleTodoStatus.rejected, (state, action) => {
        state.error = action.error.message;
        console.error("Toggle todo failed:", action.error.message);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.error.message;
        console.error("Delete todo failed:", action.error.message);
      })
      .addCase(searchTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(searchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Search todo failed:", action.error.message);
      })
      .addCase(sortTodos.fulfilled,(state,action)=>{
        state.todos = action.payload;
      })
      .addCase(editTodos.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = {
            ...state.todos[index],
            ...action.payload,
          };
        }
      });

  },
});

export default todoSlice.reducer;
