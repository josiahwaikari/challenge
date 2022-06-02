import { combineReducers } from "redux";
import { Classroom, Student, Auth } from "../types";
import authReducer from "./auth.reducer";
import classroomReducer from "./classroom.reducer";
import studentReducer from "./student-reducer";

export type TAppState = {
  classrooms: Classroom[];
  student: Student;
  auth: Auth;
};

const rootReducer = combineReducers({
  classrooms: classroomReducer,
  student: studentReducer,
  auth: authReducer,
});

export default rootReducer;
