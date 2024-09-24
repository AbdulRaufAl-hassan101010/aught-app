import { Text, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link } from "expo-router";

const signUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeTextHandler = (key: string, value: string) => {
    setForm((state) => ({
      ...state,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView className="bg-primary h-full dark:bg-primary-dark">
      <KeyboardAvoidingView
        behavior={Platform.OS ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
      >
        <ScrollView className="w-full h-full px-4">
          <Text className="mt-7 font-psemibold text-3xl text-wrap text-primary-dark dark:text-white">
            Sign Up
          </Text>
          <FormField
            label={"Business Name*"}
            onChangeText={changeTextHandler.bind(null, "name")}
            value={form.name}
          />

          <FormField
            label={"Email"}
            onChangeText={changeTextHandler.bind(null, "email")}
            value={form.email}
            keyboardType="email-address"
          />

          <FormField
            label={"Password"}
            onChangeText={changeTextHandler.bind(null, "password")}
            value={form.password}
            secureTextEntry
            keyboardType="visible-password"
          />

          <FormField
            label={"Confirm Password"}
            onChangeText={changeTextHandler.bind(null, "confirmPassword")}
            value={form.confirmPassword}
            secureTextEntry
            keyboardType="visible-password"
          />

          <CustomButton title="Sign Up" containerStyle="mt-10" />

          <Text className="text-gray-100 mt-7 text-center font-pregular text-md text-base">
            Already have an account?{" "}
            <Link
              href={`/sign-in` as Href}
              className="text-secondary font-psemibold"
            >
              Sign In
            </Link>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signUp;
