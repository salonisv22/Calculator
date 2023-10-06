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
  const dispatch = useDispatch();
  const statement = useSelector((state) => state.calculatorEval.statement);
  const resultVisible = useSelector(
    (state) => state.calculatorEval.resultVisible
  );

  const buttonObjectGroupMatrix = [
    [
      {
        text: "C",
        action: () => {
          dispatch(clear());
        },
        style: `bg-zinc-700`,
      },
      {
        text: "%",
        action: (value) => {
          dispatch(operator(value));
        },
        style: `bg-zinc-700`,
      },

      {
        text: "⌫",
        action: () => {
          dispatch(backspace());
        },
        style: `bg-zinc-700`,
      },
      {
        text: "/",
        action: (value) => {
          dispatch(operator(value));
        },
        style: `bg-zinc-700`,
      },
    ],
    [
      {
        text: "7",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },
      {
        text: "8",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },

      {
        text: "9",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },
      {
        text: "X",
        action: () => {
          dispatch(operator("*"));
        },
        style: `bg-zinc-700`,
      },
    ],
    [
      {
        text: "4",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },
      {
        text: "5",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },

      {
        text: "6",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },
      {
        text: "-",
        action: (value) => {
          dispatch(operator(value));
        },
        style: `bg-zinc-700`,
      },
    ],
    [
      {
        text: "1",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },
      {
        text: "2",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },

      {
        text: "3",
        action: (value) => {
          dispatch(number(value));
        },
        style: `bg-zinc-900`,
      },
      {
        text: "+",
        action: (value) => {
          dispatch(operator(value));
        },
        style: `bg-zinc-700`,
      },
    ],
    [
      {
        text: "00",
        action: () => {
          dispatch(doublezero());
        },
        style: `bg-zinc-900`,
      },
      {
        text: "0",
        action: () => {
          dispatch(zero());
        },
        style: `bg-zinc-900`,
      },

      {
        text: ".",
        action: () => {
          dispatch(decimal());
        },
        style: `bg-zinc-900`,
      },
      {
        text: "=",
        action: () => {
          dispatch(result());
          dispatch(calculated([statement, eval(statement)]));
        },
        style: `bg-sky-700`,
      },
    ],
  ];

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

        {buttonObjectGroupMatrix.map((buttonObjectGroup) => (
          <ButtonGroup
            key={buttonObjectGroup[0].text}
            buttonObjectGroup={buttonObjectGroup}
          ></ButtonGroup>
        ))}
      </View>
    </View>
  );
}
