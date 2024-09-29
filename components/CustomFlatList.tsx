import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { FlatList, FlatListProps } from "react-native";

type CustomFlatListProps<ItemT> = {} & CustomProps & FlatListProps<ItemT>;

const CustomFlatList = <ItemT,>({
  lightClassName = "",
  darkClassName = "",
  globalClassName,
  ...props
}: CustomFlatListProps<ItemT>) => {
  const theme = useTheme();

  return (
    <FlatList
      className={
        theme?.theme === "dark"
          ? `${globalClassName} ${darkClassName}`
          : `${globalClassName} ${lightClassName}`
      }
      {...props}
    />
  );
};

export default CustomFlatList;
