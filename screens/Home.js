import React from "react";
import { Pressable, Text, View } from "react-native";
import ButtonGroup from "../components/ButtonGroup";
import { calculated } from "../features/calculatorHistory/calculatorHistorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  backspace,
  doublezero,
  zero,
  decimal,
  operator,
  result,
  number,
} from "../features/calculatorEval/calculatorEvalSlice";

export default function Home({ navigation }) {
  const statement = useSelector((state) => state.calculatorEval.statement);
  const resultVisible = useSelector(
    (state) => state.calculatorEval.resultVisible
  );
  const dispatch = useDispatch();
  const symbol = new Set(["C", "%", "⌫", "/", "*", "-", "+"]);

  const buttonMatrix = [
    ["C", "%", "⌫", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  const evalInput = (value) => {
    console.log(value);

    switch (value) {
      case "C":
        dispatch(clear());
        break;
      case "⌫":
        dispatch(backspace());
        break;
      case ".":
        dispatch(decimal());
        break;
      case "=":
        dispatch(result());
        dispatch(calculated([statement, eval(statement)]));
        break;
      case "00":
        dispatch(doublezero());
      case "0":
        dispatch(zero());
      default:
        if (isNaN(value)) {
          dispatch(operator(value));
        } else {
          dispatch(number(value));
        }
    }
  };

  const buttonStyle = (arg) =>
    arg === "="
      ? `bg-sky-700`
      : symbol.has(arg)
      ? `bg-zinc-700`
      : `bg-zinc-900`;
  return (
    <View className="bg-gray-950 w-full h-full flex">
      <Pressable onPress={() => navigation.navigate("History")}>
        <Text className=" text-white text-5xl self-end p-4">⏱</Text>
      </Pressable>

      <View className=" flex-1 flex-col justify-end h-auto w-auto">
        <View className="h-20 w-80px m-2 justify-center">
          <Text className="text-right text-2xl text-white">{statement}</Text>
        </View>

        {resultVisible ? (
          <View className="h-20 w-80px m-2 justify-center">
            <Text className="text-right text-2xl text-white">
              {eval(statement)}
            </Text>
          </View>
        ) : (
          <></>
        )}
        {buttonMatrix.map((itr) => (
          <ButtonGroup
            key={itr[0]}
            symbolArray={itr}
            evalAction={evalInput}
            evalStyle={buttonStyle}
          ></ButtonGroup>
        ))}
      </View>
    </View>
  );
}
