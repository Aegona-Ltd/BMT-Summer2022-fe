import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTodoSchema } from "@/utils/validations";
import { FormAddTodo } from "@/utils/type";
import { toast } from "react-toastify";
import { TodoItemType, todoItemDefault } from "@/redux/features/todo/type";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/todo/action";
import PlusIcon from "@/public/icons/plus.svg";

const AddForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(addTodoSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormAddTodo) => {
    const newTodo: TodoItemType = {
      ...todoItemDefault,
      id: uuidv4(),
      name: data.newTodo,
    };
    dispatch(addTodo(newTodo));
    reset();
  };

  useEffect(() => {
    if (isSubmitting && errors.newTodo) {
      toast(errors.newTodo.message, {
        type: "error",
      });
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast("Added new todo", {
        type: "success",
      });
    }
  }, [isSubmitSuccessful]);

  return (
    <form
      method="post"
      className="mx-6 w-full md:w-1/4 flex items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Todo name"
        type="text"
        name="newTodo"
        placeholder=" "
        register={register}
      />
      <Button
        type="submit"
        className="!p-0 hover:scale-125 transition-all duration-200"
      >
        <Image width={28} height={28} src={PlusIcon} alt="plus-icon" />
      </Button>
    </form>
  );
};

export default AddForm;
