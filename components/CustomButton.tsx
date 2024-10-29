import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { useThemeColor } from "@/hooks/useThemeColor";
import CustomView from "./CustomView";

type CustomButtonProps = {
  title: string;
  containerStyle?: string;
  titleStyle?: string;
  loading?: boolean;
  leftIcon?: React.ReactNode;
} & TouchableOpacityProps;

const CustomButton = ({
  title,
  containerStyle,
  titleStyle,
  loading,
  leftIcon,
  ...props
}: CustomButtonProps) => {
  const theme = useThemeColor();

  return (
    <TouchableOpacity
      className={`w-full bg-secondary  text-primary px-5 flex-row items-center justify-center h-[62px] mt-7 rounded-lg  outline-none border-none ${containerStyle}`}
      activeOpacity={0.7}
      //  disble btn  when loading
      disabled={loading}
      {...props}
    >
      {leftIcon && <CustomView className="mr-1">{leftIcon}</CustomView>}
      <Text className={`text-white text-lg font-pmedium ${titleStyle}`}>
        {loading ? (
          <ActivityIndicator size={"large"} color={theme?.colors.text} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
