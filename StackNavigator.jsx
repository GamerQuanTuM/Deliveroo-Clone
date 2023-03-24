import { createStackNavigator } from "@react-navigation/stack";
import BasketScreen from "./screens/BasketScreen";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import "react-native-gesture-handler";

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Basket"
        component={BasketScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="PreparingOrder"
        component={PreparingOrderScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Delivery" component={DeliveryScreen} presentation="modal"/>
    </Stack.Navigator>
  );
}
