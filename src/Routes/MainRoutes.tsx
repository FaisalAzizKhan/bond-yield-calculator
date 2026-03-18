import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import SplashAnimation from "../Pages/SplashAnimation/SplashAnimation";
import { ResultsPage } from "../Pages/Results/ResultsPage";
import { UserInputsPage } from "../Pages/User/UserInputsPage";
import { CashFlowSchedulePage } from "../Pages/Cash/CashFlowSchedulePage";
import AppTabs from "../Navigation/Navigation";


const Stack = createNativeStackNavigator<TRootStackParamList>();

export const MainRoutes = () => {
  const screens = {
    SplashAnimation: {
      screen: SplashAnimation,
    },
    ResultsPage: {
      screen: ResultsPage,
      initialParams: { userData: null },
    },
    UserInputsPage: {
      screen: UserInputsPage,
    },
    CashFlowSchedulePage: {
      screen: CashFlowSchedulePage,
    },
    AppTabs: {
      screen: AppTabs,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"AppTabs" as keyof TRootStackParamList}
        screenOptions={{ headerShown: false }}
      >
        {Object.entries(screens).map(([name, { screen, options }]: any) => (
          <Stack.Screen
            key={name}
            name={name as keyof TRootStackParamList}
            component={screen}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
