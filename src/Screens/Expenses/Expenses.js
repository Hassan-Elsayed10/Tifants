import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import AddIcon from '../../../Assets/addIcon';
import MonthItem from '../../Component/MonthItem';
import ExpensesComponent from '../../Component/Expenses';
import ExpensesData from '../../../Data/ExpensesData';
export default function Expenses() {
  const navigation = useNavigation();
  const months = [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Feb' },
    { id: 3, name: 'Mar' },
    { id: 4, name: 'Apr' },
    { id: 5, name: 'May' },
    { id: 6, name: 'Jun' },
    { id: 7, name: 'Jul' },
    { id: 8, name: 'Aug' },
    { id: 9, name: 'Sep' },
    { id: 10, name: 'Oct' },
    { id: 11, name: 'Nov' },
    { id: 12, name: 'Dec' },
  ];
  const [selectedMonth, setSelectedMonth] = useState(null);

  const renderMonthItem = ({ item }) => {
    const isSelected = item.id === selectedMonth?.id;
    return (
      <MonthItem
        month={item}
        isSelected={isSelected}
        onSelect={setSelectedMonth}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row} >
        <TouchableOpacity  onPress={() => navigation.openDrawer()}>
          <Image source={require('../../../Assets/Group3670(1).png')} />
        </TouchableOpacity>
        <TouchableOpacity  >
          <View style={styles.roomContainer}>
            <Text style={styles.headertext}>Expenses Overview</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GenerateExpensesReportScreen')}>
          <Image source={require("../../../Assets/receipt-minus.png")} />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'#475AD7',}}>
        <FlatList
          data={months}
          renderItem={renderMonthItem}
          keyExtractor={item => item.id.toString()}
          horizontal
        />
      </View>
      <View style={styles.cartContainer}>
        <View style={styles.cart}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Image source={require("../../../Assets/USD.png")} />
            <Image source={require("../../../Assets/Edit.png")} />
            </View>
            <Text style={styles.textCart}>Spent until now in</Text>
            <Text style={styles.textCart}>March 2023</Text>
            <Text style={styles.textBoldCart}>-$3,250</Text>
        </View>
      </View>
      <View style={{flex:1}}>
      <Text style={styles.title}>Expenses</Text>

      <FlatList
                data={ExpensesData}
                renderItem={({ item }) => <ExpensesComponent item={item} />}
                showsVerticalScrollIndicator={false}
            />
      </View>
      <View style={{alignItems:'flex-end'}}>
        <AddIcon/>
      </View>
    </View>
  );
}
export const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  row: {
    flexDirection: 'row',
    padding: '10@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#475AD7',
    opacity: 1
  },
  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    marginRight: 10,
    color: '#FFF',
  },
  cartContainer:{
    backgroundColor: '#475AD7',
    flex:1,
  },
  cart:{
    backgroundColor:'#FFF',
    padding:'20@vs',
    margin:'20@vs',
    borderRadius:20
  },
  textCart:{
    fontWeight: '400',
    fontSize: 16,
    marginRight: 10,
    color: '#292D32',
  },
  textBoldCart:{
    fontWeight: '600',
    fontSize: 32,
    marginRight: 10,
    color: '#000000',
  },

  title: {
    fontWeight: '500',
    color: '#000000',
    fontSize: 18,
    padding: '15@vs'
},

})