import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const historyCount = 5;

const calculatorHistorySlice = createSlice({
  name: "calculatorHistory",
  initialState,
  reducers: {
    calculated: (state, action) => {
      if (state.history.length >= historyCount) {
        state.history.shift();
        state.history.push(action.payload);
      } else {
        state.history.push(action.payload);
      }
    },
  },
});

export const calcultorHistoryActions = calculatorHistorySlice.actions;
export default calculatorHistorySlice.reducer;
