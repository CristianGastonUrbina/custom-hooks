import { useEffect, useReducer } from "react";
import {todoReducer} from "../08-useReducer/todoReducer"

export const useTodo = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = { value: todo, type: "ADD_TODO" };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = { value: todo, type: "DELETE_TODO" };
    dispatchTodo(action);
  };

  const handleToggleTodo = (todo) => {
    const action = { value: todo, type: "TOGGLE_TODO" };
    dispatchTodo(action);
  };

  const todosCount = todos.length

  const pendingTodosCount = todos.filter(todo => !todo.done).length

  return {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount}
};
