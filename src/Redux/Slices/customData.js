import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rentalData: [],
  buyData: [],
  favouriteData: JSON.parse(localStorage.getItem("favouriteData")) || [],
};

const customDataSlice = createSlice({
  name: "customData",
  initialState,
  reducers: {
    setRental(state, action) {
      state.rentalData = action.payload;
    },
    setBuy(state, action) {
      state.buyData = action.payload;
    },
    setFavourite(state, action) {
      state.favouriteData = action.payload;
      localStorage.setItem(
        "favouriteData",
        JSON.stringify(state.favouriteData)
      );
    },
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
      } else {
        alert("Property already in favourites.");
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

export const {
  setRental,
  setBuy,
  setFavourite,
  addFavourite,
  removeFavourite,
  clearExpiredFavourites,
} = customDataSlice.actions;

export default customDataSlice.reducer;
