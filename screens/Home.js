import React from "react";
import { Text, View } from "react-native";
import ButtonGroup from "../components/ButtonGroup";
import { useState } from "react";

const buttonMatrix = [
  ["00", "0", ".", "="],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "%", "⌫", "/"],
];

export default function Home() {
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
        setStatement(eval(statement));
        break;
      default:
        setStatement(statement + value);
    }
  };
  return (
    <View className="bg-gray-950 w-full h-full flex flex-col-reverse">
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
  );
}
