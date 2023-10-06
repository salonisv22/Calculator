import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import History from "./History";
import { Text, Pressable } from "react-native";
import { deleted } from "../features/calculatorHistory/calculatorHistorySlice";
import { useDispatch } from "react-redux";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="History"
          options={{
            headerRight: () => (
              <Pressable onPress={() => dispatch(deleted())}>
                <Text className="text-2xl">🗑</Text>
              </Pressable>
            ),
          }}
          component={History}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
