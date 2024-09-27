import { View, Text, Platform, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useTheme } from "@/context/ThemeContext";
import CustomText from "@/components/CustomText";
import CustomScrollView from "@/components/CustomScrollView";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomView from "@/components/CustomView";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";

const VerifyAccount = () => {
  const { user, signOut, loading } = useGlobalContext();
  const theme = useTheme();

  return (
    <CustomScrollView
      globalClassName="px-3 flex-1 flex"
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        marginBottom: 40,
      }}
      darkClassName="bg-primary-dark"
      lightClassName="bg-primary"
    >
      <CustomSafeAreaView globalClassName="flex flex-1 items-center justify-center w-full">
        <CustomView>
          <AntDesign
            name="checkcircle"
            size={60}
            color={theme.colors.text}
            style={{ alignSelf: "center" }}
          />
        </CustomView>
        <CustomText
          globalClassName="text-2xl font-pmedium text-center mt-7"
          lightClassName="text-black font-psemibold"
        >
          Verify your email.
        </CustomText>
        <CustomText
          globalClassName="text-sm font-pmedium text-center mt-2"
          darkClassName="text-gray-500 mt-2"
        >
          We have sent a verification email to{" "}
          <CustomText
            globalClassName={"font-psemibold"}
            lightClassName="text-secondary font-pmedium"
          >
            {user?.email}
          </CustomText>
          . Check your email for the link
        </CustomText>

        <CustomView className="flex flex-row items-center ">
          <FormField returnKeyType="next" keyboardType="number-pad" />
          <FormField
            containerStyle="ml-2"
            keyboardType="number-pad"
            returnKeyType="next"
          />
          <FormField
            containerStyle="ml-2"
            returnKeyType="next"
            keyboardType="number-pad"
          />
          <FormField
            containerStyle="ml-2"
            returnKeyType="next"
            keyboardType="number-pad"
          />
          <FormField
            containerStyle="ml-2"
            returnKeyType="next"
            keyboardType="number-pad"
          />
          <FormField
            containerStyle="ml-2"
            returnKeyType="next"
            keyboardType="number-pad"
          />
        </CustomView>

        <CustomButton title="Resend Email" containerStyle="mt-7" />
        <CustomButton
          title="Go Back"
          leftIcon={
            <AntDesign name="arrowleft" size={25} color={theme.colors.text} />
          }
          containerStyle="mt-2 bg-transparent"
          titleStyle={
            theme.theme === "dark" ? "text-white" : "text-primary-dark"
          }
          loading={loading}
          onPress={signOut}
        />
      </CustomSafeAreaView>
    </CustomScrollView>
  );
};

export default VerifyAccount;
