import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import BoardingOne from "../Screens/boardingScreen/boardingone";
import SplashScreen from "../Screens/splash";
import GetStarted from "../Screens/GetStarted";
import Login from "../Screens/LoginScreen/Login";
import ForgetPassword from "../Screens/LoginScreen/Forgetpassword";
import Verification from "../Screens/LoginScreen/Verification";
import NewPassword from "../Screens/LoginScreen/NewPassword";
import PasswordSuccessful from "../Screens/LoginScreen/PasswordSuccessful";
import SignUp from "../Screens/Sign Up/SignUp";
import RegisterScreen from "../Screens/Sign Up/Upload";
import HomeTabs from "./Tabs";
const Stack = createStackNavigator();

const LoginStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false }}/>
            <Stack.Screen name='BoardingOne' component={BoardingOne} options={{headerShown:false }}/>
            <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown:false }}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false }}/>
            <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{headerShown:false }}/>
            <Stack.Screen name='Verification' component={Verification} options={{headerShown:false }}/>
            <Stack.Screen name='NewPassword' component={NewPassword} options={{headerShown:false }}/>
            <Stack.Screen name='PasswordSuccessful' component={PasswordSuccessful} options={{headerShown:false }}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false }}/>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false }}/>
            <Stack.Screen name='HomeTabs' component={HomeTabs} options={{headerShown:false }}/>


        </Stack.Navigator>
    );
}

export default LoginStack;