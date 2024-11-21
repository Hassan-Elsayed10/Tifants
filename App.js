import React from 'react';
import {
  Text, View, SafeAreaView
} from 'react-native';
import Router from './src/Navigation';
import DaycareName from './src/Screens/DaycareName';
export default function App() {
      return(
        <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'#FFF'}}>
          <Router/>
        </SafeAreaView>
        );
}

