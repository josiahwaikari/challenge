import { Student } from "../types";

export const SET_STUDENT = "student/setStudent";

export const setStudent = (student: Student) => ({
  type: SET_STUDENT,
  payload: { student },
});
