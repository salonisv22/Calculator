import { configureStore } from "@reduxjs/toolkit";
import calculatorHistoryReducer from "../features/calculatorHistory/calculatorHistorySlice";
import calculatorEvalReducer from "../features/calculatorEval/calculatorEvalSlice";

const store = configureStore({
  reducer: {
    calculatorHistory: calculatorHistoryReducer,
    calculatorEval: calculatorEvalReducer,
  },
});

export default store;
