import React from "react";
import { Button, Text, View } from "react-native";
import { AppState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../redux/counter/CounterAction";

export default function HomePage() {
  const count = useSelector((state: AppState) => state.counterReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log("cliced increment");
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    console.log("cliced decrement");
    dispatch(decrementCount());
  };

  return (
    <View>
      <Button title="increment" onPress={handleIncrement} />
      <Button title="decrement" onPress={handleDecrement} />
      <Text numberOfLines={1} ellipsizeMode="tail">
        {count}
      </Text>
    </View>
  );
}
