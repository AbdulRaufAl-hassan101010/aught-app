import { useGlobalContext } from "@/hooks/useGlobalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export const skipOnboardingHandler = async () => {
  // save in local storage

  try {
    await AsyncStorage.setItem("onboarding", "true");
  } catch (e) {
    // saving error
    console.log(e);
  }

  router.replace("/sign-up" as Href);
};
