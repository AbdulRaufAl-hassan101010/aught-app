import { View, ActivityIndicator } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

const Spinner = () => {
  const theme = useThemeColor();

  return (
    <View
      className={`flex justify-center items-center flex-1 h-full ${
        theme?.theme === "dark" ? "bg-black" : "bg-primary"
      }`}
    >
      <ActivityIndicator
        size="large"
        color={theme?.colors?.secondarytheme.color}
      />
    </View>
  );
};

export default Spinner;
