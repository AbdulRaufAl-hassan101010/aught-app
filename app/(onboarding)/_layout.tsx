import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { isOnboarded } from "@/libs/utils";

const _layout = () => {
  useEffect(() => {
    isOnboarded();
  }, []);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="onboarding1" />
        <Stack.Screen name="onboarding2" />
        <Stack.Screen name="onboarding3" />
        <Stack.Screen name="onboarding4" />
      </Stack>
      <StatusBar style="light" animated />
    </>
  );
};

export default _layout;
