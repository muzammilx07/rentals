import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slices/dataSlice";
import rentalReducer from "../Slices/rentalSlice";
import buyReducer from "../Slices/buySlice";
import favouriteSlice from "../Slices/favouriteSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    rental: rentalReducer,
    buy: buyReducer,
    favourite: favouriteSlice,
  },
});

export default store;
