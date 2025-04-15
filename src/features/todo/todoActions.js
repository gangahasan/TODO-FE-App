import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Firestore collection reference
const todosCollection = collection(db, "todos");

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const todos = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      createDate: data.createDate || null,
      completedDate: data.completedDate || null,
    };
  });
  return todos;
});



export const addTodo = createAsyncThunk("todo/addTodo", async (todo) => {
  const newTodo = {
    ...todo,
    createDate: new Date(), // Firestore will store this as a Timestamp
  };

  const docRef = await addDoc(collection(db, "todos"), newTodo);

  return {
    id: docRef.id,
    ...newTodo,
    createDate: newTodo.createDate.toISOString(), // 🔥 convert to string before storing in Redux
  };
});

export const toggleTodoStatus = createAsyncThunk(
  "todo/toggleTodo",
  async (todo) => {
    const todoRef = doc(db, "todos", todo.id);
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
      completedDate: !todo.isCompleted ? new Date().toISOString() : null,
    };
    await updateDoc(todoRef, updatedTodo);
    return updatedTodo;
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id) => {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
    return id;
  }
);
