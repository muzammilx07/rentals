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
      localStorage.setItem("favouriteData", JSON.stringify(state.favouriteData));
    },
    addFavourite(state, action) {
      const property = action.payload;
      console.log("Adding to favourites:", property);
      if (!state.favouriteData.some((fav) => fav.id === property.id)) {
        state.favouriteData.push(property);
        console.log("Updated favouriteData:", state.favouriteData);
        localStorage.setItem("favouriteData", JSON.stringify(state.favouriteData));
        const expiryTime = Date.now() + 30 * 60 * 1000; // 30 minutes
        localStorage.setItem("favouriteDataExpiry", expiryTime.toString());
      } else {
        console.log("Property already in favourites.");
      }
    },
    removeFavourite(state, action) {
      const propertyId = action.payload.id;
      console.log("Removing from favourites with ID:", propertyId);
      state.favouriteData = state.favouriteData.filter((fav) => fav.id !== propertyId);
      console.log("Updated favouriteData:", state.favouriteData);
      localStorage.setItem("favouriteData", JSON.stringify(state.favouriteData));
    },
    clearExpiredFavourites(state) {
      const expiryTime = localStorage.getItem("favouriteDataExpiry");
      if (expiryTime && Date.now() > parseInt(expiryTime, 10)) {
        console.log("Clearing expired favourites");
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
