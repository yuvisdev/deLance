import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    addUser(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
