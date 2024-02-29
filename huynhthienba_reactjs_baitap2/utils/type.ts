import * as Yup from "yup";
import { contactSchema, loginSchema } from "./validations";

export type FormLogin = Yup.InferType<typeof loginSchema>;
export type FormContact = Yup.InferType<typeof contactSchema>;
export type MenuType = {
  name: string;
  label: string;
  href: string;
  active: string[];
};

export type GroupMenuType = {
  label: string;
  menu: MenuType[];
  isActive: boolean;
};
