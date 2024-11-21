import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from "./HomeStack";
import SignInStack from "./SignInStack";
import BillingStack from "./BillingStack";
import CalendarIcon from "../../Assets/calendarIcon";
import StaffStack from "./StaffStack";
import Salary from "../Screens/Staff/Salary";
import NewMessage from "../Screens/Staff/NewMessage";
import BilingIcon from "../../Assets/BilingIcon";
import { View, Image } from "react-native";
import MessageIcon from "../../Assets/messageIcon";
import SalaryIcon from "../../Assets/salaryIcon";
import SalaryStack from "./SalaryStack";
const Tab = createBottomTabNavigator();
const StaffTabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="StaffHome"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#abc4ff",
          tabBarInactiveTintColor: "#0d47a1",
          tabBarStyle: { height:70}, // Adjust the height as per your requirement
        }}
      >
        <Tab.Screen
          component={StaffStack}
          name="StaffHome"
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={25} />
            ),
            // tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarOptions: {
                visible: false
              },
              tabBarButton: () => null,
              tabBarVisible: false,
          }}
          
          
        />
        <Tab.Screen
          component={SalaryStack}
          name="SalaryStack"
          options={{
            tabBarIcon: ({ focused }) => (
              <SalaryIcon
              focused={focused}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={SignInStack}
          name="SignIn"
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("../../Assets//Group36814.png")}
                resizeMode="contain"
                style={{marginBottom:70}}

              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={NewMessage}
          name="Message"
          options={{
            tabBarIcon: ({ focused }) => (
              <MessageIcon
              focused={focused}
              />
            ),
            headerShown: false,
            tabBarVisible: false
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default StaffTabs;
