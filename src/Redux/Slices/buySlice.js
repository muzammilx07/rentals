import { createSlice } from "@reduxjs/toolkit";
import property from "../../Data/data";

const { buy } = (() => {
  const buy = property.filter(
    (property) => property.category === "Available to Buy"
  );
  return { buy };
})();

const initialState = {
  buyData: buy,
};

const buySlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    setBuyData(state, action) {
      state.buyData = action.payload;
    },
  },
});

export const { setBuyData } =
  buySlice.actions;
export default buySlice.reducer;
