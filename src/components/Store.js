import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import ResInfoSlice from "./ResInfoSlice";

const store = configureStore({
  reducer: {
    cart: Cartslice,
    res: ResInfoSlice,
  },
});

export default store;
