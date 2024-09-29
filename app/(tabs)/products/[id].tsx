import { FlatList, Image } from "react-native";
import React from "react";
import CustomText from "@/components/CustomText";
import { useLocalSearchParams } from "expo-router";
import CustomView from "@/components/CustomView";
import CustomFlatList from "@/components/CustomFlatList";

const ListHeaderComponent = ({
  id,
  name,
  price,
  image,
  description,
}: Product) => {
  // image is a json string that needs to be parsed
  image = JSON.parse(image);

  return (
    <CustomView globalClassName="flex-1">
      <Image
        source={{ uri: image }}
        className="w-full h-[380px]"
        resizeMode="cover"
      />
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
