import { createSlice } from "@reduxjs/toolkit";
import property from "../../Data/data";

const { rental } = (() => {
  const rental = property.filter((property) => property.category === "Rental");
  return { rental };
})();

const initialState = {
  rentalData: rental,
};

const rentalSlice = createSlice({
  name: "rental",
  initialState,
  reducers: {
    setRentalData(state, action) {
      state.rentalData = action.payload;
    },
  },
});

export const { setRentalData } =
  rentalSlice.actions;
export default rentalSlice.reducer;
