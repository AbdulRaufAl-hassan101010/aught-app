import { icons, images } from "@/constants";
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
  label: string;
} & TextInputProps;

const FormField = ({ label, ...props }: FormFieldProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  return (
    <View className={`mt-7 text-white w-full`}>
      <Text className="text-gray-100 font-pregular text-lg">{label}</Text>
      <View className="flex-row items-center bg-black-100 mt-1 rounded-xl h-[62px] w-full justify-between px-3 relative">
        <TextInput
          {...props}
          className={`font-pmedium w-full m-h-full  text-gray-100 text-md`}
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
