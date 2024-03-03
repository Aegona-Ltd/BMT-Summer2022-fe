import React, { useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { managementSchema } from "@/utils/validations";
import { FormManagement } from "@/utils/type";
import { formatDateToISO8601, formatDateInput } from "@/configs/common";
import { useDispatch } from "react-redux";
import {
  addNewStudentAction,
  editStudentAction,
} from "@/redux/features/management/action";
import { StudentType } from "@/redux/features/management/type";
import cn from "@/utils/cn";

const Form = ({
  mode,
  data,
  closePopup,
}: {
  mode: "edit" | "add";
  data: StudentType | undefined;
  closePopup: any;
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(managementSchema),
    mode: "onChange",
  });

  const onSubmit = (values: FormManagement) => {
    values.birthDate = formatDateToISO8601(values.birthDate);
    const student = {
      birth_day: values.birthDate,
      firstname: values.firstName,
      lastname: values.lastName,
      address: values.address,
    };

    if (mode === "edit") {
      const studentEdit = {
        ...student,
        id: data?.id,
        graduation_year: values.graduationYear,
      };

      dispatch(editStudentAction(studentEdit));
    } else {
      dispatch(addNewStudentAction(student));
    }
    closePopup();
    reset();
  };

  useEffect(() => {
    if (data) {
      setValue("address", data.address);
      setValue("birthDate", formatDateInput(data.birth_day));
      setValue("graduationYear", formatDateInput(data.graduation_year));
      setValue("firstName", data.firstname);
      setValue("lastName", data.lastname);
    }
  }, [data]);

  return (
    <form
      method="post"
      className="p-5 flex-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
        <div>
          <Input
            label="First Name"
            type="text"
            name="firstName"
            placeholder=" "
            required
            theme="dark"
            error={!!errors.firstName}
            register={register}
          />
          <div className="min-h-[24px] italic text-sm text-red-400">
            {errors.firstName && errors.firstName.message}
          </div>
        </div>
        <div>
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            placeholder=" "
            theme="dark"
            register={register}
          />
          <div className="min-h-[24px] italic text-sm text-red-400"></div>
        </div>
        <div
          className={cn({
            "col-span-2 w-full": mode !== "edit",
          })}
        >
          <Input
            label="Birth Date"
            type="date"
            name="birthDate"
            placeholder=" "
            required
            theme="dark"
            error={!!errors.birthDate}
            register={register}
          />
          <div className="min-h-[24px] italic text-sm text-red-400">
            {errors.birthDate && errors.birthDate.message}
          </div>
        </div>
        {mode === "edit" && (
          <div>
            <Input
              label="Graduation year"
              type="date"
              name="graduationYear"
              placeholder=" "
              required
              theme="dark"
              error={!!errors.graduationYear}
              register={register}
            />
            <div className="min-h-[24px] italic text-sm text-red-400">
              {errors.birthDate && errors.birthDate.message}
            </div>
          </div>
        )}
        <div className="col-span-2 w-full">
          <Input
            label="Address"
            type="text"
            name="address"
            placeholder=" "
            required
            theme="dark"
            error={!!errors.address}
            register={register}
          />
          <div className="min-h-[24px] italic text-sm text-red-400">
            {errors.address && errors.address.message}
          </div>
        </div>
      </div>
      <div className="relative flex justify-end mb-0 lg:mt-10">
        <Button
          theme="dark"
          className="w-full lg:w-auto relative z-[1]"
          type="submit"
          size="small"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
