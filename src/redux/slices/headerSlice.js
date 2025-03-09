import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = headerSlice.actions;

export default headerSlice.reducer;
