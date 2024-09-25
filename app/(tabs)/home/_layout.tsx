import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import Spinner from "@/components/Spinner";

const HomeLayout = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default HomeLayout;
