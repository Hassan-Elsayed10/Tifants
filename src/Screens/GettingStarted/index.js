import React, { useState } from "react";
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function GettingStarted() {
    const navigation = useNavigation();

    
    return (

        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Getting Started</Text>
            </View>
            <View style={styles.Device}>
                <TouchableOpacity style={styles.togglContainer}>
                    <Text style={styles.toggelText}>Add Student</Text>
                    <Image source={require('../../../Assets/chevron-left.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.Device}>
                <TouchableOpacity style={styles.togglContainer}>
                    <Text style={styles.toggelText}>Add Room</Text>
                    <Image source={require('../../../Assets/chevron-left.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>Invite parents</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity style={styles.button1}  >
                    <Text style={styles.buttonText1}>Post new student activities</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Sign In - Out student by parent</Text>
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
    opacityContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set opacity value as desired
    },
    row: {
        flexDirection: 'row',
        margin: '10@vs',
        padding: '10@vs',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '20@vs',
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1,
    },

    Device: {
        alignItems: 'flex-start',
        margin: '5@vs',
        padding: '5@vs',
    },
    togglContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: '12@vs',
        alignItems: 'center',
        marginTop: '10@vs',
        padding: '20@vs',
        justifyContent: 'center',
    },
    toggelText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#565656',
        flex: 1,
    },
    button: {
        borderColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        borderWidth: 1,
        padding: '15@vs',
        margin: '20@vs'
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
        margin: '20@vs'
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500',
    },
});