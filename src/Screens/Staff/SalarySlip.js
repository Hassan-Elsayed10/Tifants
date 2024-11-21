import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function SalarySlip() {
    const navigation = useNavigation();
    const [isListVisible, setListVisible] = useState(false);
    const [isListQuantityVisible, setListQuantityVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const [Rate, setRate] = useState('');
    const [Subtotal, setSubtotal] = useState('');
    const [Total, setTotal] = useState('');
    const [Date, setDate] = useState('');
    const [search, setSearch] = useState('');


    const Quantity = ['1', '4', '3'];

    const data = ['Pizza', 'Snack', 'milk'];


    const handlePress = () => {
        setListVisible(!isListVisible);
    };
    

    const handleQuantityPress = () => {
        setListQuantityVisible(!isListQuantityVisible);
    };

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setListVisible(false);
    };

    const handleQuantitySelect = (item) => {
        setSelectedQuantity(item);
        setListQuantityVisible(false);
    };
    const renderListItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => handleItemSelect(item)}>
                <Text style={{ color: '#000000', fontSize: 15, fontWeight: '400' }}>{item}</Text>
            </TouchableOpacity>
        );
    };
    
    const renderListQuantity = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => handleQuantitySelect(item)}>
                <Text style={{ color: '#000000', fontSize: 15, fontWeight: '400' }}>{item}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Generate Salary Slip</Text>
            </View>
            <View style={{ margin: 5, padding: 5 }}>
                {isListVisible ? (
                    <FlatList
                        data={data}
                        renderItem={renderListItem}
                        keyExtractor={(item) => item}
                    />
                ) :
                    <TouchableOpacity style={styles.selectContainer} onPress={handlePress}>
                        {selectedItem ?
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>{selectedItem}</Text>
                            :
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Employee ID</Text>
                        }
                        <Image source={require('../../../Assets/Frame(4).png')} />
                    </TouchableOpacity>
                }
            </View>
            <View style={{ margin: 5, padding: 5 }}>
                {isListQuantityVisible ? (
                    <FlatList
                        data={Quantity}
                        renderItem={renderListQuantity}
                        keyExtractor={(item) => item}
                    />
                ) :
                    <TouchableOpacity style={styles.selectContainer} onPress={handleQuantityPress}>
                        {selectedQuantity ?
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>{selectedQuantity}</Text>
                            :
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Calculate</Text>
                        }
                        <Image source={require('../../../Assets/Frame(4).png')} />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Rate"
                        placeholderTextColor="#565656"
                        onChangeText={setRate}
                        value={Rate}
                    />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="16/ 03 / 2023"
                        placeholderTextColor="#565656"
                        onChangeText={setSearch}
                        value={search}
                    />
                </View>
                <TouchableOpacity>
                    <Icon name="calendar-alt" size={30} color='#475AD7' />
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="16/ 03 / 2023"
                        placeholderTextColor="#565656"
                        onChangeText={setDate}
                        value={Date}
                    />
                </View>
                <TouchableOpacity>
                    <Icon name="calendar-alt" size={30} color='#475AD7' />
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Subtotal"
                        placeholderTextColor="#565656"
                        onChangeText={setSubtotal}
                        value={Subtotal}
                    />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Total"
                        placeholderTextColor="#565656"
                        onChangeText={setTotal}
                        value={Total}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('homeActivity')} >
                <Text style={styles.buttonText1}>Add Activity</Text>
            </TouchableOpacity>
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
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    selectedText: {
        fontSize: '16@vs',
        fontWeight: '400',
        color: '#000000',
        textAlign: 'left',
        marginLeft: '20@vs',
    },
    selectContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: "12@vs",
        alignItems: 'center',
        padding: '10@vs',
        height: '50@vs',
        width: '100%'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        margin: '3%',
        justifyContent: 'space-between',
        borderColor: '#F3F4F6',
        borderWidth: 2,
        padding: '5@vs'
    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
        marginTop: '20@vs',
        marginBottom:'50@vs',
        margin:10
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
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