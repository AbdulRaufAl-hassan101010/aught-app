import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

import { skipOnboardingHandler } from "@/libs/utils";
import OnboardingScreenIndicator from "@/components/OnboardingIndicator";
import { useGlobalSearchParams } from "expo-router";

const Onboarding4 = () => {
  const { nextPage } = useGlobalSearchParams();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full h-full flex items-center justify-center px-7">
          <Image
            source={images.reviews}
            resizeMode="contain"
            className="w-[380px] h-[280px] ima"
          />

          <OnboardingScreenIndicator
            currentScreen={parseInt(nextPage as string)}
            numOfScreens={4}
          />

          <Text className="text-white mt-7 font-psemibold text-3xl text-center text-wrap">
            Interact with customers
          </Text>
          <Text className="text-gray-100 mt-3 font-pregular text-sm text-center">
            Interact with your customers and get feedback with leaving the app.
          </Text>

          <CustomButton title="Done" onPress={skipOnboardingHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding4;
