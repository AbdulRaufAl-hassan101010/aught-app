import {
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  RefreshControl,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomView from "@/components/CustomView";
import CustomText from "@/components/CustomText";
import FormField from "@/components/FormField";
import { ApiRequest } from "@/libs/backend";
import { ThemeContextType, useTheme } from "@/context/ThemeContext";
import CustomTouchableOpacity from "@/components/CustomTouchableOpacity";
import { Href, router } from "expo-router";
import { API_URL, DOMAIN_NAME } from "@/constants";
import CustomFlatList from "@/components/CustomFlatList";

type ListComponentProps = {
  products: any[];
  theme: ThemeContextType;
  loading?: boolean;
};

const ListHeaderComponent = ({ products }: ListComponentProps) => {
  return (
    <CustomSafeAreaView globalClassName=" flex-1 mx-3">
      <CustomView className="flex-1">
        <CustomText
          globalClassName="text-2xl font-psemibold"
          lightClassName="text-black"
        >
          Products ({products.length})
        </CustomText>
      </CustomView>

      {/* search */}
      <FormField placeholder="Search for products" containerStyle="mt-5" />
    </CustomSafeAreaView>
  );
};

const ListEmptyComponent = ({
  loading,
  products,
  theme,
}: ListComponentProps) => {
  if (loading) {
    return (
      <CustomView className="mt-7">
        <ActivityIndicator
          size="large"
          color={theme?.colors.secondarytheme.color}
        />
      </CustomView>
    );
  }

  return (
    <CustomView>
      <CustomText className="text-center">No products available</CustomText>
    </CustomView>
  );
};

const RenderItem = ({ item }: { item: any }) => {
  return (
    <CustomTouchableOpacity
      globalClassName="mb-2 py-5 flex-row gap-x-5 mx-3"
      lightClassName="bg-white shadow-md px-5"
      darkClassName="bg-black"
      onPress={() => {
        router.push({
          pathname: `products/${item._id}` as any,
          params: {
            name: item.name,
            image: JSON.stringify(item.image),
            price: item.price,
            description: item.description,
          } as Product,
        });
      }}
    >
      <Image
        source={{ uri: item.image }}
        className="w-[50px] h-[50px] rounded-full"
        resizeMode="cover"
      />
      <CustomView globalClassName="flex-1">
        <CustomText
          globalClassName="font-psemibold"
          lightClassName="text-black"
          numberOfLines={1}
        >
          {item.name}
        </CustomText>
        <CustomText
          globalClassName="text-sm"
          lightClassName="text-black"
          numberOfLines={1}
        >
          ₵{parseFloat(item.price).toFixed(2)}
        </CustomText>
      </CustomView>
    </CustomTouchableOpacity>
  );
};

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // theme
  const theme = useTheme();

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await ApiRequest("products");
      setProducts(data);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CustomFlatList
      globalClassName="flex flex-1 pt-7"
      lightClassName="bg-primary"
      darkClassName="bg-primary-dark"
      data={products ?? []}
      ListHeaderComponent={
        <ListHeaderComponent
          loading={loading}
          products={products}
          theme={theme}
        />
      }
      ListEmptyComponent={
        <ListEmptyComponent
          loading={loading}
          products={products}
          theme={theme}
        />
      }
      onRefresh={fetchProducts}
      refreshing={loading}
      renderItem={({ item }: { item: Product }) => (
        <RenderItem
          item={{
            ...item,
            price: parseFloat(item?.price.toString()).toFixed(2),
            image: item.image.startsWith("/")
              ? DOMAIN_NAME + item.image
              : item.image,
          }}
        />
      )}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={fetchProducts}
          tintColor={theme?.colors.secondarytheme.color}
          titleColor={theme?.colors.secondarytheme.color}
        />
      }
      indicatorStyle="white"
    />
  );
};

export default Products;
