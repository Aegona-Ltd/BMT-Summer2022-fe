import { createReducer } from "@reduxjs/toolkit";
import { TodoReducerType, todoReducerDefault } from "./type";
import { RootState } from "@/redux/store";
import { addTodo, completeTodoToggle, removeTodo, updateTodo } from "./action";

const todoReducer = createReducer(todoReducerDefault, (builder: any) => {
  builder
    .addCase(addTodo, (state: TodoReducerType, action: any) => {
      state.todoList = [...state.todoList, action.payload];
    })
    .addCase(removeTodo, (state: TodoReducerType, action: any) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    })
    .addCase(updateTodo, (state: TodoReducerType, action: any) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, name: action.payload.name };
        }
        return item;
      });
    })
    .addCase(completeTodoToggle, (state: TodoReducerType, action: any) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            endDate: `${Math.floor(Date.now() / 1000)}`,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });
    });
});

export const selectTodo = (state: RootState) => state.todo;

export default todoReducer;
