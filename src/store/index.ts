import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import cakeReducer from "./cartReducer";

const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});

export default store;
