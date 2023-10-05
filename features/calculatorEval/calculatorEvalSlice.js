import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statement: "",
  decimalUsed: false,
  resultVisible: false,
};

const calculatorEvalSlice = createSlice({
  name: "calculatorEval",
  initialState,
  reducers: {
    clear: (state) => {
      state.statement = "";
      state.decimalUsed = false;
      state.resultVisible = false;
    },
    backspace: (state) => {
      if (Boolean(state.statement)) {
        const char = state.statement.slice(-1);
        if (char == ".") {
          state.decimalUsed = false;
        }
        state.statement = state.statement.slice(0, -1);
        state.resultVisible = false;
      }
    },
    doublezero: (state) => {
      if (resultVisible) {
        state.statement = "0";
        state.resultVisible = false;
      } else {
        const add = "";
        if (state.statement == "") {
          add = "0";
        } else if (state.statement == "0") {
          add = "";
        } else {
          add = "00";
        }
        state.statement += add;
      }
    },
    zero: (state) => {
      if (resultVisible) {
        state.statement = "0";
        state.resultVisible = false;
      } else if (Boolean(state.statement) != "0") {
        state.statement += "0";
      }
    },
    decimal: (state) => {
      if (state.resultVisible) {
        state.statement = "0.";
        state.resultVisible = false;
      } else if (!state.decimalUsed) {
        state.decimalUsed = true;
        state.statement += ".";
      }
    },
    operator: (state, action) => {
      if (state.resultVisible) {
        state.resultVisible = false;
        state.statement = eval(state.statement) + action.payload;
      } else if (
        Boolean(state.statement) &&
        !isNaN(state.statement.slice(-1))
      ) {
        state.statement += action.payload;
      }
    },
    result: (state) => {
      if (!state.resultVisible) {
        state.resultVisible = true;
      }
    },
    number: (state, action) => {
      if (state.resultVisible) {
        state.resultVisible = false;
        state.statement = action.payload;
      } else {
        console.log(action);
        state.statement += action.payload;
      }
    },
  },
});

export const {
  clear,
  backspace,
  doublezero,
  zero,
  decimal,
  operator,
  result,
  number,
} = calculatorEvalSlice.actions;
export default calculatorEvalSlice.reducer;
