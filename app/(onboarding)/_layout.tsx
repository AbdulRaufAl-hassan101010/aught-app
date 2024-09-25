import React, { useEffect } from "react";
import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default OnboardingLayout;
