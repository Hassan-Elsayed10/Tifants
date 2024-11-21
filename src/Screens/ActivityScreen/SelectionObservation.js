import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import students from '../../../Data/students';
import { CheckBox } from 'react-native-elements';

import ActivitySelection from '../../Component/ActivitySeclection';
export default function SelectionObservation() {
      const navigation = useNavigation();
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [signinOnlyChecked, setSigninOnlyChecked] = useState(false);

    const handleCheckboxToggle = (itemId) => {
        const selectedSet = new Set(selectedItems);
        if (selectedSet.has(itemId)) {
            selectedSet.delete(itemId);
        } else {
            selectedSet.add(itemId);
        }
        setSelectedItems(Array.from(selectedSet));
    };

    const handleSelectAllToggle = () => {
        if (selectAllChecked) {
            setSelectedItems([]);
        } else {
            setSelectedItems(students.map((item) => item.id));
        }
        setSelectAllChecked(!selectAllChecked);
    };

    const handleSigninOnlyToggle = () => {
        if (signinOnlyChecked) {
            setSelectedItems([]);
        } else {
            const signinedItems = students.filter((item) => item.status === 'signed-in').map((item) => item.id);
            setSelectedItems(signinedItems);
        }
        setSigninOnlyChecked(!signinOnlyChecked);
    };
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
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleSelectAllToggle}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            checked={selectAllChecked}
                            onPress={handleSelectAllToggle}
                            containerStyle={styles.checkbox}
                        />
                        <Text style={styles.checkboxLabel}>Select All</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSigninOnlyToggle}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            checked={signinOnlyChecked}
                            onPress={handleSigninOnlyToggle}
                            containerStyle={styles.checkbox}
                            style={{ borderColor: '#475AD7' }}
                        />
                        <Text style={styles.checkboxLabel}>Select Signed In</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={students}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>

                        <CheckBox
                            checked={selectedItems.includes(item.id)}
                            onPress={() => handleCheckboxToggle(item.id)}
                            checkedColor="#475AD7"
                        />
                        <ActivitySelection item={item} />
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('Activitys')} >
                <Text style={styles.buttonText1}>Next</Text>
            </TouchableOpacity>
        </View>

    )
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
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10@vs',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        padding: 0,
        marginRight: '5@s',
        marginLeft: '5@s',

    },
    checkboxLabel: {
        fontSize: '18@s',
        fontWeight: '400',
        color: '#000',
    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
        marginTop: '20@vs',
        marginBottom: '50@vs',
        margin: 10
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
})