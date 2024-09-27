import { View, Text, ScrollViewProps, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type CustomSafeAreaViewProps = {} & CustomProps & SafeAreaViewProps;

const CustomSafeAreaView = ({
  children,
  lightClassName = "",
  darkClassName = "",
  globalClassName,
}: CustomSafeAreaViewProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      className={
        theme?.theme === "dark"
          ? `${globalClassName} ${darkClassName}`
          : `${globalClassName} ${lightClassName}`
      }
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
