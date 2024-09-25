import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

const Spinner = () => {
  const theme = useThemeColor();

  return (
    <View className="flex justify-center items-center h-full bg-primary dark:bg-primary-dark">
      <ActivityIndicator size="large" color={theme.secondarytheme.color} />
    </View>
  );
};

export default Spinner;
