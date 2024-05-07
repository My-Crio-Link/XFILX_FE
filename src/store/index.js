import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./rating";
import searchReducer from "./results";

const store = configureStore({
  reducer: {
    rating: ratingReducer,
    results: searchReducer,
  },
});

export default store;
