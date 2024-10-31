import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";
 
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomeScreen from "../screens/HomeScreen";
import BemVindo from "../screens/BemVindo";

import FelizPage from "../screens/HomeScreen/FelizPage";
import EstressadoPage from "../screens/HomeScreen/EstressadoPage";
import AnsiosoPage from "../screens/HomeScreen/AnsiosoPage";
import CalmoPage from "../screens/HomeScreen/CalmoPage";
import TristePage from "../screens/HomeScreen/TristePage";
import RaivaPage from "../screens/HomeScreen/RaivaPage";

import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

 
 
const Stack = createStackNavigator();
 
export default function StackNavigator() {
  const navigation = useNavigation();
  function logOut(){
    try{
      signOut(auth)
    } catch (err){
      console.log(err)
    } finally {
      navigation.navigate("Login")
    }
  }
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: null,
          headerRight: () => (
            <Text onPress={logOut} style={styles.logout}>
              Sair
            </Text>
          ),
        }}
      />

  <Stack.Screen
name="FelizPage"
component={FelizPage}
options={{headerShown: false}}
/>

<Stack.Screen
name="AnsiosoPage"
component={AnsiosoPage}
options={{headerShown: false}}
/>

<Stack.Screen
name="EstressadoPage"
component={EstressadoPage}
options={{headerShown: false}}
/>

<Stack.Screen
name="CalmoPage"
component={CalmoPage}
options={{headerShown: false}}
/>

<Stack.Screen
name="RaivaPage"
component={RaivaPage}
options={{headerShown: false}}
/>

<Stack.Screen
name="TristePage"
component={TristePage}
options={{headerShown: false}}
/>


    </Stack.Navigator>
  );
}
 
const styles = StyleSheet.create({
  logout: {
    color: "#078eec",
    fontWeight: "bold",
    fontSize: 16,
    paddingRight: 10,
  },
});