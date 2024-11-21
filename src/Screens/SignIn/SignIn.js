import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput,ImageBackground } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
    <ImageBackground style={{width:'100%',height:'100%',flex:1}} source={require('../../../Assets/OvalCopy8.png')}>
      <View style={styles.row} >
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../Assets/Frame(6).png')} />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../../Assets/Group36860.png')} />
      </View>
    </ImageBackground>
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.title}>Sign In Out</Text>
        <Text style={styles.subtitle}>Record students attendance or visit parent kiosk.</Text>
      </View>
    <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('Attendance')} >
             <Text style={styles.buttonText1}>Attendance</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ParentKiosk')} >
             <Text style={styles.buttonText}>Parent Kiosk</Text>
    </TouchableOpacity>
    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex:1

  },
  row: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    fontWeight:'700',
    fontSize:24,
    color:'#000000',
    textAlign:'center'
  },
  subtitle:{
    fontWeight:'400',
    fontSize:16,
    color:'#454242',
    textAlign:'center'

  },
  button: {
    borderColor: '#475AD7',
    borderRadius: 12,
    marginBottom: '10@vs',
    paddingVertical: '15@vs',
    borderWidth:1,
    padding: '15@vs',
    margin:'20@vs'
},

buttonText: {
    fontSize: 16,
    color: '#475AD7',
    textAlign: 'center',
    fontWeight: '500'
},
  button1: {
    backgroundColor: '#475AD7',
    borderRadius: 12,
    padding: '15@vs',
    margin:'20@vs'
  },

buttonText1: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '500'
},
})