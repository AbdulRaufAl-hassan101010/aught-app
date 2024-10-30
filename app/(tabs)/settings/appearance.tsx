import { View, Text, FlatList, SafeAreaView, Switch } from "react-native";
import React, { useEffect } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomView from "@/components/CustomView";
import Header from "@/components/Header";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomText from "@/components/CustomText";

const ListHeaderComponent = () => {
  const theme = useThemeColor();

  return (
    <>
      <CustomView className="flex px-3 py-2 ">
        <Header
          leftIcon={
            <AntDesign name="left" size={25} color={theme?.colors.tint} />
          }
          leftIconPress={() => router.back()}
          title="Appearance"
        />

        <CustomView
          globalClassName={`px-3 py-4 flex flex-row justify-between items-center   rounded-xl mt-5`}
          darkClassName="bg-black-200"
          lightClassName="bg-white text-gray-100 shadow-sm border-2 border-gray-200"
        >
          <CustomText
            className={`font-pmedium  ${
              theme?.theme === "dark" ? "text-gray-100" : "text-primary-dark"
            }`}
          >
            Dark mode
          </CustomText>
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
        </CustomView>
      </CustomView>
    </>
  );
};

const Appearance = () => {
  const theme = useThemeColor();
  return (
    <CustomSafeAreaView
      className={`flex-1 ${
        theme?.theme === "dark" ? "bg-primary-dark" : "bg-primary"
      }`}
    >
      <FlatList
        data={[]}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={() => null}
      />
    </CustomSafeAreaView>
  );
};

export default Appearance;
