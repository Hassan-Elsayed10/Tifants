import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Dimensions, SafeAreaView } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DollarIcon from "../../../Assets/$";
import SentIIcon from "../../../Assets/₹";
export default function EditInvoice() {
    const navigation = useNavigation();
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
    return (
        <ScrollView style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Edit Invoice</Text>
                <TouchableOpacity>
                    <Text style={styles.savetext}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imgContainer}>
                <Image source={require('../../../Assets/Image.png')} />
                <Text style={styles.textimg}> Julia Test</Text>
            </View>
            <View style={styles.personInfo}>
                <View style={styles.inputWrapper}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.stakedText}>Invoice Due Date</Text>

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
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.stakedText}>Date of Service Start</Text>

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
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.stakedText}>Date of Service End</Text>

                        <TextInput
                            style={styles.searchInput}
                            placeholder="25/ 03 / 2023"
                            placeholderTextColor="#565656"
                            onChangeText={setSearch}
                            value={search}
                        />
                    </View>
                    <TouchableOpacity>
                        <Icon name="calendar-alt" size={30} color='#475AD7' />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'flex-start',marginBottom:10}}>
                <Text style={styles.texttitle}>Invoice Details</Text>

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
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus pellentesque laoreet."
                        placeholderTextColor={'#565656'}
                        multiline={true}
                    />
                </View>

            </View>
            <View style={{ marginBottom:50}}>
                    <Text style={styles.buttonText1}>Parents can pay invoice online through mobile or web</Text>
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
    texttitle:{
        fontSize: 18,
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
        height: '110@vs'
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


    buttonText1: {
        fontSize: 16,
        color: '#3D3D3D',
        textAlign: 'center',
        fontWeight: '400'
    },
    imgContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 2,
        margin: '10@vs',
        padding: '10@vs'
    },
    textimg: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        flex: 1
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20@vs',
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        justifyContent: 'space-between',
        borderColor: '#F3F4F6',
        borderWidth: 2,
        padding: '5@vs',
        width: '280@vs',
        height: '60@vs'
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
});