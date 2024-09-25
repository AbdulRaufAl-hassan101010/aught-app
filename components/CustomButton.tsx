import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { useThemeColor } from "@/hooks/useThemeColor";

type CustomButtonProps = {
  title: string;
  containerStyle?: string;
  titleStyle?: string;
  loading?: boolean;
} & TouchableOpacityProps;

const CustomButton = ({
  title,
  containerStyle,
  titleStyle,
  loading,
  ...props
}: CustomButtonProps) => {
  const theme = useThemeColor();

  return (
    <TouchableOpacity
      className={`text-primary w-full bg-secondary items-center justify-center h-[72px] mt-7 rounded-2xl  ${containerStyle}`}
      activeOpacity={0.7}
      //  disble btn  when loading
      disabled={loading}
      {...props}
    >
      <Text className={`text-white text-lg font-psemibold ${titleStyle}`}>
        {loading ? (
          <ActivityIndicator size={"small"} color={theme.text} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
