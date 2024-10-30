import { View, Text } from "react-native";
import React from "react";
import CustomTouchableOpacity from "./CustomTouchableOpacity";
import CustomView from "./CustomView";
import CustomText from "./CustomText";

type HeaderProps = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
};

const Header = ({
  title,
  leftIcon,
  rightIcon,
  leftIconPress,
  rightIconPress,
}: HeaderProps) => {
  return (
    <CustomView className="flex flex-row justify-between items-center">
      <View className="flex flex-row items-center">
        {leftIcon && (
          <CustomTouchableOpacity className="mr-2" onPress={leftIconPress}>
            {leftIcon}
          </CustomTouchableOpacity>
        )}
        <CustomText className="text-2xl font-psemibold">{title}</CustomText>
      </View>
      {rightIcon && (
        <CustomTouchableOpacity onPress={rightIconPress} className="mr-3">
          {rightIcon}
        </CustomTouchableOpacity>
      )}
    </CustomView>
  );
};

export default Header;
