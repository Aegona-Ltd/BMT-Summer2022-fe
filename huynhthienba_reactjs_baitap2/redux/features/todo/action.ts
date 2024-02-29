import { createAction } from "@reduxjs/toolkit";
import { TodoItemType, UpdateTodoType } from "./type";

export const addTodo = createAction<TodoItemType>("todo/add-todo");
export const removeTodo = createAction<string>("todo/remove-todo");
export const updateTodo = createAction<UpdateTodoType>("todo/update-todo");
export const completeTodoToggle = createAction<string>(
  "todo/complete-toggle-todo"
);
