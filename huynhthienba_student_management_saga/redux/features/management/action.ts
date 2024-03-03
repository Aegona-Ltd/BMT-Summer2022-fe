import {
  ADD_NEW_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  GET_ALL_STUDENT,
  GET_ALL_STUDENT_WITHOUT_LOADING,
  SET_LOADING_STUDENT,
  SET_STUDENT_REDUCER,
  SET_STUDENT_WITHOUT_LOADING_REDUCER,
} from "./constant";
import { StudentType } from "./type";

export const setLoadingStudentAction = (isLoading: boolean) => ({
  type: SET_LOADING_STUDENT,
  isLoading,
});

export const getAllStudentAction = () => ({
  type: GET_ALL_STUDENT,
});

export const getAllStudentWithoutLoadingAction = () => ({
  type: GET_ALL_STUDENT_WITHOUT_LOADING,
});

export const setStudentWithoutLoadingReducerAction = (
  students: StudentType
) => ({
  type: SET_STUDENT_WITHOUT_LOADING_REDUCER,
  students,
});

export const setStudentReducerAction = (students: StudentType) => ({
  type: SET_STUDENT_REDUCER,
  students,
});

export const deleteStudentAction = (studentId: string) => ({
  type: DELETE_STUDENT,
  studentId,
});

export const addNewStudentAction = (student: any) => ({
  type: ADD_NEW_STUDENT,
  student,
});

export const editStudentAction = (student: any) => ({
  type: EDIT_STUDENT,
  student,
});
