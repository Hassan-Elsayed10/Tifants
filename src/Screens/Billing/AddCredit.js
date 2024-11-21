import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function AddCredit() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Add Credit</Text>
                {/* <TouchableOpacity>
                    <Text style={styles.savetext}>Save</Text>
                </TouchableOpacity> */}
            </View>
            <View style={styles.personInfo}>
                <View style={styles.Input}>
                    <Text style={styles.stakedText}>Amount</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Tap to add"
                        placeholderTextColor={'#565656'}

                    />
                </View>

                <View style={styles.InputMsg}>
                    <Text style={styles.stakedText}>Notes</Text>
                    <TextInput
                        style={styles.textInput}
                        maxLength={150}
                        placeholder="Type your notes here"
                        placeholderTextColor={'#565656'}
                        multiline={true}
                    />
                </View>

            </View>
            <View style={{ flex: 2,marginTop:'60%'}}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('AddLineItem')} >
                    <Text style={styles.buttonText1}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        alignItems: 'center',
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    savetext: {
        color: '#475AD7',
        fontSize: '15@vs',
        fontWeight: '400'
    },


    personInfo: {
        flex: 2,
        margin: '10@vs',
        padding: '10@vs'
    },

    Input: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        marginBottom: '15@vs',
        width: '280@vs',
        height: '50@vs'

    },
    InputMsg: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        paddingTop: '5@vs',
        marginBottom: '15@vs',
        width: '280@vs',
        height: '150@vs'
    },

    stakedText: {
        fontSize: '11@vs',
        fontWeight: '400',
        color: '#ACACAC',

    },
    textInput: {
        fontSize: '13@vs',
        fontWeight: '500',
        color: '#565656'
    },

    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        paddingVertical: '15@vs',
        margin: 10,
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },

});