import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

export default function GenerateExpensesBillingReport() {
    const navigation = useNavigation();
    const [isListVisible, setListVisible] = useState(false);


    const data = ['Pizza', 'Snack', 'milk'];
    const markedDates = {
        '2023-03-06': { marked: true, selected: true, selectedColor: '#475AD7' },
        '2023-03-07': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-08': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-09': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-10': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-11': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-12': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-13': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-14': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-15': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-16': { marked: true, dotColor: 'red', selected: true, selectedColor: 'rgba(71, 90, 215, 0.18)' },
        '2023-03-17': { marked: true, dotColor: 'red', selected: true, selectedColor: '#475AD7' },

    };
    const [selectedItem, setSelectedItem] = useState(null);
    const [search, setSearch] = useState('');
    const handlePress = () => {
        setListVisible(!isListVisible);
    };

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setListVisible(false);
    };

    const renderListItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => handleItemSelect(item)}>
                <Text style={{ color: '#000000', fontSize: 15, fontWeight: '400' }}>{item}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Billing Report</Text>
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
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Daycare Name</Text>
                        }
                        <Image source={require('../../../Assets/Frame(4).png')} />
                    </TouchableOpacity>
                }
            </View>

            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="06/ 04 / 2023"
                        placeholderTextColor="#565656"
                        onChangeText={setSearch}
                        value={search}
                    />
                </View>
                <TouchableOpacity>
                    <Icon name="calendar-alt" size={30} color='#475AD7' />
                </TouchableOpacity>
            </View>
            <Calendar
                current={'2023-03-6'}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    selectedDayBackgroundColor: 'green',
                    selectedDayTextColor: '#ffffff',
                }}
                markedDates={markedDates}
            />
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('GenerateExpensesReports')} >
                <Text style={styles.buttonText1}>Generate</Text>
            </TouchableOpacity>
        </View>
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
        marginTop: '50@vs',
        marginBottom: '20@vs',
        margin: 10
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