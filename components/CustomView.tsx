import { View, ViewProps } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

type CustomViewProps = {} & CustomProps & ViewProps;

const CustomView = ({
  children,
  lightClassName = "",
  darkClassName = "",
  globalClassName,
  ...props
}: CustomViewProps) => {
  const theme = useTheme();

  return (
    <View
      className={
        theme?.theme === "dark"
          ? `${globalClassName} ${darkClassName}`
          : `${globalClassName} ${lightClassName}`
      }
      {...props}
    >
      {children}
    </View>
  );
};

export default CustomView;
