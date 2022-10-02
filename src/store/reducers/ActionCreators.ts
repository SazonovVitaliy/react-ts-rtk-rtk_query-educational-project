import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

//export const fetchUsers = () => {
//  return async (dispatch: AppDispatch) => {
//    try {
//      dispatch(userSlice.actions.usersFetchhing());
//      const response = await axios.get<IUser[]>(
//        "https://jsonplaceholder.typicode.com/users"
//      );
//      setTimeout(() => {
//        dispatch(userSlice.actions.usersFetchhingSuccess(response.data));
//      }, 500);
//    } catch (error: any) {
//      dispatch(userSlice.actions.usersFetchhingError(error.message));
//    }
//  };
//};

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
