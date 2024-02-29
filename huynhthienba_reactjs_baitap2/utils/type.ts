import * as Yup from "yup";
import { contactSchema, loginSchema } from "./validations";

export type FormLogin = Yup.InferType<typeof loginSchema>;
export type FormContact = Yup.InferType<typeof contactSchema>;
