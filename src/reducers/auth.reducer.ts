import { UPDATE_AUTHENTICATION, UPDATE_ERROR, UPDATE_NAME } from "../actions";
import { AuthActionType } from "../types";

const initialState = { name: "", authenticated: false };

export default function authReducer(
  state = initialState,
  action: AuthActionType
) {
  switch (action.type) {
    case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case UPDATE_AUTHENTICATION:
      return {
        ...state,
        authenticated: action.payload.authenticated,
      };
    default:
      return state;
  }
}
