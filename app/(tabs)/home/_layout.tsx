import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="checkout" />
    </Stack>
  );
};

export default HomeLayout;