import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import {
  Image as AnimatableImage,
  Text as AnimatableText,
} from "react-native-animatable";

import { Circle } from "react-native-progress";

const PreparingOrderScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <AnimatableImage
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <AnimatableText
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center"
      >
        Waiting for restaurant to take order
      </AnimatableText>
      <Circle
        style={{ marginTop: 30 }}
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
