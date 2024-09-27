import { ScrollViewProps, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

type CustomScrollViewProps = {} & CustomProps & ScrollViewProps;

const CustomScrollView = ({
  children,
  lightClassName = "bg-primary",
  darkClassName = "bg-black",
  globalClassName,
  ...props
}: CustomScrollViewProps) => {
  const theme = useTheme();

  return (
    <ScrollView
      className={
        theme?.theme === "dark"
          ? `${globalClassName} ${darkClassName}`
          : `${globalClassName} ${lightClassName}`
      }
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default CustomScrollView;
