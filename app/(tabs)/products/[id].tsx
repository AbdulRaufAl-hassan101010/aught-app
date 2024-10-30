import { StatusBar, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "@/components/CustomText";
import { router, useLocalSearchParams } from "expo-router";
import CustomView from "@/components/CustomView";
import CustomFlatList from "@/components/CustomFlatList";
import CustomTouchableOpacity from "@/components/CustomTouchableOpacity";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import Constants from "expo-constants";

const ListHeaderComponent = ({
  id,
  name,
  price,
  image,
  description,
}: Product) => {
  // image is a json string that needs to be parsed
  image = JSON.parse(image);

  const [height, setHeight] = useState(0);
  const colors = useThemeColor();

  useEffect(() => {
    const getStatusBarHeight = () => {
      const height = Constants.statusBarHeight ?? 0;

      setHeight(height);
    };

    getStatusBarHeight();
  }, []);

  return (
    <CustomView globalClassName="flex-1">
      <ImageBackground
        source={{ uri: image }}
        className="w-full h-[380px] relative"
        resizeMode="cover"
      >
        {/* calculate the height of the status bar using the dimension */}
        <CustomView globalClassName={`absolute top-[${height}] w-full`}>
          <CustomView
            globalClassName={`flex flex-row justify-between py-5 items-center px-3`}
          >
            <CustomTouchableOpacity onPress={() => router.back()}>
              <AntDesign
                name="arrowleft"
                size={24}
                color={colors?.colors.secondarytheme.color}
              />
            </CustomTouchableOpacity>
            <CustomTouchableOpacity onPress={() => router.back()}>
              <Feather
                name="edit"
                size={24}
                color={colors?.colors.secondarytheme.color}
              />
            </CustomTouchableOpacity>
          </CustomView>
        </CustomView>
      </ImageBackground>
      <CustomView globalClassName="px-3 mt-5">
        <CustomView globalClassName="flex-row justify-between">
          <CustomText
            globalClassName="text-lg font-psemibold flex-1"
            lightClassName="text-black"
          >
            {name}
          </CustomText>
          <CustomText
            globalClassName="text-lg font-psemibold"
            lightClassName="text-black"
          >
            ₵{price}
          </CustomText>
        </CustomView>

        <CustomView
          globalClassName="mt-5 "
          lightClassName="bg-white px-3 h-[100px] justify-center shadow-xl rounded-sm"
        >
          <CustomText
            globalClassName="font-psemibold"
            lightClassName="text-black"
          >
            Description
          </CustomText>
          <CustomText globalClassName="font-pregular mt-2y">
            {description}
          </CustomText>
        </CustomView>
      </CustomView>
    </CustomView>
  );
};

const ProductDetails = ({}) => {
  const { id, name, image, price, description } =
    useLocalSearchParams() as unknown as Product;

  return (
    <CustomFlatList
      data={null}
      renderItem={null}
      globalClassName="flex-"
      lightClassName="bg-primary"
      darkClassName="bg-primary-dark"
      ListEmptyComponent={
        <ListHeaderComponent
          id={id}
          name={name}
          price={price}
          image={image}
          description={description}
        />
      }
    />
  );
};

export default ProductDetails;
