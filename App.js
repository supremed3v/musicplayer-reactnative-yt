import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/redux/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Discover from "./src/components/Discover";
import TopArtist from "./src/components/TopArtist";
import TopCharts from "./src/components/TopCharts";
import MusicPlayer from "./src/components/MusicPlayer";
import TopArtistsScreen from "./src/screens/TopArtistsScreen";
import TopChartsScreen from "./src/screens/TopChartsScreen";

const Tab = createBottomTabNavigator();
const ScreenStack = createNativeStackNavigator();

const HomeComponent = () => {
  return (
    <ScreenStack.Navigator
      initialRouteName="HomeComponent"
      screenOptions={{ headerShown: false }}
    >
      <ScreenStack.Screen name="HomeComponent" component={Home} />
      <ScreenStack.Screen name="Discover" component={Discover} />
      <ScreenStack.Screen name="TopArtist" component={TopArtist} />
      <ScreenStack.Screen name="TopCharts" component={TopCharts} />
      <ScreenStack.Screen name="Player" component={MusicPlayer} />
      <ScreenStack.Screen name="TopArtistScreen" component={TopArtistsScreen} />
      <ScreenStack.Screen name="TopChartsScreen" component={TopChartsScreen} />
    </ScreenStack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeComponent} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
