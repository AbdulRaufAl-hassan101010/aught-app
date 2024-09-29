import { FlatList, Image } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomView from "@/components/CustomView";
import CustomText from "@/components/CustomText";
import CustomTouchableOpacity from "@/components/CustomTouchableOpacity";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/context/ThemeContext";
import { Href, router } from "expo-router";

const Auth = () => {
  const theme = useTheme();

  return (
    <CustomSafeAreaView
      globalClassName={"px-2 flex-1 pt-7"}
      lightClassName="bg-primary"
      darkClassName="bg-primary-dark"
    >
      <FlatList
        data={[
          {
            title: "Business Owner",
            key: "business",
            icon: (
              <MaterialIcons
                name="admin-panel-settings"
                size={100}
                color={"#fff"}
              />
            ),
          },
          {
            title: "User",
            key: "user",
            icon: <MaterialIcons name="person" size={100} color={"#fff"} />,
          },
        ]}
        keyExtractor={(item) => item.key}
        numColumns={2}
        ListHeaderComponent={
          <>
            <CustomView>
              <CustomText
                globalClassName="font-psemibold text-3xl"
                lightClassName="text-black"
              >
                Sign In
              </CustomText>
            </CustomView>
            <CustomView>
              <CustomText className="font-pregular mt-2">
                You would like to sign in as?
              </CustomText>
            </CustomView>
          </>
        }
        renderItem={({ item }) => (
          <CustomTouchableOpacity
            activeOpacity={0.8}
            globalClassName=" flex flex-1 justify-center items-center h-[170px] rounded-lg shadow-sm"
            lightClassName="bg-secondary"
            darkClassName="bg-black-200"
            onPress={() => router.push(`sign-in?${item.key}` as Href)}
          >
            {item.icon && item.icon}

            <CustomText
              globalClassName="font-pmedium mt-2 text-center"
              lightClassName="text-white"
            >
              {item.title}
            </CustomText>
          </CustomTouchableOpacity>
        )}
        columnWrapperStyle={{ flex: 1, gap: 10, marginTop: 20 }}
      />
    </CustomSafeAreaView>
  );
};

export default Auth;
