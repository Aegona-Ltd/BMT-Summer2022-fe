import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editTodoSchema } from "@/utils/validations";
import { toast } from "react-toastify";
import { FormEditTodo } from "@/utils/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateTodo } from "@/redux/features/todo/action";
import { useSearchParams } from "next/navigation";
import { selectTodo } from "@/redux/features/todo/reducer";
import { TodoItemType } from "@/redux/features/todo/type";

const EditForm = ({ setClose }: { setClose: any }) => {
  const [currentTodo, setCurrentTodo] = useState<TodoItemType>();
  const searchParams = useSearchParams();
  const todoId = searchParams.get("id");
  const todo = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(editTodoSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormEditTodo) => {
    const todoUpdate = {
      id: todoId as string,
      name: data.editTodo,
    };
    dispatch(updateTodo(todoUpdate));
    setClose();
    reset();
  };

  const filterCurrentTodo = () => {
    setCurrentTodo(() => {
      const currTodo = todo.todoList.filter((todo) => todo.id === todoId)[0];
      setValue("editTodo", currTodo.name);
      return currTodo;
    });
  };

  useEffect(() => {
    if (isSubmitting && errors.editTodo) {
      toast(errors.editTodo.message, {
        type: "error",
      });
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast("Edited todo", {
        type: "success",
      });
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    todoId && filterCurrentTodo();
  }, [todoId]);

  return (
    <form
      method="post"
      className="flex items-center gap-4 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Todo name"
        type="text"
        name="editTodo"
        placeholder=" "
        register={register}
        theme="dark"
        defaultValue={currentTodo?.name}
      />
      <Button
        type="submit"
        theme="light"
        className="!p-0 hover:scale-125 transition-all duration-200"
      >
        <Image
          width={35}
          height={35}
          src="/icons/plus-white.svg"
          alt="plus-icon"
        />
      </Button>
    </form>
  );
};

export default EditForm;
