import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredData: [],
  property: [], 
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
    setPropertyData(state, action) {
      state.property = action.payload;
    },
  },
});

export const { setFilteredData, setPropertyData } = filterSlice.actions;

export default filterSlice.reducer;
