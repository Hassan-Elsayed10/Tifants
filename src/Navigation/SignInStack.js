import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "../Screens/SignIn/SignIn";
import Attendance from "../Screens/SignIn/Attendance";
import ParentKiosk from "../Screens/SignIn/ParentKiosk";
import SignInStudent from "../Screens/SignIn/SignInStudent";
import ActivityStack from "./ActivityStack";
import HomeStack from "./HomeStack";
const Stack = createStackNavigator();

const SignInStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIns' component={SignIn} options={{headerShown:false }}/>
            <Stack.Screen name='Attendance' component={Attendance} options={{headerShown:false }}/>
            <Stack.Screen name='ParentKiosk' component={ParentKiosk} options={{headerShown:false }}/>
            <Stack.Screen name='SignInStudent' component={SignInStudent} options={{headerShown:false }}/>

        </Stack.Navigator>
    );
}

export default SignInStack;