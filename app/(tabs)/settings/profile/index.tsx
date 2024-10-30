import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomText from "@/components/CustomText";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomTouchableOpacity from "@/components/CustomTouchableOpacity";
import { Image } from "react-native";
import { router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import CustomView from "@/components/CustomView";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";

const Profile = () => {
  const theme = useThemeColor();
  const { user } = useGlobalContext();

  return (
    <CustomSafeAreaView
      globalClassName="flex flex-1 px-3"
      lightClassName="bg-primary"
      darkClassName="bg-primary-dark"
    >
      {/* header */}
      <Header
        leftIcon={
          <AntDesign name="left" size={25} color={theme?.colors.tint} />
        }
        leftIconPress={() => router.back()}
        title="My Profile"
      />

      {/* top info */}
      <CustomView globalClassName={`flex flex-row gap-x-2 mt-5 items-center`}>
        <CustomTouchableOpacity
          globalClassName={`w-16 h-16 rounded-2 rounded-full border-2 border-secondary overflow-hidden`}
        >
          <Image source={{ uri: user?.image }} className="w-full h-full" />
        </CustomTouchableOpacity>
        <CustomView>
          <CustomText globalClassName="font-pregular text-xs ">
            Welcome
          </CustomText>
          <CustomText globalClassName="font-psemibold text-lg">
            {user?.name}
          </CustomText>
        </CustomView>
      </CustomView>

      {/* upgrade btn */}
      <CustomButton
        title={"Upgrade Account"}
        leftIcon={<MaterialIcons name="upgrade" size={30} color={"#fff"} />}
      />

      {/* links */}
      <CustomText globalClassName={"mt-10 text-xs font-psemibold"}>
        Account
      </CustomText>

      <CustomTouchableOpacity
        globalClassName={`flex flex-row mt-1 items-center justify-between`}
      >
        <CustomView globalClassName={`flex flex-row gap-x-3 items-center`}>
          <MaterialIcons name="key" size={40} color={theme?.colors.icon} />
          <CustomText globalClassName="font-psemibold">
            Change password
          </CustomText>
        </CustomView>
        <AntDesign name="right" size={24} color={theme?.colors.icon} />
      </CustomTouchableOpacity>
      <CustomTouchableOpacity
        globalClassName={`flex flex-row mt-5 items-center justify-between`}
      >
        <CustomView globalClassName={`flex flex-row gap-x-3 items-center`}>
          <MaterialIcons name="mail" size={40} color={theme?.colors.icon} />
          <CustomText globalClassName="font-psemibold">Change email</CustomText>
        </CustomView>
        <AntDesign name="right" size={24} color={theme?.colors.icon} />
      </CustomTouchableOpacity>
    </CustomSafeAreaView>
  );
};

export default Profile;
