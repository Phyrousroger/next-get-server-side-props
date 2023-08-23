import React from "react";
import { Button, Container, Flex, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { decrement, increment } from "@/store/reducers/CounterSlice";

const Index = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Container mt={20}>
      <Flex gap={20}>
        <Button onClick={handleIncrement}>+</Button>
        <Text>{counter}</Text>
        <Button onClick={handleDecrement}>-</Button>
      </Flex>
    </Container>
  );
};

export default Index;
