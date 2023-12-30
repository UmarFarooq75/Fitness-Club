import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Screen/WelcomeScreen";
import HomeScreenTab from "./Screen/HomeScreenTab";
import Exercises from "./Screen/Exercises";
import ExercisesDetails from "./Screen/ExerciseDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name="HomeScreenTab" component={HomeScreenTab} />
        <Stack.Screen
          options={{
            presentation: "fullScreenModal",
          }}
          name="Exercises"
          component={Exercises}
        />
        <Stack.Screen
          options={{
            presentation: "modal",
          }}
          name="ExercisesDetails"
          component={ExercisesDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
