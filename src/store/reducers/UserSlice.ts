import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./../../models/IUser";
import { fetchUsers } from "./ActionCreators";

export interface UsersState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetchhing(state) {
      state.isLoading = true;
    },
    usersFetchhingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.users = action.payload;
    },
    usersFetchhingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

export default userSlice.reducer;
