import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { removeFromBasket } from "../../redux/Slices/basketSlice";

import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import BasketFooter from "./BasketFooter";

const BasketContent = ({
  groupedItemsBasket,
  navigation,
  restaurant,
  items,
  dispatch,
  setGroupedItemsBasket,
}) => {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
        <View>
          <Text className="text-center text-lg font-bold">Basket</Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-gray-100 absolute top-3 right-5"
        >
          <XCircleIcon color="#00CCBB" height={50} width={50} />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center px-4 py-3 space-x-4 bg-white my-5">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <Text className="flex-1">Deliver in 50-75 mins</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView classNmae="divide-y divide-gray-200">
        {Object.entries(groupedItemsBasket).map(([key, items]) => (
          <View
            key={key}
            className="flex-row items-center space-x-3 bg-white py-2 px-5"
          >
            <Text className="text-[#00CCBB]">{items?.length} x </Text>
            <Image
              source={{ uri: urlFor(items[0]?.image).url() }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-600">
              <Currency quantity={items[0]?.price} currency="INR" />
            </Text>
            <TouchableOpacity>
              <Text
                className="text-[#00CCBB] text-xs"
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <BasketFooter navigation={navigation} items={items} />
    </View>
  );
};

export default BasketContent;
