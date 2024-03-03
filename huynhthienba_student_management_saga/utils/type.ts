import * as Yup from "yup";
import { managementSchema } from "./validations";

export type FormManagement = Yup.InferType<typeof managementSchema>;
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
