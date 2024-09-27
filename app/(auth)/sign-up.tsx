import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link } from "expo-router";
import { useTheme } from "@/context/ThemeContext";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const signUp = () => {
  const theme = useTheme();
  const { signUp, loading } = useGlobalContext();

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
    <SafeAreaView
      className={`flex flex-1 ${
        theme.theme === "dark" ? "bg-primary-dark" : "bg-primary"
      }`}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
      >
        <ScrollView className="w-full h-full px-4">
          <Text
            className={`mt-7 font-psemibold text-3xl text-wrap ${
              theme?.theme === "dark" ? "text-white" : "text-primary-dark"
            }`}
          >
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

          <CustomButton
            title="Sign Up"
            containerStyle="mt-10"
            loading={loading}
            onPress={signUp.bind(null, {
              businessName: form.name,
              email: form.email,
              password: form.password,
              confirmPassword: form.confirmPassword,
            })}
          />

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
