import React, { useEffect } from "react";
import AddTodo from "../../components/AddTodo";
import TodosList from "../../components/TodosList";
import SearchTodo from "../../components/SearchTodo";
import SortTheList from "../../components/SortTheList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodos } from "../todo/todoActions";

const TodosPage = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // prevent rendering until redirect happens
  }

  return (
    <div className="m-8 w-full md:p-2 sm:p-2 place-self-start rounded-md flex flex-col place-items-center">
      <div className="flex gap-2">
        <SearchTodo />
        <SortTheList />
      </div>
      <TodosList />
      <AddTodo />
    </div>
  );
};

export default TodosPage;
