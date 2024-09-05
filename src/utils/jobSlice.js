import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload; // Update the job list with the fetched data
    },
  },
});

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
