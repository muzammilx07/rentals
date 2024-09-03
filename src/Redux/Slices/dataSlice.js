import { createSlice } from "@reduxjs/toolkit";
import property from "../../Data/data";

const initialState = {
  dataToRender: property,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataToRender(state, action) {
      state.dataToRender = action.payload;
      console.log("data", state.dataToRender);
    },
  },
});

export const { setDataToRender } = dataSlice.actions;
export default dataSlice.reducer;
