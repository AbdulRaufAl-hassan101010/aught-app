import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Href, router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomTouchableOpacity from "@/components/CustomTouchableOpacity";

const ListHeaderComponent = () => {
  const theme = useThemeColor();
  const { user, signOut } = useGlobalContext();

  // console.log(user?.image);

  return (
    <>
      <View className="flex px-3 py-2">
        <View className="sticky top-0">
          <Text
            className={`text-2xl font-psemibold mb-5 ${
              theme?.theme === "dark" ? "text-gray-100" : "text-primary-dark"
            }`}
          >
            Settings
          </Text>
        </View>

        <View
          className={`flex flex-row items-center border-gray-200 p-3 py-5 shadow-2xl rounded-lg ${
            theme?.theme === "dark" ? "bg-black-200 " : "bg-white text-gray-100"
          }`}
        >
          <CustomTouchableOpacity
            onPress={() => router.push("/settings/profile" as Href)}
            globalClassName={`w-16 h-16 rounded-full border-secondary border-2 overflow-hidden`}
          >
            <Image source={user?.image} className="w-full h-full" />
          </CustomTouchableOpacity>

          <View className="flex-1 ml-3">
            <Text
              className={`text-lg font-pmedium ${
                theme?.theme === "dark" ? " text-gray-100" : "text-primary-dark"
              }`}
            >
              {user?.name}
            </Text>
            <Text
              className={`${
                theme?.theme === "dark" ? "text-gray-100" : "text-gray-600"
              }`}
              numberOfLines={1}
            >
              {user?.email}
            </Text>
          </View>
        </View>

        <View
          className={`flex mt-5 rounded-lg px-3 shadow-2xl ${
            theme?.theme === "dark" ? "bg-black-200" : "bg-white"
          }`}
        >
          <CustomTouchableOpacity
            onPress={() => router.push("/settings/profile" as Href)}
          >
            <View className="flex flex-row items-center justify-between rounded-lg py-5 border-b-[0.35px] border-b-slate-300 dark:border-b-gra-100">
              <View className="flex flex-row items-center">
                <AntDesign name="user" size={20} color={theme?.colors?.text} />
                <Text
                  className={`text-sm font-psemibold ml-3 ${
                    theme?.theme === "dark"
                      ? "text-gray-100"
                      : "text-primary-dark"
                  }`}
                >
                  Account
                </Text>
              </View>

              <AntDesign name="right" size={20} color={theme?.colors?.text} />
            </View>
          </CustomTouchableOpacity>
          <CustomTouchableOpacity
            onPress={() => router.push("/settings/appearance" as Href)}
          >
            <View className="flex flex-row items-center justify-between  rounded-lg pt-5 pb-5 ">
              <View className="flex flex-row items-center">
                <MaterialIcons
                  name="light-mode"
                  size={20}
                  color={theme?.colors?.text}
                />
                <Text
                  className={`text-sm font-psemibold ml-3 ${
                    theme?.theme === "dark"
                      ? "text-gray-100"
                      : "text-primary-dark"
                  }`}
                >
                  Appearance
                </Text>
              </View>

              <AntDesign name="right" size={20} color={theme?.colors?.text} />
            </View>
          </CustomTouchableOpacity>
        </View>

        <CustomTouchableOpacity onPress={signOut}>
          <Text className="text-center font-pmedium text-sm mt-10 text-secondary dark:text-gray-100">
            Logout{" "}
            <AntDesign name="logout" size={16} color={theme?.colors?.text} />
          </Text>
        </CustomTouchableOpacity>
      </View>
    </>
  );
};

const Home = () => {
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

export default Home;
