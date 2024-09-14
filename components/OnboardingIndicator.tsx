import { View } from "react-native";

const OnboardingScreenIndicator = ({
  numOfScreens,
  currentScreen,
}: OnboardingScreenIndicatorProps) => {
  // create an array of indicators
  const indicators = Array.from({ length: numOfScreens }, (_, i) => i);

  return (
    <View className="flex flex-row justify-center items-center mt-7 transition-all">
      {indicators.map((_, index) => (
        <View
          key={index}
          className={`flex-1 h-1.5 rounded-full mx-2 ${
            currentScreen === index + 1 ? "bg-secondary" : "bg-gray-300"
          }`}
        ></View>
      ))}
    </View>
  );
};
export default OnboardingScreenIndicator;
