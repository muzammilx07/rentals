import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../Slices/filterSlice";
import customDataSlice, { clearExpiredFavourites } from "../Slices/customData";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    customData: customDataSlice,
  },
});

store.dispatch(clearExpiredFavourites());
