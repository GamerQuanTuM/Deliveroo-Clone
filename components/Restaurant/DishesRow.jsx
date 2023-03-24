import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import {
  addToBasket,
  selectBasketItems,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../../redux/Slices/basketSlice";

const DishesRow = ({ item }) => {
  const { name, short_description, price, image } = item;
  const description = short_description;
  const id = item._id;

  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image,
      })
    );
  };

  const removeItemFromBasket = () => {
    if (items.length < 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-100 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>

          <View>
            <Image
              className="h-20 w-20 bg-gray-300 p-4"
              source={{
                uri: urlFor(image).url(),
              }}
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon
                size={40}
                color="#00CCBB"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishesRow;
