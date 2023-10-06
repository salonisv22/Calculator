import React from "react";
import { View } from "react-native";
import InputButton from "./InputButton";

const ButtonGroup = ({ symbolArray, evalAction, evalStyle }) => {
  return (
    <View className="flex flex-row justify-evenly">
      {symbolArray.map((itr) => (
        <InputButton
          key={itr}
          value={itr}
          action={evalAction}
          style={evalStyle}
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
