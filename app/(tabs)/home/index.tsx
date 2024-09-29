import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Href, Link, router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { ApiRequest } from "@/libs/backend";
import Spinner from "@/components/Spinner";
import { Statistics, User } from "@/context/GlobalContent";
import CustomText from "@/components/CustomText";
import CustomView from "@/components/CustomView";

type ListHeaderComponentProps = {
  checkouts: any[];
  sales: number;
  statistics: Statistics | null;
  user: User | null;
};

const ListHeaderComponent = ({
  checkouts,
  sales,
  user,
  statistics,
}: ListHeaderComponentProps) => {
  const theme = useThemeColor();

  return (
    <>
      <CustomView className="flex px-3 py-2">
        {/* haeder */}
        <CustomView className="flex justify-between flex-row items-center mb-7">
          <CustomView className="flex flex-row items-center gap-x-2">
            <TouchableOpacity>
              <Image
                source={{ uri: user?.image }}
                className="w-[50px] h-[50px] rounded-full border-2 border-secondary"
                contentFit="cover"
              />
            </TouchableOpacity>
            <CustomView className="">
              <CustomText
                className={`text-gray-400 font-psemibold text-xs ${
                  theme?.theme === "dark" ? "text-gray-100" : "text-gray-600"
                }`}
              >
                Welcome back,
              </CustomText>
              <CustomText
                className={`text-lg font-psemibold ${
                  theme?.theme === "dark" ? "text-gray-100" : "text-black-100"
                }`}
                numberOfLines={1}
              >
                {user?.name}
              </CustomText>
            </CustomView>
          </CustomView>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.push("home/checkout" as Href)}
          >
            <FontAwesome
              name="shopping-basket"
              size={30}
              color={theme?.colors.text}
            />
          </TouchableOpacity>
        </CustomView>

        {/* salse */}
        <CustomView className="mb-2">
          <CustomText
            className={`font-psemibold text-sm  mb-3`}
            lightClassName="text-gray-400"
            darkClassName="text-gray-100"
          >
            Store Sales
          </CustomText>
          <TouchableOpacity
            activeOpacity={0.9}
            className={`  rounded-lg p-3 flex h-[120px] space-y-1 justify-center shadow-lg ${
              theme?.theme === "dark" ? " bg-black-200" : " bg-secondary"
            }`}
          >
            <CustomText
              className={`font-psemibold text-sm`}
              lightClassName="text-white"
              darkClassName="text-gray-100"
            >
              Todays Sales
            </CustomText>
            <CustomText
              className={`font-psemibold text-3xl`}
              lightClassName="text-white"
              darkClassName="text-gray-100"
            >
              ₵{parseFloat(sales.toString()).toFixed(2)}
            </CustomText>
          </TouchableOpacity>
        </CustomView>

        {/* links */}
        <CustomView className="mb-10 flex-row gap-x-2">
          <TouchableOpacity
            className={`rounded-lg p-3 flex h-[150px] space-y-1 justify-center items-center shadow-lg flex-1 ${
              theme?.theme === "dark"
                ? "text-gray-100 bg-black-200"
                : "text-white  bg-purple-500"
            }`}
          >
            <CustomView>
              <CustomText
                className={`font-pregular text-xs`}
                darkClassName="text-gray-100"
                lightClassName="text-white"
              >
                Products
              </CustomText>
              <CustomText
                className={`font-psemibold text-3xl text-center`}
                darkClassName="text-gray-100"
                lightClassName="text-white"
              >
                {statistics?.counts?.countProducts || 0}
              </CustomText>
            </CustomView>
          </TouchableOpacity>
          <TouchableOpacity
            className={`rounded-lg p-3 flex h-[150px] space-y-1 justify-center items-center shadow-lg flex-1 ${
              theme?.theme === "dark"
                ? "text-gray-100 bg-black-200"
                : "text-primary-dark  bg-primary-dark"
            }`}
          >
            <CustomView className="flex items-center">
              <CustomText
                className={`font-pregular text-xs`}
                lightClassName="text-white"
                darkClassName="text-gray-100"
              >
                Checkouts
              </CustomText>
              <FontAwesome name="shopping-basket" size={34} color="white" />
            </CustomView>
          </TouchableOpacity>
        </CustomView>
      </CustomView>

      <CustomView
        className={`bg-white  flex-1 flex px-3 py-5 rounded-t-3xl shadow-2xl mb-7 min-h-[400px] h-full ${
          theme?.theme === "dark" ? " bg-black-200" : " bg-white"
        }`}
      >
        <CustomView className="flex-row justify-between items-center flex">
          <CustomText
            className={`font-psemibold text-sm  ${
              theme?.theme === "dark" ? " text-gray-100" : " text-primary-dark"
            }`}
          >
            Recent sales
          </CustomText>
          <TouchableOpacity className="justify-center items-center flex-row">
            <AntDesign name="arrowright" size={30} color={theme?.colors.text} />
          </TouchableOpacity>
        </CustomView>

        <CustomView className="mt-7">
          <FlatList
            data={checkouts ?? []}
            renderItem={() => (
              <TouchableOpacity
                activeOpacity={0.6}
                className={`bg-white rounded-lg p-3 flex h-[90px] space-y-1  shadow-lg mb-2 justify-center ${
                  theme?.theme === "dark" ? " bg-black" : " bg-white"
                }`}
              >
                <CustomView className="flex-row items-center gap-x-2">
                  <Image
                    source={{ uri: "https://picsum.photos/100/100" }}
                    className="w-[50px] h-[50px] rounded-full border-2 border-secondary"
                    contentFit="cover"
                  />
                  <CustomView className="">
                    <CustomText
                      className="text-gray-400 font-psemibold text-xs"
                      numberOfLines={1}
                    >
                      Product name
                    </CustomText>
                    <CustomText
                      className="text-lg font-psemibold text-black-100 dark:text-white"
                      numberOfLines={1}
                    >
                      $100
                    </CustomText>
                  </CustomView>
                </CustomView>
              </TouchableOpacity>
            )}
            ListFooterComponent={() =>
              checkouts.length > 0 ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => router.push("home/sales" as Href)}
                  className={`bg-primary dark:bg-primary-dark rounded-lg p-3 flex h-[60px] space-y-1 justify-center items-center shadow-lg mt-5 ${
                    theme?.theme === "dark" ? " bg-black" : " bg-white"
                  }`}
                >
                  <CustomText
                    className={`font-psemibold text-sm  ${
                      theme?.theme === "dark"
                        ? " text-gray-100"
                        : " text-primary-dark"
                    }`}
                  >
                    CustomView all sales
                  </CustomText>
                </TouchableOpacity>
              ) : (
                <CustomView>
                  <CustomText
                    className={`font-psemibold text-sm  text-center ${
                      theme?.theme === "dark"
                        ? " text-gray-100"
                        : " text-primary-dark"
                    }`}
                  >
                    No sales found
                  </CustomText>
                </CustomView>
              )
            }
          />
        </CustomView>
      </CustomView>
    </>
  );
};

