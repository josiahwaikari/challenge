import { Classroom } from "../types";

export const FETCH_CLASSROOM = "classroom/fetchClassrooms";
export const SET_CLASSROOMS = "classroom/setClassrooms";

export const setClassrooms = (classrooms: Classroom[]) => ({
  type: SET_CLASSROOMS,
  payload: { classrooms },
});
