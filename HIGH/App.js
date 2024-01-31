import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HighSchoolInfo from "./src/components/screens/HighSchoolInfo";
import Join from "./src/components/screens/Join";
import Login from "./src/components/screens/Login";
import MainPage from "./src/components/screens/MainPage";
import MyPage from "./src/components/screens/MyPage";
import StartScreen from "./src/components/screens/StartScreen";
import TestQuestion from "./src/components/screens/TestQuestion";
import TestResultHighSchool from "./src/components/screens/TestResultHighSchool";
import TestResultLoading from "./src/components/screens/TestResultLoading";
import TestStart from "./src/components/screens/TestStart";
import FirstScreen from "./src/components/screens/FirstScreen";

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