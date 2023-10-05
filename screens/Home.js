import React from "react";
import { Pressable, Text, View } from "react-native";
import ButtonGroup from "../components/ButtonGroup";
import { useState } from "react";
import store from "../app/store";
import { calcultorHistoryActions } from "../features/calculatorHistory/calculatorHistorySlice";

import InputButton from "../components/InputButton";

const buttonMatrix = [
  ["00", "0", ".", "="],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "%", "⌫", "/"],
];

const goToHistory = (navigation) => {
  return navigation.navigate("History");
};

export default function Home({ navigation }) {
  const [statement, setStatement] = useState("");
  const evalInput = (value) => {
    switch (value) {
      case "C":
        setStatement("");
        break;
      case "⌫":
        setStatement(statement.slice(0, -1));
        break;
      case "=":
        const result = eval(statement);
        store.dispatch(calcultorHistoryActions.calculated([statement, result]));
        console.log(store.getState());
        setStatement(result);
        break;
      default:
        setStatement(statement + value);
    }
  };

  return (
    <View className="bg-gray-950 w-full h-full flex">
      <Pressable onPress={() => navigation.navigate("History")}>
        <Text className=" text-white text-5xl self-end p-4">⏱</Text>
        {/* <InputButton value={"⏱"} action={() => goToHistory(navigation)} /> */}
      </Pressable>

      <View className=" flex-1 flex-col-reverse h-auto w-auto">
        {buttonMatrix.map((itr) => (
          <ButtonGroup
            key={itr[0]}
            symbolArray={itr}
            evalAction={evalInput}
          ></ButtonGroup>
        ))}

        <View className="h-20 w-80px m-2 justify-center">
          <Text className="text-right text-2xl text-white">{statement}</Text>
        </View>
      </View>
    </View>
  );
}
