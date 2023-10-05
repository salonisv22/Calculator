import React from "react";
import { Text, View } from "react-native";

const Banner = ({ heading, description }) => {
  return (
    <View className="bg-zinc-700 m-2 rounded-[18px] py-2 px-5">
      <Text className="text-lg text-white self-end">{heading}</Text>
      <Text className="text-3xl text-white self-end">{description}</Text>
    </View>
  );
};

export default Banner;
