import React from "react";
import { View } from "react-native";
import Banner from "../components/Banner";
import store from "../app/store";

const History = () => {
  const history = store.getState().calculatorHistory.history;

  return (
    <View className="bg-gray-950 w-full h-full flex-col justify-end">
      {history.map((itr, index) => {
        return <Banner key={index} heading={itr[0]} description={itr[1]} />;
      })}
    </View>
  );
};

export default History;
