import * as Yup from "yup";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = Yup.object({
  firstName: Yup.string().required("Please enter your first name"),
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format"),
  phoneNumber: Yup.string()
    .required("Please enter your phone number")
    .matches(phoneRegExp, "Phone number is not valid"),
  message: Yup.string().required("Please enter your message"),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Length from 8 - 36 characters")
    .max(36, "Length from 8 - 36 characters"),
});

export const addTodoSchema = Yup.object({
  newTodo: Yup.string().required("Please enter todo name"),
});

export const editTodoSchema = Yup.object({
  editTodo: Yup.string().required("Todo name is required"),
});
