import { configureStore } from "@reduxjs/toolkit";
import calculatorHistoryReducer from "../features/calculatorHistory/calculatorHistorySlice";

const store = configureStore({
  reducer: {
    calculatorHistory: calculatorHistoryReducer,
  },
});

export default store;
