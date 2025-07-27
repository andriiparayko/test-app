import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";

import { getUsers } from "../../api/users";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await getUsers();

      return users?.data || [];
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message || "Failed to fetch users",
      });

      return rejectWithValue(error.message || "Failed to fetch users");
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
