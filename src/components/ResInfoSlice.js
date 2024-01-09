import { createSlice } from "@reduxjs/toolkit";

const ResInfoSlice = createSlice({
  name: "res",
  initialState: {
    info: {},
  },
  reducers: {
    addInfo: (state, action) => {
      state.info = { ...action };
    },
  },
});

export default ResInfoSlice.reducer;

export const { addInfo } = ResInfoSlice.actions;
