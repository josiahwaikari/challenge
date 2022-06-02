import { SET_STUDENT } from "../actions";
import { StudentActionType } from "../types";

const initialState = { id: null, name: "" };

export default function studentReducer(
  state = initialState,
  action: StudentActionType
) {
  switch (action.type) {
    case SET_STUDENT:
      return action.payload.student;
    default:
      return state;
  }
}
