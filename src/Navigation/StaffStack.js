import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import Staff from "../Screens/Staff/Staff";
import SelectRoom from "../Screens/HomeScreen/SelectRoom";
import AddStaff from "../Screens/Staff/AddStaff";
import StaffProfile from "../Screens/Staff/StaffProfile";
import AddParent from "../Screens/HomeScreen/AddParent";
import AddAuthorizedPickup from "../Screens/HomeScreen/AddAuthorizedPickup";
const Stack = createStackNavigator();

const StaffStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='StaffScreen' component={Staff} options={{headerShown:false }}/>
            <Stack.Screen name='SelectRoom' component={SelectRoom} options={{headerShown:false }}/>
            <Stack.Screen name='AddStaff' component={AddStaff} options={{headerShown:false }}/>
            <Stack.Screen name='StaffProfile' component={StaffProfile} options={{headerShown:false }}/>
            <Stack.Screen name='AddParent' component={AddParent} options={{headerShown:false }}/>
            <Stack.Screen name='AddAuthorizedPickup' component={AddAuthorizedPickup} options={{headerShown:false }}/>

        </Stack.Navigator>
    );
}

export default StaffStack;