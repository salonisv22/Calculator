import React from "react";
import { Pressable, Text } from "react-native";

const InputButton = ({ value, action, style }) => {
  return (
    <Pressable
      className={`${style(
        value
      )} h-20 w-20 rounded-full justify-center items-center my-1`}
      onPress={() => action(value)}
    >
      <Text className=" w-10 text-center text-white text-2xl">{value}</Text>
    </Pressable>
  );
};

export default InputButton;
