export const UPDATE_NAME = "auth/updateName";
export const UPDATE_AUTHENTICATION = "auth/updateAuthentication";
export const UPDATE_ERROR = "auth/updateError";

export const updateName = (name: string) => ({
  type: UPDATE_NAME,
  payload: { name },
});

export const updateAuthentication = (authenticated: boolean) => ({
  type: UPDATE_AUTHENTICATION,
  payload: { authenticated },
});

export const updateError = (error: string) => ({
  type: UPDATE_ERROR,
  payload: { error },
});
