import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteData: JSON.parse(localStorage.getItem("favouriteData")) || [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite(state, action) {
      const property = action.payload;
      if (!state.favouriteData.some((fav) => fav.id === property.id)) {
        state.favouriteData.push(property);
        localStorage.setItem(
          "favouriteData",
          JSON.stringify(state.favouriteData)
        );
        const expiryTime = Date.now() + 30 * 60 * 1000; // 30 minutes
        localStorage.setItem("favouriteDataExpiry", expiryTime.toString());
      }
    },
    removeFavourite(state, action) {
      const propertyId = action.payload.id;
      state.favouriteData = state.favouriteData.filter(
        (fav) => fav.id !== propertyId
      );
      localStorage.setItem(
        "favouriteData",
        JSON.stringify(state.favouriteData)
      );
    },
    clearExpiredFavourites(state) {
      const expiryTime = localStorage.getItem("favouriteDataExpiry");
      if (expiryTime && Date.now() > parseInt(expiryTime, 10)) {
        state.favouriteData = [];
        localStorage.removeItem("favouriteData");
        localStorage.removeItem("favouriteDataExpiry");
      }
    },
  },
});

export const { addFavourite, removeFavourite, clearExpiredFavourites } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
