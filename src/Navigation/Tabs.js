import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import Expenses from "../Screens/Expenses/Expenses";
import HomeStack from "./HomeStack";
import CalendarStack from "./CalendarStack";
import SignInStack from "./SignInStack";
import ActivityStack from "./ActivityStack";
import BillingStack from "./BillingStack";
import CalendarIcon from "../../Assets/calendarIcon";
import SentIcon from "../../Assets/Sent";
import ActivityIcon from "../../Assets/ActivityIcon";
import BilingIcon from "../../Assets/BilingIcon";
import ExpensesStack from "./ExpensesStack";
import { View, Image } from "react-native";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#abc4ff",
          tabBarInactiveTintColor: "#0d47a1",
          tabBarStyle: { height:70}, // Adjust the height as per your requirement
        }}
      >
        <Tab.Screen
          component={HomeStack}
          name="Home"
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
          component={CalendarStack}
          name="Calendra"
          options={{
            tabBarIcon: ({ focused }) => (
              <CalendarIcon
              focused={focused}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={ExpensesStack}
          name="Expenses"
          options={{
            tabBarIcon: ({ focused }) => (
              <SentIcon
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
          component={ActivityStack}
          name="Activity"
          options={{
            tabBarIcon: ({ focused }) => (
              <ActivityIcon
              focused={focused}

              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={BillingStack}
          name="Billing"
          options={{
            tabBarIcon: ({ focused }) => (
              <BilingIcon
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

export default HomeTabs;
