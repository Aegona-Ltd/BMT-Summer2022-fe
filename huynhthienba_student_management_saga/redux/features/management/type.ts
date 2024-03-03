export type StudentType = {
  firstname: string;
  lastname: string;
  birth_day: string;
  address: string;
  graduation_year: string;
  id: string;
};

export type StudentReducerType = {
  isLoading: boolean;
  students: StudentType[];
};

export const studentDefault: StudentType = {
  firstname: "",
  lastname: "",
  birth_day: "",
  address: "",
  graduation_year: "",
  id: "",
};

export const studentInitState: StudentReducerType = {
  isLoading: false,
  students: [],
};
