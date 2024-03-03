import { RootState } from "@/redux/sagaStore";
import {
  SET_LOADING_STUDENT,
  SET_STUDENT_REDUCER,
  SET_STUDENT_WITHOUT_LOADING_REDUCER,
} from "./constant";
import { studentInitState } from "./type";

const studentReducer = (state = studentInitState, action: any) => {
  switch (action.type) {
    case SET_LOADING_STUDENT: {
      return { ...state, isLoading: action.isLoading };
    }
    case SET_STUDENT_REDUCER: {
      return { ...state, students: action.students };
    }
    case SET_STUDENT_WITHOUT_LOADING_REDUCER: {
      return { ...state, students: action.students };
    }
    default:
      return state;
  }
};

export const selectStudent = (state: RootState) => state.student;

export default studentReducer;