const Home = () => {
  const theme = useThemeColor();
  const { user, statistics, fetchStatistics } = useGlobalContext();
  const [homeLoading, setHomeLoading] = useState(true);
  const [checkouts, setCheckouts] = useState([]);
  const [sales, setSales] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!user) return;

    setHomeLoading(true);
    fetchData().finally(() => setHomeLoading(false));
  }, []);

  const fetchData = useCallback(async () => {
    return Promise.all([
      ApiRequest("checkouts?limit=6"),
      ApiRequest("checkouts/statistics"),
      fetchStatistics(),
    ]).then(([checkoutsResult, salesResult]) => {
      setCheckouts(checkoutsResult);
      setSales(salesResult?.grandTotal ?? 0);
    });
  }, []);

  if (homeLoading) return <Spinner />;

  return (
    <SafeAreaView
      className={`flex-1 ${
        theme?.theme === "dark" ? "bg-black" : "bg-primary"
      }`}
    >
      <FlatList
        data={[]}
        ListHeaderComponent={
          <ListHeaderComponent
            checkouts={checkouts}
            sales={sales}
            user={user}
            statistics={statistics}
          />
        }
        renderItem={() => null}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              fetchData().finally(() => setRefreshing(false));
            }}
            tintColor={theme?.colors.secondarytheme.color}
            titleColor={theme?.colors.secondarytheme.color}
          />
        }
        indicatorStyle="white"
      />
    </SafeAreaView>
  );
};

export default Home;
