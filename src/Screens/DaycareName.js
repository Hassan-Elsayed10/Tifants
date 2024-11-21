import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function DaycareName() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.texth}>Bloomington Academy</Text>
            </View>
            <View style={styles.CartContainer}>
                <View style={styles.Cart}>
                    <View style={styles.imgcontainer}>
                        <Image source={require('../../Assets/MenuIcon/profile-2user.png')} />
                    </View>
                    <Text style={styles.number}>15</Text>
                    <Text style={styles.type}>Parents</Text>
                </View>
                <View style={styles.Cart1}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={styles.imgcontainer1}>
                            <Image source={require('../../Assets/MenuIcon/profile.png')} />
                        </View>
                        <Text style={styles.percent}>-5%</Text>
                    </View>
                    <Text style={styles.number}>30</Text>
                    <Text style={styles.type}>Students</Text>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <View style={styles.Cart2}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={styles.imgcontainer1}>
                            <Image source={require('../../Assets/MenuIcon/people.png')} />
                        </View>
                        <Text style={styles.percent}>25%</Text>
                    </View>
                    <Text style={styles.number}>3</Text>
                    <Text style={styles.type}>Staff</Text>
                </View>
            </View>
            <View style={{flex:1,marginTop:20}}>
                <TouchableOpacity style={styles.menuContainer} >
                    <Image source={require('../../Assets/MenuIcon/timer-pause.png')} />
                    <Text style={styles.text}>WaitList</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuContainer} >
                    <Image source={require('../../Assets/MenuIcon/archive-book.png')} />
                    <Text style={styles.text}>Newslatter</Text>
                </TouchableOpacity>
                <View style={styles.menuContainer}>
                    <Image source={require('../../Assets/MenuIcon/house.png')} />
                    <Text style={styles.text}>Daycare Profile</Text>
                </View>

                <TouchableOpacity style={styles.menuContainer} >
                    <Image source={require('../../Assets/MenuIcon/Group13.png')} />
                    <Text style={styles.text}>Daycare Settings</Text>
                </TouchableOpacity>
                <View style={styles.menuContainer}>
                    <Image source={require('../../Assets/MenuIcon/refresh-2.png')} />
                    <Text style={styles.text}>Switch Daycare</Text>
                </View>
            </View>



        </ScrollView>
    )
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex:1,
    },
    texth: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1,
    },
    CartContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5

    },
    Cart: {
        backgroundColor: '#D74747',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#D74747',
        padding: 25,
        flex: 1,
        marginLeft: 5
    },
    Cart1: {
        backgroundColor: '#475AD7',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#475AD7',
        padding: 25,
        flex: 1,
        marginLeft: 5
    },
    Cart2: {
        backgroundColor: '#0B8174',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#0B8174',
        padding: 25,
        marginLeft: '10@vs',
        marginRight: '150@vs',
        marginTop: 10
    },
    imgcontainer: {
        backgroundColor: '#FFF',
        borderRadius: 60,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 70,
    },
    imgcontainer1: {
        backgroundColor: '#FFF',
        borderRadius: 60,
        padding: 15,
        marginRight: 25
    },
    number: {
        fontSize: 22,
        fontWeight: '500',
        color: '#FFF',
        flex: 1
    },
    type: {
        fontSize: 18,
        fontWeight: '400',
        color: '#E6E6E6',
        flex: 1
    },
    percent: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFF',
        flex: 1
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#222222',
        marginLeft: 20,
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 40
    },

})