import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link } from "expo-router";

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
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="w-full h-full px-4">
        <KeyboardAvoidingView behavior="position" className="flex-1">
          <Text className="text-white mt-7 font-psemibold text-3xl text-wrap">
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

          <CustomButton title="Sign In" containerStyle="mt-10" />

          <Text className="text-gray-100 mt-7 text-center font-pregular text-md">
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
