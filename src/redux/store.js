import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import roomReducer from "./slices/roomSlice";
export const store = configureStore({
  reducer: {
    header: headerReducer,
    room: roomReducer,
  },
});
