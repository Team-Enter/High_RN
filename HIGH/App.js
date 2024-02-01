import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HighSchoolInfo from "./src/screens/HighSchoolInfo";
import Join from "./src/screens/Join";
import Login from "./src/screens/Login";
import MainPage from "./src/screens/MainPage";
import MyPage from "./src/screens/MyPage";
import StartScreen from "./src/screens/StartScreen";
import TestQuestion from "./src/screens/TestQuestion";
import TestResultHighSchool from "./src/screens/TestResultHighSchool";
import TestResultLoading from "./src/screens/TestResultLoading";
import TestStart from "./src/screens/TestStart";
import FirstScreen from "./src/screens/FirstScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/*<Stack.Screen name="FirstScreen" component={FirstScreen}/>
        <Stack.Screen name="HighSchoolInfo" component={HighSchoolInfo}/>
        <Stack.Screen name="Join" component={Join}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="MainPage" component={MainPage}/>
        <Stack.Screen name="MyPage" component={MyPage}/>*/}
        <Stack.Screen name="StartScreen" component={StartScreen}/>
        {/*<Stack.Screen name="TestQuestion" component={TestQuestion}/>
        <Stack.Screen name="TestResultHighSchool" component={TestResultHighSchool}/>
        <Stack.Screen name="TestResultLoading" component={TestResultLoading}/>
        <Stack.Screen name="TestStart" component={TestStart}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
;}

export default App;