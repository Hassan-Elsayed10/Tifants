import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen/Home";
import HomeStudentActivity from "../Screens/HomeScreen/HomeStudentsActivity";
import StudentActivitySignInOut from "../Screens/HomeScreen/HomeActivitySignInOut";
import StudentActivitySignOut from "../Screens/HomeScreen/HomeActivitySignOut";
import StudentActivityBilling from "../Screens/HomeScreen/studentBilling";
import StudentProfile from "../Screens/HomeScreen/studentProfile";
import DeleteSuccessful from "../Screens/HomeScreen/DeleteSuccessful";
import AddParent from "../Screens/HomeScreen/AddParent";
import AddAuthorizedPickup from "../Screens/HomeScreen/AddAuthorizedPickup";
import RoomSelected from "../Screens/HomeScreen/RoomSelected";
import SelectRoom from "../Screens/HomeScreen/SelectRoom";
import AddRoom from "../Screens/HomeScreen/AddRoom";
import Attendance from "../Screens/SignIn/Attendance";
import ActivityStack from "./ActivityStack";
import AddStudent from "../Screens/HomeScreen/AddStudent";
const Stack = createStackNavigator();

const HomeStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Homex' component={HomeScreen} options={{headerShown:false }}/>
            <Stack.Screen name='studentActivity' component={HomeStudentActivity} options={{headerShown:false}}/>
            <Stack.Screen name='studentActivitySignInOut' component={StudentActivitySignInOut} options={{headerShown:false}}/>
            <Stack.Screen name='studentActivitySignOut' component={StudentActivitySignOut} options={{headerShown:false}}/>
            <Stack.Screen name='studentActivityBilling' component={StudentActivityBilling} options={{headerShown:false}}/>
            <Stack.Screen name='StudentProfile' component={StudentProfile} options={{headerShown:false}}/>
            <Stack.Screen name='DeleteSuccessful' component={DeleteSuccessful} options={{headerShown:false}}/>
            <Stack.Screen name='AddParent' component={AddParent} options={{headerShown:false}}/>
            <Stack.Screen name='AddAuthorizedPickup' component={AddAuthorizedPickup} options={{headerShown:false}}/>
            <Stack.Screen name='RoomSelected' component={RoomSelected} options={{headerShown:false}}/>
            <Stack.Screen name='SelectRoom' component={SelectRoom} options={{headerShown:false}}/>
            <Stack.Screen name='AddRoom' component={AddRoom} options={{headerShown:false}}/>
            <Stack.Screen name='ActivityStackX' component={ActivityStack} options={{headerShown:false}}/>
            <Stack.Screen name='AddStudent' component={AddStudent} options={{headerShown:false}}/>

            <Stack.Screen name='Attendancex' component={Attendance} options={{headerShown:false}}/>

        </Stack.Navigator>
    );
}

export default HomeStack;