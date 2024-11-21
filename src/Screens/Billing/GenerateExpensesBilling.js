import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import ProgressImage from '../../../Assets/img1';
import UnpaidImage from '../../../Assets/img2';
import students from '../../../Data/students';
import StudentBilling from '../../Component/StudentBilling';
import ReportIcon from '../../../Assets/Report';
export default function GenerateExpensesBilling() {
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
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
                <TouchableOpacity onPress={() => navigation.navigate('Billings')}>
                    <Image source={require("../../../Assets/receipt-item.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.warning}>
                <Image source={require("../../../Assets/vuesax/info-circle.png")} />
                <Text style={styles.warningText}>Your billing account is not setup yet.</Text>
            </View>
            <View style={{alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.buttonText1}>Set Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.wrappContainer}>
                <View  style={styles.wrappimg}>
                <ProgressImage/>
                    <View style={styles.wrapptext}>
                        <Text style={styles.title}>In Progress</Text>
                        <Text style={styles.subtitle}>monthly salary</Text>
                    </View>
                    <Text style={styles.price}>$500</Text>
                </View>
            </View>
            <View style={styles.wrappContainer}>
                <View  style={styles.wrappimg}>
                <UnpaidImage/>
                    <View style={styles.wrapptext}>
                        <Text style={styles.title}>Unpaid</Text>
                        <Text style={styles.subtitle}>monthly salary</Text>
                    </View>
                    <Text style={styles.price}>$500</Text>
                </View>
            </View>
            <View style={styles.subheader}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>Balance</Text>
            </View>

            <FlatList
                data={students}
                renderItem={({ item }) => <StudentBilling item={item} />}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={{justifyContent:'flex-end',flex:1,alignItems:'flex-end'}} onPress={()=>navigation.navigate('GenerateExpensesBillingReport')}>
                 <ReportIcon/>

            </TouchableOpacity>
        </View>
    );

}

export const styles = ScaledSheet.create({
    container: {
        padding: '2@vs',
        backgroundColor: '#FFF',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        margin: '10@vs',
        padding: '10@vs',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
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
        color: '#000000',
    },
    warning: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#D74747',
        padding:10
    },
    warningText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFF',
    },

    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        margin: 10,
        padding: 10
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
    wrappContainer:{
        backgroundColor:'#F3F4F6',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:12,
        margin:'10@vs',
        height:'10%',
    },
    wrappimg:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flex:1
    },
    title:{
        fontSize: 18,
        color: '#000000',
        fontWeight: '500'
    },
    subtitle:{
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: '400'
    },
    price:{
        fontSize: 20,
        color: '#000000',
        fontWeight: '500'
    },
    subheader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'10@vs'
    },
})