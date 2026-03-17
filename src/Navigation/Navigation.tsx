import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserInputsPage } from "../Pages/User/UserInputsPage";

// import Dashboard from "../Pages/Dashboard/DashboardPage/DashboardPage";
// import Wallet from "../Pages/Wallet/Wallet";
// import ProfileScreen from "../Pages/Profile/UpdateProfile/UpdateProfile";
// import OrderScreen from "../Pages/Order/Order";
// import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator<TAppTabParamList>();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "purple",
          elevation: 10,
          borderTopWidth: 0,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    

    //   tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={UserInputsPage} />
      {/* <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
