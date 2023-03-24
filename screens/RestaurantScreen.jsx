import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishesRow from "../components/Restaurant/DishesRow";
import BasketIcon from "../components/Restaurant/BasketIcon";
import { setRestaurant } from "../redux/Slices/restaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  const navigation = useNavigation();

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <View className="relative">
              <Image
                className="w-full h-56 bg-gray-300 p-4"
                source={{
                  uri: urlFor(imgUrl).url(),
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
              >
                <ArrowLeftIcon size={20} color="#00CCBB" />
              </TouchableOpacity>
            </View>
            <View className="bg-white">
              <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                  <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-sm text-gray-500">
                      <Text className="text-green-500">{rating}</Text> • {genre}
                    </Text>
                  </View>

                  <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-sm text-gray-500">
                      <Text className="text-gray">Nearby • {address}</Text>
                    </Text>
                  </View>
                </View>

                <Text className="text-gray-500 mt-2 pb-4">
                  {short_description}
                </Text>
              </View>
              <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
                <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
                <Text className="pl-2 flex-1 text-md font-bold">
                  Have a Food Allergy?
                </Text>
                <ChevronRightIcon color="#00CCBB" />
              </TouchableOpacity>
            </View>
            <View>
              <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            </View>
          </>
        }
        key={(item) => item.id}
        data={dishes}
        renderItem={({ item }) => <DishesRow item={item} />}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
      <BasketIcon />
    </>
  );
};

export default RestaurantScreen;
