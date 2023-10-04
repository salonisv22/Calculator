import React from "react";
import { Pressable, Text } from "react-native";

const symbol = new Set(["C", "%", "⌫", "/", "*", "-", "+"]);
const buttonStyle = (arg) =>
  `${
    arg === "=" ? `bg-sky-700` : symbol.has(arg) ? `bg-zinc-700` : `bg-zinc-900`
  }  h-20 w-20 rounded-full justify-center items-center my-1`;

const InputButton = ({ value, action }) => {
  return (
    <Pressable className={buttonStyle(value)} onPress={() => action(value)}>
      <Text className=" w-10 text-center text-white text-2xl">{value}</Text>
    </Pressable>
  );
};

export default InputButton;
