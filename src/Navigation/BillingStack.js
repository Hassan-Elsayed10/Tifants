import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen/Home";
import Billing from "../Screens/Billing/Billing";
import SetupAccount from "../Screens/Billing/SetupAccount";
import TransactionRecord from "../Screens/Billing/TransactionRecord";
import ReceivePayment from "../Screens/Billing/ReceivePayment";
import ReceivePaymentSubmit from "../Screens/Billing/ReceivePaymentSubmit";
import AddCredit from "../Screens/Billing/AddCredit";
import EditInvoice from "../Screens/Billing/EditInvoice";
import AddLineItem from "../Screens/Billing/AddLineItem";
import GenerateExpensesBilling from "../Screens/Billing/GenerateExpensesBilling";
import GenerateExpensesBillingReport from "../Screens/Billing/GenerateExpensesBillingReport";
import GenerateExpensesReports from "../Screens/Expenses/GenerateExpensesReports";
const Stack = createStackNavigator();

const BillingStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Billings' component={Billing} options={{headerShown:false }}/>
            <Stack.Screen name='SetupAccount' component={SetupAccount} options={{headerShown:false }}/>
            <Stack.Screen name='TransactionRecord' component={TransactionRecord} options={{headerShown:false }}/>
            <Stack.Screen name='ReceivePayment' component={ReceivePayment} options={{headerShown:false }}/>
            <Stack.Screen name='ReceivePaymentSubmit' component={ReceivePaymentSubmit} options={{headerShown:false }}/>
            <Stack.Screen name='AddCredit' component={AddCredit} options={{headerShown:false }}/>
            <Stack.Screen name='EditInvoice' component={EditInvoice} options={{headerShown:false }}/>
            <Stack.Screen name='AddLineItem' component={AddLineItem} options={{headerShown:false }}/>
            <Stack.Screen name='GenerateExpensesBilling' component={GenerateExpensesBilling} options={{headerShown:false }}/>
            <Stack.Screen name='GenerateExpensesBillingReport' component={GenerateExpensesBillingReport} options={{headerShown:false }}/>
            <Stack.Screen name='GenerateExpensesReports' component={GenerateExpensesReports} options={{headerShown:false }}/>

            <Stack.Screen name='homeBilling' component={HomeScreen} options={{headerShown:false }}/>


        </Stack.Navigator>
    );
}

export default BillingStack;