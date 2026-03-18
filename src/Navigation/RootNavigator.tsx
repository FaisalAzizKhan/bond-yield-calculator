import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./Navigation";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App">{() => <AppTabs />}</Stack.Screen>
    </Stack.Navigator>
  );
}
