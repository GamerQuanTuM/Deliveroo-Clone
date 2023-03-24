import { SafeAreaView,Platform } from "react-native";
import Content from "../components/Home/Content";
import Header from "../components/Home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView
      className={`bg-white ${Platform.OS === "android" ? "pt-12" : "pt-5"}`}
    >
      <Header />
      <Content/>
    </SafeAreaView>
  );
};

export default HomeScreen;
