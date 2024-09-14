import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { isLoading } from "expo-font";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type CustomButtonProps = {
  title: string;
  containerStyle?: string;
  titleStyle?: string;
  isLoading?: boolean;
} & TouchableOpacityProps;

const CustomButton = ({
  title,
  containerStyle,
  titleStyle,
  isLoading,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`text-primary w-full bg-secondary items-center justify-center h-[72px] mt-7 rounded-2xl  ${containerStyle}`}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      <Text className={`text-white text-lg font-psemibold ${titleStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
