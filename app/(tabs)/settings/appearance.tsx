import { View, Text, FlatList, SafeAreaView, Switch } from "react-native";
import React, { useEffect } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

const ListHeaderComponent = () => {
  const theme = useThemeColor();

  return (
    <>
      <View className="flex px-3 py-2 ">
        <View className="sticky top-0">
          <Text
            className={`text-2xl font-psemibold mb-5 ${
              theme?.theme === "dark" ? "text-gray-100" : "text-primary-dark"
            }`}
          >
            Appearance
          </Text>
        </View>

        <View
          className={`px-3 py-4 flex flex-row justify-between items-center shadow-2xl rounded-xl ${
            theme?.theme === "dark" ? "bg-black-200 " : "bg-white text-gray-100"
          }`}
        >
          <Text
            className={`font-pmedium  ${
              theme?.theme === "dark" ? "text-gray-100" : "text-primary-dark"
            }`}
          >
            Dark mode
          </Text>
          <Switch
            ios_backgroundColor={theme?.colors.background}
            trackColor={{
              false: theme?.colors.background,
              true: theme?.colors.secondarytheme.color,
            }}
            value={theme?.theme === "dark" ? true : false}
            onValueChange={(value) =>
              theme?.saveTheme(value ? "dark" : "light")
            }
          />
        </View>
      </View>
    </>
  );
};

const Appearance = () => {
  const theme = useThemeColor();
  return (
    <SafeAreaView
      className={`flex-1 ${
        theme?.theme === "dark" ? "bg-primary-dark" : "bg-primary"
      }`}
    >
      <FlatList
        data={[]}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={() => null}
      />
    </SafeAreaView>
  );
};

export default Appearance;
