import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;

export { store };
