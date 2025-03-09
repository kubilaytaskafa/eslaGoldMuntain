import { createSlice } from "@reduxjs/toolkit";
import tipBirOda from "../../images/tipBirOda.webp";
import tipİkiOda from "../../images/tipİkiOda.webp";
import tipUcOda from "../../images/tipUcOda.webp";

const initialState = {
  rooms: [
    {
      id: 1,
      name: "Tip 1 Oda",
      description: "Standart Oda",
      image: tipBirOda,
    },
    {
      id: 2,
      name: "Tip 2 Oda",
      description: "Lüks Oda",
      image: tipİkiOda,
    },
    {
      id: 3,
      name: "Tip 3 Oda",
      description: "Ultra Lüks Oda",
      image: tipUcOda,
    },
  ],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
});

export default roomSlice.reducer;
