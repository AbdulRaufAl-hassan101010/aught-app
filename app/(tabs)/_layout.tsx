import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/hooks/useThemeColor";

const TabsLayout = () => {
  const theme = useThemeColor();

  type TabIconProps = {
    focused: boolean;
    icon: any;
    color: string;
    name: string;
  };

  const TabIcon = ({ focused, icon, color, name }: TabIconProps) => {
    return (
      <View className="items-center justify-center flex flex-1">
        {icon}
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color }}
          numberOfLines={1}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme?.colors?.background,
          borderTopWidth: 1,
          borderTopColor: theme?.colors?.background,
          height: 100,
          width: "100%",
          margin: 0,
          padding: 0,
        },
        tabBarInactiveTintColor: theme?.colors?.tint,
        tabBarActiveTintColor: theme?.colors?.secondarytheme.color,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<AntDesign name="home" size={24} color={color} />}
              color={color}
              focused={focused}
              name={"Home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<AntDesign name="plussquareo" size={24} color={color} />}
              color={color}
              focused={focused}
              name={"Products"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<AntDesign name="search1" size={24} color={color} />}
              color={color}
              focused={focused}
              name={"Search"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={
                <Ionicons name="settings-outline" size={24} color={color} />
              }
              color={color}
              focused={focused}
              name={"Settings"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
