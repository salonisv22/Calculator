import React from "react";
import { View } from "react-native";
import InputButton from "./InputButton";

const symbol = new Set(["C", "%", "<=", "/", "x", "-", "+"]);
const buttonStyle = (arg) =>
  `${
    symbol.has(arg) ? `bg-zinc-500` : `bg-zinc-700`
  }  h-20 w-20 rounded-full justify-center items-center my-1`;

const ButtonGroup = ({ symbolArray, evalAction }) => {
  return (
    <View className="flex flex-row justify-evenly">
      {symbolArray.map((itr) => (
        <InputButton key={itr} value={itr} action={evalAction} />
      ))}
    </View>
  );
};

export default ButtonGroup;
