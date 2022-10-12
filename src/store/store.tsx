import { configureStore } from "@reduxjs/toolkit";
import { defaultSlice } from "./slice";

const store = configureStore({
  reducer: { tilesState: defaultSlice.reducer },
});

export default store;
