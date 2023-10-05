import React from "react";
import { Pressable, Text, View } from "react-native";
import ButtonGroup from "../components/ButtonGroup";
import { useState } from "react";
import store from "../app/store";
import { calcultorHistoryActions } from "../features/calculatorHistory/calculatorHistorySlice";

const buttonMatrix = [
  ["C", "%", "⌫", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["00", "0", ".", "="],
];

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
      </Pressable>

      <View className=" flex-1 flex-col justify-end h-auto w-auto">
        <View className="h-20 w-80px m-2 justify-center">
          <Text className="text-right text-2xl text-white">{statement}</Text>
        </View>
        {buttonMatrix.map((itr) => (
          <ButtonGroup
            key={itr[0]}
            symbolArray={itr}
            evalAction={evalInput}
          ></ButtonGroup>
        ))}
      </View>
    </View>
  );
}
