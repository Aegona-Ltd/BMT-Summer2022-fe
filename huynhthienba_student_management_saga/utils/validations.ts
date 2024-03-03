import * as Yup from "yup";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const managementSchema = Yup.object({
  firstName: Yup.string().required("Please enter student first name"),
  birthDate: Yup.string().required("Please enter student birth day"),
  address: Yup.string().required("Please enter student address"),
  lastName: Yup.string(),
  graduationYear: Yup.string(),
});
