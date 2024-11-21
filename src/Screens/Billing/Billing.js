import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
export default function Billing() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.row} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../../Assets/Group_36703.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Billing</Text>
      </View>
      <View style={styles.TitleContainer}>
        <Text style={styles.title}>Setup Billing in 5 mins!</Text>
        <Text style={styles.subtitle}>Powerful Online Billing & Payment System for your school</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.rowIcon}>
          <Image source={require('../../../Assets/vuesax/receipt-item.png')} style={{marginRight:20}} />
          <Text style={styles.TextIcon}>Send invoices, collect payments and view family transactions</Text>
        </View>
        <View style={styles.rowIcon}>
          <Image source={require('../../../Assets/vuesax/security-safe.png')} style={{marginRight:20}} />
          <Text style={styles.TextIcon}>Industry standard security & compliance for all your data</Text>
        </View>
        <View style={styles.rowIcon}>
          <Image source={require('../../../Assets/vuesax/security-card.png')} style={{marginRight:20}} />
          <Text style={styles.TextIcon}>Fast payment right to your bank account via ACH, Credit/Debit Cards, Checks or Cash</Text>
        </View>
      </View>
      <View style={{flex:2}}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SetupAccount')} >
                <Text style={styles.buttonText1}>Set up Account</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}>Skip Now</Text>
     </TouchableOpacity>

      </View>
    </View>
  );

}
export const styles = ScaledSheet.create({
  container: {
    padding: '2@vs',
    backgroundColor: '#FFF',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    padding: '10@vs',
    alignItems: 'center',
    marginBottom: '20@vs',
    flex: 1,
  },
  text: {
    fontSize: '15@vs',
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    flex: 1
  },
  TitleContainer: {
    flex: 1,
    padding: '10@vs',
    justifyContent:'flex-start'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#454242',
    textAlign: 'center'
  },
  iconContainer:{
    flex:2,
    alignItems:'center',
    margin: '10@vs',
    padding: '10@vs',
  },
  TextIcon:{
    fontSize: 16,
    fontWeight: '400',
    color: '#454242',
    flex:1,
  },
  rowIcon:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:'20@vs'
  },
  button1: {
    backgroundColor: '#475AD7',
    borderRadius: 12,
    paddingVertical: '15@vs',
    margin:10,
},

buttonText1: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '500'
},
button: {
  marginBottom: '30@vs',
  paddingVertical: '15@vs',
  margin:10
},

buttonText: {
  fontSize: 16,
  color: '#475AD7',
  textAlign: 'center',
  fontWeight: '500'
},
})