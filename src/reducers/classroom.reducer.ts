import { SET_CLASSROOMS } from "../actions";
import { Classroom, ClassroomActionType } from "../types";

const initialState: Classroom[] = [];

export default function classroomReducer(
  state = initialState,
  action: ClassroomActionType
) {
  switch (action.type) {
    case SET_CLASSROOMS:
      return action.payload.classrooms;
    default:
      return state;
  }
}
