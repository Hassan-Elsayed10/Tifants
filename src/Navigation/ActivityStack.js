import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screens/HomeScreen/Home";
import Meal from "../Screens/ActivityScreen/Meal";
import Activity from "../Screens/ActivityScreen/Activity";
import Nap from "../Screens/ActivityScreen/Nap";
import Restroom from "../Screens/ActivityScreen/Restroom";
import Bottle from "../Screens/ActivityScreen/Bottle";
import Mood from "../Screens/ActivityScreen/Mood";
import NameToFace from "../Screens/ActivityScreen/NameToFace";
import Meds from "../Screens/ActivityScreen/Meds";
import Note from "../Screens/ActivityScreen/Note";
import Observation from "../Screens/ActivityScreen/Observation";
import Incident from "../Screens/ActivityScreen/Incident";
import UpcomingActivities from "../Screens/ActivityScreen/UpcomingActivities";
import SelectionBottle from "../Screens/ActivityScreen/SelectionBottle";
import SelectionIncident from "../Screens/ActivityScreen/SelectionIncident";
import SelectionMeal from "../Screens/ActivityScreen/SelectionMeal";
import SelectionMeds from "../Screens/ActivityScreen/SelectionMeds";
import SelectionMood from "../Screens/ActivityScreen/SelectionMood";
import SelectionNameToFace from "../Screens/ActivityScreen/SelectionNameToFace";
import SelectionNap from "../Screens/ActivityScreen/SelectionNap";
import SelectionNote from "../Screens/ActivityScreen/SelectionNote";
import SelectionObservation from "../Screens/ActivityScreen/SelectionObservation";
import SelectionRestroom from "../Screens/ActivityScreen/SelectionRestroom";
import NewMessage from "../Screens/Staff/NewMessage";
// import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

const ActivityStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Activitys' component={Activity} options={{headerShown:false }}/>
            <Stack.Screen name='Meal' component={Meal} options={{headerShown:false }}/>
            <Stack.Screen name='Nap' component={Nap} options={{headerShown:false }}/>
            <Stack.Screen name='Restroom' component={Restroom} options={{headerShown:false }}/>
            <Stack.Screen name='Bottle' component={Bottle} options={{headerShown:false }}/>
            <Stack.Screen name='Mood' component={Mood} options={{headerShown:false }}/>
            <Stack.Screen name='Meds' component={Meds} options={{headerShown:false }}/>
            <Stack.Screen name='Note' component={Note} options={{headerShown:false }}/>
            <Stack.Screen name='Observation' component={Observation} options={{headerShown:false }}/>
            <Stack.Screen name='NameToFace' component={NameToFace} options={{headerShown:false }}/>
            <Stack.Screen name='Incident' component={Incident} options={{headerShown:false }}/>
            <Stack.Screen name='UpcomingActivities' component={UpcomingActivities} options={{headerShown:false }}/>
            <Stack.Screen name='homeActivity' component={HomeScreen} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionBottle' component={SelectionBottle} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionIncident' component={SelectionIncident} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionMeal' component={SelectionMeal} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionMeds' component={SelectionMeds} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionMood' component={SelectionMood} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionNameToFace' component={SelectionNameToFace} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionNap' component={SelectionNap} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionNote' component={SelectionNote} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionObservation' component={SelectionObservation} options={{headerShown:false }}/>
            <Stack.Screen name='SelectionRestroom' component={SelectionRestroom} options={{headerShown:false }}/>
            <Stack.Screen name='NewMessagex' component={NewMessage} options={{headerShown:false }}/>


        </Stack.Navigator>
    );
}

export default ActivityStack;