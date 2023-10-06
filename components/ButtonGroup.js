import React from "react";
import { View } from "react-native";
import InputButton from "./InputButton";

const ButtonGroup = ({ buttonObjectGroup }) => {
  return (
    <View className="flex flex-row justify-evenly">
      {buttonObjectGroup.map((buttonObject) => (
        <InputButton
          key={buttonObject.text}
          value={buttonObject.text}
          action={buttonObject.action}
          style={buttonObject.style}
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
