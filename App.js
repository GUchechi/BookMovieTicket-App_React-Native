import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import SelectCity from "./screens/SelectCity";
import HomeScreen from "./screens/HomeScreen";
import { Wrapper } from "./Context/Wrapper";
import Details from "./screens/Details";
import Theaters from "./screens/Theaters";
import MyTicket from "./screens/MyTicket";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Wrapper>
      <StatusBar
        barStyle="light-content" // or "light-content"
        backgroundColor="#000" // set the background color
        translucent={false}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SelectCity" component={SelectCity} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Theaters" component={Theaters} />
          <Stack.Screen name="MyTicket" component={MyTicket} />
        </Stack.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
}
