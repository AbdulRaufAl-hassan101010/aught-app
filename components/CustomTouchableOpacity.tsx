import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

type CustomTouchableOpacityProps = {} & CustomProps & TouchableOpacityProps;

const CustomTouchableOpacity = ({
  children,
  lightClassName = "",
  darkClassName = "",
  globalClassName = "",
  ...props
}: CustomTouchableOpacityProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      className={
        theme?.theme === "dark"
          ? `${globalClassName} ${darkClassName}`
          : `${globalClassName} ${lightClassName}`
      }
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
