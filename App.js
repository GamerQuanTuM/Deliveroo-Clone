import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
