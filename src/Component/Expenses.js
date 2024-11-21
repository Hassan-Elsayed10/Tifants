
import React, { useState } from 'react';
import { Image, Text, View, } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
export default function ExpensesComponent({item}) {
    return (
        <View style={styles.Expensescontainer}>
            <View style={styles.ExpensesCart}>
                <View style={styles.img}>
                    <Image source={item.image} />
                </View>
                <View style={styles.colContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rentText}>{item.name}</Text>
                        <Text style={styles.rentText}>{item.price}</Text>
                    </View>
                    <Text style={styles.billtext}>{item.status}</Text>
                    <View style={styles.verticleLine}></View>
                    <View style={styles.rowContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.billtext}>4% higher</Text>
                            <Image source={require("../../Assets/arrow.png")} />
                        </View>
                        <Text style={styles.billtext}>{item.precent}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export const styles = ScaledSheet.create({
    Expensescontainer: {
        flex: 1,
        margin:10
    },
    verticleLine: {
        height: 1,
        width: "90%",
        backgroundColor: '#B7B7B7',
        margin: 15
    },
    title: {
        fontWeight: '500',
        color: '#000000',
        fontSize: 18,
        padding: '15@vs'
    },
    rentText: {
        fontWeight: '500',
        color: '#000000',
        fontSize: 18,
    },
    img: {
        backgroundColor: '#F3F4F6',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 15,
        flex: .4,
        marginLeft: '10@vs'
    },
    ExpensesCart: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    colContainer: {
        flex: 1,
        marginLeft: '10@vs',
        marginRight: '10@vs'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    billtext: {
        fontWeight: '400',
        color: '#6C6C6C',
        fontSize: 12,
    },
})