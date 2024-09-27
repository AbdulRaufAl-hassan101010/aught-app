import { Text, TextProps } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

type CustomTextProps = {} & CustomProps & TextProps;

const CustomText = ({
  children,
  lightClassName = "",
  darkClassName = "",
  globalClassName,
  ...props
}: CustomTextProps) => {
  const theme = useTheme();

  return (
    <Text
      className={
        theme.theme === "dark"
          ? `${globalClassName} text-gray-100 ${darkClassName}`
          : `${globalClassName} text-gray-500 ${lightClassName}`
      }
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomText;
