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
  ...props
}: CustomSafeAreaViewProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      className={
        theme?.theme === "dark"
          ? `${globalClassName} ${darkClassName}`
          : `${globalClassName} ${lightClassName}`
      }
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
