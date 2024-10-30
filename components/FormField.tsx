import { icons, images } from "@/constants";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import {
  TextInputProps,
  View,
  TextInput,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

type FormFieldProps = {
  label?: string;
  containerStyle?: string;
  secureTextEntry?: boolean;
} & TextInputProps;

const FormField = ({
  label,
  containerStyle = " ",
  secureTextEntry,
  ...props
}: FormFieldProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const theme = useThemeColor();

  return (
    <View className={`mt-7 flex-1 ${containerStyle}`}>
      {/* label  */}
      {label && (
        <Text
          className={`font-pregular text-lg  text-gray-400 dark:text-gray-100
        `}
        >
          {label}
        </Text>
      )}

      <View
        className={`flex-row items-center  rounded-xl h-[62px]  flex justify-between px-3 relative focus:border-secondary focus:border-2  ${
          theme?.theme === "dark" ? "bg-black-100 text-gray-100" : "bg-gray-100"
        }`}
      >
        <TextInput
          className={`font-pmedium w-full h-full text-base mt-1 ${
            theme?.theme === "dark" ? "text-gray-100" : "text-primary-dark"
          } ${props.className}`}
          secureTextEntry={secureTextEntry && passwordVisibility}
          placeholderTextColor={theme?.colors.text}
          {...props}
        />

        {secureTextEntry && (
          <TouchableWithoutFeedback
            onPress={() => setPasswordVisibility((state) => !state)}
          >
            <Image
              source={passwordVisibility ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-[42px] h-[42px] z-50 absolute right-2"
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default FormField;
