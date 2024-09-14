import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Href, router, useGlobalSearchParams } from "expo-router";

import { skipOnboardingHandler } from "@/libs/utils";
import OnboardingScreenIndicator from "@/components/OnboardingIndicator";

const Onboarding2 = () => {
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
            source={images.audience}
            resizeMode="contain"
            className="w-[380px] h-[280px] ima"
          />

          <OnboardingScreenIndicator
            currentScreen={parseInt(nextPage as string)}
            numOfScreens={4}
          />

          <Text className="text-white mt-7 font-psemibold text-3xl text-center text-wrap">
            More Customers
          </Text>
          <Text className="text-gray-100 mt-3 font-pregular text-sm text-center">
            Reach more customers with our platform to increase your sales.
          </Text>

          <CustomButton
            title="Next"
            onPress={() => router.push(`/onboarding3?nextPage=3` as Href)}
          />

          <TouchableWithoutFeedback
            onPress={skipOnboardingHandler}
            className="mt-5 "
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

export default Onboarding2;
