import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HistoryScreen from "./HistoryScreen";
import Home from "./Home";
import { FontAwesome } from "@expo/vector-icons";
import Exercises from "./Exercises";

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "#2e64e5",
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" color={color} size={size} />
          ),
        }}
        name="History"
        component={HistoryScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
