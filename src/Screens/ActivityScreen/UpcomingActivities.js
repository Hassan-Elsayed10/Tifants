import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
export default function UpcomingActivities() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Upcoming Activities</Text>
            </View>
            <View style={styles.imgcontainer}>
                <Image source={require('../../../Assets/Group36646.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Nothing Here</Text>
                <Text style={styles.subtitle}>There are currently no upcoming activities to view</Text>
            </View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText1}>Go Back</Text>
            </TouchableOpacity>
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
        margin: '10@vs',
        padding: '10@vs',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom:'20@vs',
        flex:1
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    imgcontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textContainer:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'700',
        textAlign:'center',
        color:'#000000'
    },
    subtitle:{
        fontSize:16,
        fontWeight:'400',
        textAlign:'center',
        color:'#000000'
    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '30@vs',
        paddingVertical: '15@vs',
        margin:10
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
});