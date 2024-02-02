import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./src/screens/StartScreen";
import JoinEmailIdPasswordScreen from "./src/screens/JoinEmailIdPasswordScreen";
import JoinNicknameScreen from "./src/screens/JoinNicknameScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MainPageScreen from "./src/screens/MainPageScreen";
import TestStartScreen from "./src/screens/StartTestScreen";
import TestQuestionScreen from "./src/screens/TestQuestionScreen";
import TestResultScreen from "./src/screens/TestResultScreen";
import TestResultHighschoolScreen from "./src/screens/TestResultHighschoolScreen";
import HighschoolDetailsSummaryScreen from "./src/screens/HighschoolDetailsSummaryScreen";
import HighschoolDetailsMajorInfoScreen from "./src/screens/HighschoolDetailsMajorInfoScreen";
import MyPageScreen from "./src/screens/MyPageScreen";
import TestResultLoadingScreen from "./src/screens/TestResultLoadingScreen";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="JoinEmailIdPasswordScreen" component={JoinEmailIdPasswordScreen} />
        <Stack.Screen name="JoinNicknameScreen" component={JoinNicknameScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainPageScreen" component={MainPageScreen} />
        <Stack.Screen name="TestStartScreen" component={TestStartScreen} />
        <Stack.Screen name="TestQuestionScreen" component={TestQuestionScreen} />
        <Stack.Screen name="TestResultLoadingScreen" component={TestResultLoadingScreen} />
        <Stack.Screen name="TestResultScreen" component={TestResultScreen} />
        <Stack.Screen name="TestResultHighschoolScreen" component={TestResultHighschoolScreen} />
        <Stack.Screen name="HighschoolDetailsSummaryScreen" component={HighschoolDetailsSummaryScreen} />
        <Stack.Screen name="HighschoolDetailsMajorInfoScreen" component={HighschoolDetailsMajorInfoScreen} />
        <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
