import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen/Home";
import Expenses from "../Screens/Expenses/Expenses";
import GenerateExpensesReportScreen from "../Screens/Expenses/GenerateExpensesReportScreen";
import GenerateExpensesReports from "../Screens/Expenses/GenerateExpensesReports";
const Stack = createStackNavigator();

const ExpensesStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Expensesx' component={Expenses} options={{headerShown:false }}/>
            <Stack.Screen name='GenerateExpensesReports' component={GenerateExpensesReports} options={{headerShown:false }}/>
            <Stack.Screen name='GenerateExpensesReportScreen' component={GenerateExpensesReportScreen} options={{headerShown:false }}/>
        </Stack.Navigator>
    );
}

export default ExpensesStack;