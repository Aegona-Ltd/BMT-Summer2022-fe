import { all } from "@redux-saga/core/effects";
import {
  followAddStudentApi,
  followDeleteStudentApi,
  followEditStudentApi,
  followGetAllStudentApi,
  followGetAllStudentWithoutApi,
} from "./features/management/saga";

export function* rootSagas() {
  yield all([
    followGetAllStudentApi(),
    followDeleteStudentApi(),
    followAddStudentApi(),
    followGetAllStudentWithoutApi(),
    followEditStudentApi(),
  ]);
}
