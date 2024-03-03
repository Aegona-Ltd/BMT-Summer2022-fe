import { call, takeLatest, put } from "redux-saga/effects";
import api from "@/configs/axios";
import {
  ADD_NEW_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  GET_ALL_STUDENT,
  GET_ALL_STUDENT_WITHOUT_LOADING,
} from "./constant";
import { toast } from "react-toastify";
import {
  setLoadingStudentAction,
  setStudentReducerAction,
  setStudentWithoutLoadingReducerAction,
} from "./action";

function* getAllStudentApi(): Generator<any> {
  yield put(setLoadingStudentAction(true));
  try {
    const { data, status }: any = yield call(() => api.get("/Students"));
    if (status === 200) {
      yield put(setStudentReducerAction(data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoadingStudentAction(false));
  }
}

export function* followGetAllStudentApi() {
  yield takeLatest(GET_ALL_STUDENT, getAllStudentApi);
}

function* getAllStudentWithoutLoadingApi(): Generator<any> {
  try {
    const { data, status }: any = yield call(() => api.get("/Students"));
    if (status === 200) {
      yield put(setStudentWithoutLoadingReducerAction(data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* followGetAllStudentWithoutApi() {
  yield takeLatest(
    GET_ALL_STUDENT_WITHOUT_LOADING,
    getAllStudentWithoutLoadingApi
  );
}

function* deleteStudentApi(action: any): Generator<any> {
  try {
    const { status }: any = yield call(() =>
      api.delete(`/Students/${action.studentId}`)
    );
    if (status === 200) {
      yield put({
        type: GET_ALL_STUDENT_WITHOUT_LOADING,
      });
      toast("Deleted student successfully", { type: "success" });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* followDeleteStudentApi() {
  yield takeLatest(DELETE_STUDENT, deleteStudentApi);
}

function* addStudentApi(action: any): Generator<any> {
  try {
    const { status }: any = yield call(() =>
      api.post(`/Students`, action.student)
    );
    if (status === 200 || status === 201) {
      yield put({
        type: GET_ALL_STUDENT_WITHOUT_LOADING,
      });
      toast("Add new student successfully", { type: "success" });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* followAddStudentApi() {
  yield takeLatest(ADD_NEW_STUDENT, addStudentApi);
}

function* editStudentApi(action: any): Generator<any> {
  try {
    const { status }: any = yield call(() =>
      api.put(`/Students/${action.student.id}`, action.student)
    );
    if (status === 200 || status === 201) {
      yield put({
        type: GET_ALL_STUDENT_WITHOUT_LOADING,
      });
      toast("Edit student successfully", { type: "success" });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* followEditStudentApi() {
  yield takeLatest(EDIT_STUDENT, editStudentApi);
}
