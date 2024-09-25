import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Href, Link, router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const ListHeaderComponent = () => {
  const theme = useThemeColor();
  const { user, signOut } = useGlobalContext();

  return (
    <>
      <View className="flex px-3 py-2 ">
        <View className="sticky top-0">
          <Text className="text-2xl font-psemibold text-primary-dark dark:text-gray-100 mb-5 ">
            Settings
          </Text>
        </View>

        <View className="flex flex-row items-center border-gray-200  bg-white dark:bg-black-200 p-3 py-5 shadow-2xl rounded-lg  ">
          <TouchableOpacity
            onPress={() => router.push("/settings/profile" as Href)}
          >
            <Image
              source={user?.image}
              className="w-16 h-16 rounded-full border-secondary border-2"
            />
          </TouchableOpacity>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-pmedium text-primary-dark dark:text-gray-100">
              {user?.name}
            </Text>
            <Text
              className="text-gray-500 dark:text-gray-100 text-sm"
              numberOfLines={1}
            >
              {user?.email}
            </Text>
          </View>
        </View>

        <View className="flex mt-5 bg-white rounded-lg px-3 shadow-2xl dark:bg-black-200">
          <TouchableOpacity>
            <View className="flex flex-row items-center justify-between  bg-white dark:bg-black-200 rounded-lg pt-5 pb-5 border-b border-b-gray-100 dark:border-b-gra-100">
              <View className="flex flex-row items-center">
                <AntDesign name="user" size={20} color={theme.text} />
                <Text className="text-sm font-psemibold text-primary-dark dark:text-gray-100 ml-3">
                  Account
                </Text>
              </View>

              <AntDesign name="right" size={20} color={theme.text} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-row items-center justify-between  bg-white dark:bg-black-200 rounded-lg pt-5 pb-5 ">
              <View className="flex flex-row items-center">
                <MaterialIcons name="light-mode" size={20} color={theme.text} />
                <Text className="text-sm font-psemibold text-primary-dark dark:text-gray-100 ml-3">
                  Appearance
                </Text>
              </View>

              <AntDesign name="right" size={20} color={theme.text} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={signOut}>
          <Text className="text-center font-pmedium text-sm mt-10 text-secondary dark:text-gray-100">
            Logout <AntDesign name="logout" size={16} color={theme.text} />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Home = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 dark:bg-primary-dark">
      <FlatList
        data={[]}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={() => null}
      />
    </SafeAreaView>
  );
};

export default Home;
