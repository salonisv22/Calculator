import React from "react";
import { View } from "react-native";
import Banner from "../components/Banner";
import store from "../app/store";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.calculatorHistory.history);
  console.log("...............history......." + history);
  return (
    <View className="bg-gray-950 w-full h-full flex-col justify-end">
      {history.map((itr, index) => {
        return <Banner key={index} heading={itr[0]} description={itr[1]} />;
      })}
    </View>
  );
  return <View></View>;
};

export default History;
