import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import StudentSign from '../../Component/StudentSign';
import students from '../../../Data/students';
import GestureRecognizer from 'react-native-swipe-gestures';


export default function Attendance() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  // const [selectedSignType, setSelectedSignType] = useState(null);
  const signedInStudents = students.filter((student) => student.status === 'signed-in');
  const signedOutStudents = students.filter((student) => student.status === 'signed-out');
  const [selectedSignType, setSelectedSignType] = useState(null);
  const [selectedSign, setSelectedSign] = useState(true);
  const handelSignout = () => {
    setSelectedSignType('signed-out')
    setSelectedSign(false)
  }
  const handelSignin = () => {
    setSelectedSignType('signed-in')
    setSelectedSign(false)
  }
  const onSwipeLeft = () => {
    navigation.navigate('ActivityStackX');
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <View style={styles.container}>
            <GestureRecognizer onSwipeLeft={onSwipeLeft} config={config} style={{flex:1}}>

      <View style={styles.row} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../Assets/Frame(6).png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SelectRoom')} >
          <View style={styles.roomContainer}>
            <Text style={styles.headertext}>All Rooms</Text>
            <Image source={require("../../../Assets/Frame(4).png")} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.SignContainer}>
        <Text
          style={[
            styles.signText,
            selectedSignType === 'signed-out' && styles.selectedSignText,
          ]}
          onPress={handelSignout}
        >
          Signed-Out ({signedOutStudents.length})
        </Text>
        <Text
          style={[
            styles.signText,
            selectedSignType === 'signed-in' && styles.selectedSignText,
          ]}
          onPress={handelSignin}
        >
          Signed-In ({signedInStudents.length})
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Student’s Name"
            placeholderTextColor="#565656"
            onChangeText={setSearch}
            value={search}
          />
        </View>
        <TouchableOpacity>
          <Icon name="clipboard-list" size={30} color="#BDBFC2" />
        </TouchableOpacity>
      </View>
      {
        selectedSign ?
          <FlatList
            data={students}
            renderItem={({ item }) => <StudentSign item={item} />}
            showsVerticalScrollIndicator={false}
          /> :
          <FlatList
            data={selectedSignType === 'signed-in' ? signedInStudents : signedOutStudents}
            renderItem={({ item }) => <StudentSign item={item} />}
            showsVerticalScrollIndicator={false}
          />

      }
                  </GestureRecognizer>

    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    padding: '5@vs',
    backgroundColor: '#FFF',
    flex: 1,

  },
  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 100
  },
  headertext: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    marginRight: 10,
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  perviewtext: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    flex: 1
  },
  SignContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  signText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#565656'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    margin: '5%',
    justifyContent: 'space-between',
    borderColor: '#F3F4F6',
    borderWidth: 2,
  },
  line: {
    height: 2,
    backgroundColor: '#475AD7',
    marginTop: 5,
  },
  SignContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#565656',
  },
  selectedSignText: {
    color: '#475AD7',
  },
  textInput2: {
    flex: 1,
    height: 40,
    color: 'black',
    margin: '3%',
    fontSize: 16,
  },
  textInput1: {
    flex: 1,
    height: 40,
    color: 'black',
    margin: '3%',
    fontSize: 16,
  },
  searchInput:{
    flex: 1,
    height: 40,
    color: 'black',
    margin: '3%',
    fontSize: 16,
  }
})