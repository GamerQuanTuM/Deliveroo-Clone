import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../redux/Slices/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { emptyBasket, selectBasketItems } from "../redux/Slices/basketSlice";
import GlobalStyle from "../GlobalStyle";
import BasketContent from "../components/Basket/BasketContent";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const [groupedItemsBasket, setGroupedItemsBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});
    setGroupedItemsBasket(groupedItems);
  }, [items]);

  const removeItemFromBasket = () => {
    dispatch(dispatch(emptyBasket()));
  };

  return (
    <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
      <BasketContent
        navigation={navigation}
        restaurant={restaurant}
        items={items}
        dispatch={dispatch}
        groupedItemsBasket={groupedItemsBasket}
        setGroupedItemsBasket={setGroupedItemsBasket}
      />
    </SafeAreaView>
  );
};

export default BasketScreen;
