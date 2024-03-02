"use client";

import { selectTodo } from "@/redux/features/todo/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React, { useState } from "react";
import { completeTodoToggle, removeTodo } from "@/redux/features/todo/action";
import { TodoItemType } from "@/redux/features/todo/type";
import { formatTimestamp } from "@/configs/common";
import Popup from "@/components/Popup";
import { usePathname, useRouter } from "next/navigation";
import EditForm from "@/components/TodoForm/EditForm";
import AddForm from "@/components/TodoForm/AddForm";
import EditIcon from "@/public/icons/edit.svg";
import DeleteIcon from "@/public/icons//delete.svg";
import DoubleCheckIcon from "@/public/icons/double-check.svg";
import SingleCheckIcon from "@/public/icons/single-check.svg";

const TodoView = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleTodo = (id: string) => {
    dispatch(completeTodoToggle(id));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.replace(`${pathname}`);
  };

  const renderTasks = (completedTasks = false) => {
    const filteredTasks = todos.todoList?.filter(
      (item) => completedTasks === item.isCompleted
    );

    if (!filteredTasks || filteredTasks?.length === 0) {
      return <p className="text-dark-100">No tasks found</p>;
    }

    return filteredTasks.map((z: TodoItemType, i) => (
      <div
        key={i}
        className={`rounded py-3 px-4 flex items-center justify-between ${
          completedTasks ? "bg-grey-500" : "bg-dark-200"
        }`}
      >
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-bold">{z.name}</h3>
          <p className="text-sm">Start date: {formatTimestamp(z.startDate)}</p>
          {completedTasks && (
            <p className="text-sm">End date: {formatTimestamp(z.endDate)}</p>
          )}
          <div
            className="text-sm flex items-center gap-3 cursor-pointer group"
            onClick={() => handleToggleTodo(z.id)}
          >
            <Image
              width={24}
              height={24}
              src={completedTasks ? DoubleCheckIcon : SingleCheckIcon}
              alt="complete-icon"
              className="group-hover:scale-110 transition-all duration-200"
            />
            {completedTasks ? "Completed" : "Mark as completed"}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <div
            className="cursor-pointer hover:scale-110 transition-all duration-200 p-1"
            onClick={() => {
              setShowPopup(!showPopup);
              router.replace(`${pathname}?id=${z.id}`);
            }}
          >
            <Image width={24} height={24} src={EditIcon} alt="complete-icon" />
          </div>
          <div
            className="cursor-pointer hover:scale-110 transition-all duration-200 p-1"
            onClick={() => handleRemoveTodo(z.id)}
          >
            <Image
              width={22}
              height={24}
              src={DeleteIcon}
              className="w-auto h-auto"
              alt="complete-icon"
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="flex justify-center">
        <AddForm />
      </div>
      <div className="container mx-auto lg:max-w-[70vw] xl:max-w-[50vw] px-6 flex justify-between flex-col md:flex-row gap-9 mb-10">
        <div className="flex-1 md:border-r-2 md:border-dark-100 md:pr-9">
          <h3 className="text-lg font-bold border-b-2 border-dark-200 inline-block pr-10 mb-9">
            Running Tasks
          </h3>
          <div className="flex flex-col gap-5 text-light-100 max-h-[calc(70vh)] overflow-y-auto">
            {renderTasks()}
          </div>
        </div>
        <div className="flex-1 md:pr-9">
          <h3 className="text-lg font-bold mb-9">Completed Tasks</h3>
          <div className="flex flex-col gap-5 text-light-200 max-h-[calc(70vh)] overflow-y-auto">
            {renderTasks(true)}
          </div>
        </div>
      </div>

      <Popup
        title="Edit task"
        className="w-full md:w-1/3 mx-2"
        open={showPopup}
        setClose={handleClosePopup}
      >
        <EditForm setClose={handleClosePopup} />
      </Popup>
    </>
  );
};

export default TodoView;
