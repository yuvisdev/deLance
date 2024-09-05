import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "test user",
  },
  reducers: {
    addUser(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
