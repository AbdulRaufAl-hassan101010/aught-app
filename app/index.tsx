import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Href, router } from "expo-router";

import { skipOnboardingHandler } from "@/libs/utils";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import Spinner from "@/components/Spinner";

const Index = () => {
  const { loading, onboarded, user } = useGlobalContext();

  if ((!user && loading) || onboarded) {
    return <Spinner />;
  }

  return (
    <SafeAreaView className="bg-primary dark:bg-primary-dark h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full h-full flex items-center justify-center px-7">
          <Image
            source={images.onboarding1}
            resizeMode="contain"
            className="w-[380px] h-[280px]"
          />

          <Text className="text-white mt-7 font-psemibold text-3xl text-center text-wrap">
            Let's get started.
          </Text>
          <Text className="text-gray-100 mt-3 font-pregular text-sm text-center">
            Boost your store audience and increase your sales with Aught.
          </Text>

          <CustomButton
            title="Get Started"
            onPress={() => router.push(`/onboarding1?nextPage=1` as Href)}
          />

          <TouchableWithoutFeedback
            onPress={skipOnboardingHandler}
            className="mt-5"
          >
            <Text className="text-gray-100 mt-3 font-psemibold text-sm">
              Skip
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
