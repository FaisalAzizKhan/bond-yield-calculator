import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserInputsPage } from "../Pages/User/UserInputsPage";
import { ResultsPage } from "../Pages/Results/ResultsPage";
import { CashFlowSchedulePage } from "../Pages/Cash/CashFlowSchedulePage";

const Tab = createBottomTabNavigator<TAppTabParamList>();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          elevation: 10,
          borderTopWidth: 0,
          height: 70,
          alignContent: "center",
        },
        tabBarLabelStyle: {
          fontSize: 16,
          alignContent: "center",
          justifyContent: "center",
          fontWeight: "600",
          marginTop: -15,
        },
        tabBarIcon: () => null,
      }}
    >
      <Tab.Screen name="Home" component={UserInputsPage} />
      <Tab.Screen name="Results" component={ResultsPage} />
      <Tab.Screen name="CashFlow" component={CashFlowSchedulePage} />
    </Tab.Navigator>
  );
}
