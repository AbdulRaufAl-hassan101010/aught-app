import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Href, Link, router } from "expo-router";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useTheme } from "@/context/ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomView from "@/components/CustomView";

const signIn = () => {
  const { signIn, loading } = useGlobalContext();
  const theme = useTheme();

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
    <SafeAreaView
      className={`flex flex-1 ${
        theme.theme === "dark" ? "bg-primary-dark" : "bg-primary"
      }`}
    >
      <ScrollView className="w-full h-full px-4">
        <KeyboardAvoidingView behavior="position" className="flex-1">
          <CustomView globalClassName="flex flex-row gap-x-1 items-center mt-7">
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={32} color={theme.colors.tint} />
            </TouchableOpacity>
            <Text
              className={`font-psemibold text-3xl text-wrap ${
                theme?.theme === "dark" ? "text-white" : "text-primary-dark"
              }`}
            >
              Sign In
            </Text>
          </CustomView>

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
            secureTextEntry={true}
          />

          <CustomButton
            title="Sign In"
            containerStyle="mt-10"
            loading={loading}
            onPress={() => signIn(form)}
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
