import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Href, Link, router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";

const ListHeaderComponent = () => {
  const theme = useThemeColor();

  return (
    <>
      <View className="flex px-3 py-2">
        {/* haeder */}
        <View className="flex justify-between flex-row items-center mb-7">
          <View className="flex flex-row items-center gap-x-2">
            <TouchableOpacity>
              <Image
                source={{ uri: "https://picsum.photos/100/100" }}
                className="w-[50px] h-[50px] rounded-full border-2 border-secondary"
                contentFit="cover"
              />
            </TouchableOpacity>
            <View className="">
              <Text className="text-gray-400 font-psemibold text-xs">
                Welcome back,
              </Text>
              <Text
                className="text-lg font-psemibold text-black-100 dark:text-white"
                numberOfLines={1}
              >
                Emma's Ent...
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.push("home/checkout" as Href)}
          >
            <FontAwesome name="shopping-basket" size={30} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* salse */}
        <View className="mb-2">
          <Text
            className={`font-psemibold text-sm text-gray-400 dark:text-gray-100 mb-3`}
          >
            Store Sales
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            className="bg-secondary dark:bg-black-200  rounded-lg p-3 flex h-[120px] space-y-1 justify-center shadow-lg"
          >
            <Text
              className={`font-psemibold text-base text-white dark:text-gray-100 `}
            >
              Weeekly
            </Text>
            <Text
              className={`font-psemibold text-3xl text-white dark:text-gray-100`}
            >
              $1,000
            </Text>
          </TouchableOpacity>
        </View>

        {/* links */}
        <View className="mb-10 flex-row gap-x-2">
          <TouchableOpacity className=" bg-purple-500 dark:bg-black-200  rounded-lg p-3 flex h-[90px] space-y-1 justify-center items-center shadow-lg flex-1">
            <View>
              <Text
                className={`font-pregular text-xs text-white dark:text-gray-100`}
              >
                Products
              </Text>
              <Text
                className={`font-psemibold text-3xl text-white dark:text-gray-100 text-center`}
              >
                10
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-primary-dark dark:bg-black-200  rounded-lg p-3 flex h-[90px] space-y-1 justify-center items-center shadow-lg flex-1">
            <View className="flex items-center">
              <Text
                className={`font-pregular text-xs text-white dark:text-gray-100`}
              >
                Checkouts
              </Text>
              <FontAwesome name="shopping-basket" size={34} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white dark:bg-primary-dark flex-1 flex px-3 py-5 rounded-t-3xl shadow-2xl mb-7">
        <View className="flex-row justify-between items-center flex">
          <Text className="font-psemibold text-sm dark:text-gray-100">
            Recent sales
          </Text>
          <TouchableOpacity className="justify-center items-center flex-row">
            <AntDesign name="arrowright" size={30} />
          </TouchableOpacity>
        </View>

        <View className="mt-7">
          <FlatList
            data={[
              {
                id: "1",
                name: "Product name",
                price: "$100",
                image: "https://picsum.photos/100/100",
              },
              {
                id: "2",
                name: "Product name",
                price: "$100",
                image: "https://picsum.photos/100/100",
              },
              {
                id: "3",
                name: "Product name",
                price: "$100",
                image: "https://picsum.photos/100/100",
              },
            ]}
            renderItem={() => (
              <TouchableOpacity
                activeOpacity={0.6}
                className="bg-white dark:bg-black-200 rounded-lg p-3 flex h-[90px] space-y-1  shadow-lg mb-2"
              >
                <View className="flex-row items-center gap-x-2">
                  <Image
                    source={{ uri: "https://picsum.photos/100/100" }}
                    className="w-[50px] h-[50px] rounded-full border-2 border-secondary"
                    contentFit="cover"
                  />
                  <View className="">
                    <Text
                      className="text-gray-400 font-psemibold text-xs"
                      numberOfLines={1}
                    >
                      Product name
                    </Text>
                    <Text
                      className="text-lg font-psemibold text-black-100 dark:text-white"
                      numberOfLines={1}
                    >
                      $100
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ListFooterComponent={() => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => router.push("home/sales" as Href)}
                className="bg-primary dark:bg-primary-dark rounded-lg p-3 flex h-[50px] space-y-1 justify-center items-center shadow-lg"
              >
                <Text
                  className={`font-psemibold text-sm text- dark:text-gray-100`}
                >
                  View all sales
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
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
