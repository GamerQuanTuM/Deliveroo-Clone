import {
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const HomeHeader = () => {
  return (
    <View>
    {/* Header */}
      <View className="flex-row pb-3 items-center mx-1 px-3 space-x-1">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "http://links.papareact.com/wru",
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 h-10">
          <MagnifyingGlassIcon color="#00CCBB" size={20} />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </View>
  );
};

export default HomeHeader;
