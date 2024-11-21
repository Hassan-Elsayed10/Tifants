
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginStack from "./LoginStack";
import GettingStarted from "../Screens/GettingStarted";
import CustomDrawerContent from "./CustomDrawerContent";
import Login from "../Screens/LoginScreen/Login";
import Settings from "../Screens/Settings";
import StaffTabs from "./StaffTabs";
import DaycareName from "../Screens/DaycareName";
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
        },
      }}

    >
      <Drawer.Screen
        name="LoginStack"
        component={LoginStack}
        options={{
          drawerLabel: () => null,
        }}
      />
      <Drawer.Screen
        name="GettingStarted"
        component={GettingStarted}
      />

      <Drawer.Screen
        name="Staff"
        component={StaffTabs}
      />

      <Drawer.Screen
        name="Settings"
        component={Settings}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
      />
      <Drawer.Screen
        name="DaycareName"
        component={DaycareName}
      />

    </Drawer.Navigator>

  );
};

export default DrawerStack;