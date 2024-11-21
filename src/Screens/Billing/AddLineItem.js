import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import SentIIcon from "../../../Assets/₹";
import DollarIcon from "../../../Assets/$";
export default function AddLineItem() {
    const navigation = useNavigation();
    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const data = ['Pizza', 'Snack', 'milk'];
    const [search, setSearch] = useState('');
    const [isfocusedDollar, setfocusedDollar] = useState(false);
    const [isfocusedSent, setfocusedSent] = useState(false);
    const handleDollar = () => {
        setfocusedDollar(true);
        setfocusedSent(false);
    };
    const handleSent = () => {
        setfocusedDollar(false);
        setfocusedSent(true);
    };
    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setListVisible(false);
    };

    const handlePress = () => {
        setListVisible(!isListVisible);
    };
    const renderListItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => handleItemSelect(item)}>
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
                <Text style={styles.text}>Add Line Item</Text>
            </View>

            <View style={styles.personInfo}>
                <View style={{}}>
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
                                <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Type</Text>
                            }
                            <Image source={require('../../../Assets/Frame(4).png')} />
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.Input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Discount"
                        placeholderTextColor={'#565656'}

                    />
                </View>
                <View style={styles.Input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Subsidy"
                        placeholderTextColor={'#565656'}

                    />
                </View>
                <View style={styles.inputWrapper}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.stakedText}>Total Amount</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="40"
                            placeholderTextColor="#565656"
                            onChangeText={setSearch}
                            value={search}
                        />
                    </View>
                    {
                        isfocusedDollar ?
                            (<View style={{ flexDirection: 'row', margin: 5 }}>
                                <TouchableOpacity style={styles.Selecteditemdollar}onPress={handleDollar}>
                                    <DollarIcon />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.sent} onPress={handleSent}>
                                    <SentIIcon />
                                </TouchableOpacity>
                            </View>
                            ) :
                            <View style={{ flexDirection: 'row', margin: 5 }}>
                                <TouchableOpacity style={styles.dollar}onPress={handleDollar}>
                                    <DollarIcon />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.Selecteditemsent}onPress={handleSent}>
                                    <SentIIcon />
                                </TouchableOpacity>
                            </View>
                    }
                    
                </View>
                <View style={styles.InputMsg}>
                    <Text style={styles.stakedText}>Description</Text>
                    <TextInput
                        style={styles.textInput}
                        maxLength={150}
                        placeholder="Type your notes here"
                        placeholderTextColor={'#565656'}
                        multiline={true}
                    />
                </View>

            </View>
            <View style={{ flex: 2, marginBottom: '10%' }}>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('GenerateExpensesBilling')} >
                    <Text style={styles.buttonText1}>Save</Text>
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
        height: '50@vs',
        justifyContent: 'center'
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
        color: '#565656',
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
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '280@vs',
        height: '50@vs',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        marginBottom: '10@vs',
        paddingRight: '10@vs',

    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20@vs',
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        borderColor: '#F3F4F6',
        borderWidth: 2,
        padding: '5@vs',
        width: '280@vs',
        height: '60@vs',
        justifyContent: 'space-between'
    },
    Selecteditemdollar:{
        backgroundColor: '#475AD7', 
        borderTopStartRadius: 20, 
        borderBottomStartRadius: 20, 
        padding: 14, 
        justifyContent: 'center' 
    },
    Selecteditemsent:{
        backgroundColor: '#475AD7', 
        borderTopEndRadius: 20, 
        borderBottomEndRadius: 20, 
        padding: 14, 
        justifyContent: 'center' 
    },
    sent:{
      backgroundColor: '#BDBFC2', 
      borderTopEndRadius: 20, 
      borderBottomEndRadius: 20, 
      padding: 15, 
      justifyContent: 'center'
    },
    dollar:{
        backgroundColor: '#BDBFC2', 
        borderTopStartRadius: 20, 
        borderBottomStartRadius: 20, 
        padding: 14, 
        justifyContent: 'center' 
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
        color: 'black',
        fontSize: 16,
      }
});