import React from "react";
import Home from "./screens/Home";
import store from "./app/store";
import { calcultorHistoryActions } from "./features/calculatorHistory/calculatorHistorySlice";

export default function App() {
  console.log("initial state", store.getState());
  const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState());
  });

  store.dispatch(calcultorHistoryActions.calculated("3+5+7"));
  store.dispatch(calcultorHistoryActions.calculated("3+5+7"));
  store.dispatch(calcultorHistoryActions.calculated("3+5+7"));
  store.dispatch(calcultorHistoryActions.calculated("3+5+7"));
  store.dispatch(calcultorHistoryActions.calculated("3+5+7"));
  store.dispatch(calcultorHistoryActions.calculated("+0"));
  unsubscribe();
  return <Home />;
}
