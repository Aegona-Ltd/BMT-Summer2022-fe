export type UpdateTodoType = {
  id: string;
  name: string;
};

export type TodoItemType = {
  id: string;
  name: string;
  isCompleted: boolean;
  startDate: string;
  endDate: string;
};

export type TodoReducerType = {
  todoList: TodoItemType[];
};

export const todoItemDefault: TodoItemType = {
  id: "",
  name: "",
  isCompleted: false,
  startDate: `${Math.floor(Date.now() / 1000)}`,
  endDate: "",
};

export const todoReducerDefault: TodoReducerType = {
  todoList: [],
};
