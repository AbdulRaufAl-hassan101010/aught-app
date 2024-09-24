import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link, router } from "expo-router";

const signIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const changeTextHandler = (key: string, value: string) => {
    setForm((state) => ({
      ...state,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView className=" bg-primary  dark:bg-primary-dark h-full">
      <ScrollView className="w-full h-full px-4">
        <KeyboardAvoidingView behavior="position" className="flex-1">
          <Text className=" text-primary-dark mt-7 font-psemibold text-3xl text-wrap dark:text-white">
            Sign In
          </Text>

          <FormField
            label={"username"}
            onChangeText={changeTextHandler.bind(null, "username")}
            value={form.username}
            keyboardType="email-address"
          />

          <FormField
            label={"Password"}
            onChangeText={changeTextHandler.bind(null, "password")}
            value={form.password}
            secureTextEntry
            keyboardType="visible-password"
          />

          <CustomButton
            title="Sign In"
            containerStyle="mt-10"
            onPress={() => router.replace("/home" as Href)}
          />

          <Text className="dark:text-gray-100 text-gray-400 mt-7 text-center font-pregular text-base">
            Don't have an account?{" "}
            <Link
              href={`/sign-up` as Href}
              className="text-secondary font-psemibold"
            >
              Sign Up
            </Link>
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
