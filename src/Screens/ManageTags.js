import React, { useState } from "react";
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddIcon from "../../Assets/addIcon";
export default function ManageTag() {
    // const navigation = useNavigation();


    return (

        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Manage Tags</Text>
            </View>
            <View style={styles.containerRowTag}>
                <View style={styles.Tagcart}>
                    <Text style={styles.Tagtext}>Allergy</Text>
                </View>
                <View style={styles.Tagcart2}>
                    <Text style={styles.Tagtext}>Full Day</Text>
                </View>
                <View style={styles.Tagcart3}>
                    <Text style={styles.Tagtext}>Subsidy</Text>
                </View>
            </View>
            <View >
                <View style={styles.Tagcart4}>
                    <Text style={styles.Tagtext}>Toddler</Text>
                </View>
            </View>

            <View style={{ alignItems: 'flex-end',flex:1,justifyContent:'flex-end',margin:20 }}>
                <AddIcon />
            </View>

        </View>
    )
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
    containerRowTag: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '60@vs',
    },
    Tagcart: {
        backgroundColor: '#475AD7',
        margin: '5@vs',
        padding: '15@vs',
        borderRadius: 15,
    },
    Tagtext: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFF',
        textAlign: 'center',
        flex: 1,
    },
    Tagcart2: {
        backgroundColor: '#FDC228',
        margin: '5@vs',
        padding: '15@vs',
        borderRadius: 15,
    },
    Tagcart3: {
        backgroundColor: '#47D789',
        margin: '5@vs',
        padding: '15@vs',
        borderRadius: 15,
    },
    Tagcart4: {
        backgroundColor: '#D74747',
        margin: '5@vs',
        padding: '15@vs',
        borderRadius: 15,
        width: 90,
        height: '50@vs',

    },

})