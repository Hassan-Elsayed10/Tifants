import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import Salary from "../Screens/Staff/Salary";
import StaffBillingReport from "../Screens/Staff/StaffBillingReport";
import SalarySlip from "../Screens/Staff/SalarySlip";
const Stack = createStackNavigator();

const SalaryStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Salary' component={Salary} options={{headerShown:false }}/>
            <Stack.Screen name='StaffBillingReport' component={StaffBillingReport} options={{headerShown:false }}/>
            <Stack.Screen name='SalarySlip' component={SalarySlip} options={{headerShown:false }}/>

        </Stack.Navigator>
    );
}

export default SalaryStack;