import { icons, images } from "@/constants";
import React, { useState } from "react";
import {
  TextInputProps,
  View,
  TextInput,
  Text,
  Image,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";

type FormFieldProps = {
  label: string;
} & TextInputProps;

const FormField = ({ label, ...props }: FormFieldProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const theme = useColorScheme();

  console.log(theme);

  return (
    <View className={`mt-7 w-full`}>
      <Text
        className={`font-pregular text-lg ${
          theme === "dark" ? "text-gray-100" : "text-gray-400"
        }`}
      >
        {label}
      </Text>
      <View className="flex-row items-center  bg-gray-100 mt-1 rounded-xl h-[62px] w-full justify-between px-3 relative focus:border-secondary focus:border-2 dark:bg-black-100">
        <TextInput
          {...props}
          className={`font-pmedium w-full m-h-full dark:text-gray-100 text-primary-dark text-base `}
          // placeholderTextColor={"#161622"}
          secureTextEntry={props.secureTextEntry && passwordVisibility}
        />

        {props.secureTextEntry && (
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
