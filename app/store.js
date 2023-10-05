import { configureStore } from "@reduxjs/toolkit";
import calculatorHistoryReducer from "../features/calculatorHistory/calculatorHistorySlice";

const store = configureStore({
  reducer: {
    cake: calculatorHistoryReducer,
  },
});

export default store;
