import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, router } from "expo-router";
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

export const isOnboarded = async () => {
  try {
    // check if user has completed onboarding
    const value = await AsyncStorage.getItem("onboarding");

    // if user has completed onboarding skip to sign up
    if (value) {
      router.replace("/sign-up" as Href);
    }
  } catch (e) {
    // error reading value
    console.log(e);
  } finally {
    // await AsyncStorage.removeItem("onboarding");
  }
};
