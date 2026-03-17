import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import SplashAnimation from "../Pages/SplashAnimation/SplashAnimation";
import { ResultsPage } from "../Pages/Results/ResultsPage";
import { UserInputsPage } from "../Pages/User/UserInputsPage";
import { CashFlowSchedulePage } from "../Pages/Cash/CashFlowSchedulePage";


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
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"UserInputsPage" as keyof TRootStackParamList}
        screenOptions={{ headerShown: true }}
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
