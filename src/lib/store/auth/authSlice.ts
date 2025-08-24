import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/types";
import { IRegisterData } from "@/app/auth/register/register.type";
import { AppDispatch } from "../store";
import API from "@/lib/http";

const initialState: IInitialState = {
  user: {
    username: "",
    password: "",
    email: "",
  },
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state: IInitialState, action: PayloadAction<IUserData>) {
      state.user = action.payload;
    },
    setStatus(state: IInitialState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer;

export function registerUser(data: IRegisterData) {
  return async function loginUserThunk(dispatch: AppDispatch) {
    try {
      const response = await API.post("/register", data);
      if ((response.status = 200)) {
        dispatch(setStatus(Status.SUCCESS))
      } else {
        dispatch(setStatus(Status.ERROR))
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR))
    }
  };
}
