import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen/Home";
import Calendra from "../Screens/Calendar/Calendar";
import CreateEvent from "../Screens/Calendar/CreateEvent";
import EventSuccessful from "../Screens/Calendar/EventSucc.essful";
const Stack = createStackNavigator();

const CalendarStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Calendras' component={Calendra} options={{headerShown:false }}/>
            <Stack.Screen name='CreateEvent' component={CreateEvent} options={{headerShown:false }}/>
            <Stack.Screen name='EventSuccessful' component={EventSuccessful} options={{headerShown:false }}/>
            <Stack.Screen name='homeCalendar' component={HomeScreen} options={{headerShown:false }}/>


        </Stack.Navigator>
    );
}

export default CalendarStack;