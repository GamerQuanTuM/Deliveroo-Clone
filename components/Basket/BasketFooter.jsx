import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { selectBasketTotal } from "../../redux/Slices/basketSlice";

const BasketFooter = ({ navigation,items }) => {
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="p-5 bg-white mt-5 space-y-4">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">SubTotal</Text>
        <Text className="text-gray-400">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">
          <Currency quantity={50} currency="INR" />
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="font-bold text-lg">Order Total</Text>
        <Text className="font-extrabold text-lg">
          <Currency quantity={basketTotal + 50} currency="INR" />
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("PreparingOrder")}
        disabled={!items.length}
        className="rounded-lg bg-[#00CCBB] p-5"
      >
        <Text className="text-center text-white text-xl font-bold">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketFooter;
