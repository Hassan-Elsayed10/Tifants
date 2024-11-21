import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function SignInStudent() {
    const [isFocused, setIsFocused] = useState(false);
    const [search, setSearch] = useState('');
    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedStart, setSelectedStart] = useState("");
    const data = ['Caterpillar', 'Butterfly', 'Test Room'];

    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;

    const handleToggle = () => {
        setIsFocused(!isFocused);
    };
    const handleStartTime = (time) => {
        setSelectedStart(time);
    };

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
                <Text style={styles.text}>Sign In</Text>
            </View>
            <Text style={styles.selectedText}>1 Student selected</Text>
            <View style={styles.stdentContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.stText}>{item.name}</Text>
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

            <View style={styles.stTime}>
                <View style={styles.timeContainer}>

                    <View style={styles.boxContainer}>
                        <TextInput
                            style={styles.textInput2}
                            placeholder="00"
                            placeholderTextColor="#7C82A1"
                            maxLength={2}
                        />
                    </View>
                    <Text style={styles.dot}>:</Text>
                    <View style={styles.boxContainer}>
                        <TextInput
                            style={styles.textInput2}
                            placeholder="00"
                            placeholderTextColor="#7C82A1"
                            maxLength={2}
                        />
                    </View>
                    <View style={{ alignItems: 'center', padding: 20 }}>
                        <View style={styles.Timecontainer}>
                            <TouchableOpacity
                                style={[
                                    styles.timeButton,
                                    selectedStart === "AM" && styles.selectedTimeButton,
                                ]}
                                onPress={() => handleStartTime("AM")}
                            >
                                <Text
                                    style={[
                                        styles.timeText,
                                        selectedStart === "AM" && styles.selectedTimeText,
                                    ]}
                                >
                                    AM
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.timeButton,
                                    selectedStart === "PM" && styles.selectedTimeButton,
                                ]}
                                onPress={() => handleStartTime("PM")}
                            >
                                <Text
                                    style={[
                                        styles.timeText,
                                        selectedStart === "PM" && styles.selectedTimeText,
                                    ]}
                                >
                                    PM
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.togglContainer}>
                <Text style={styles.toggelText}>Mark student as absent</Text>
                <TouchableOpacity onPress={handleToggle}>
                    <Icon
                        name={isFocused ? 'toggle-on' : 'toggle-off'}
                        size={30}
                        color={isFocused ? '#475AD7' : '#D9D9D9'}
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, margin: 5, padding: 5 }}>
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
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Select Rooms</Text>
                        }
                        <Image source={require('../../../Assets/Frame(4).png')} />
                    </TouchableOpacity>
                }
            </View>
            <Text style={{ fontWeight: '400', color: '#000000', fontSize: 18, padding: 15 }}>Signed In By</Text>

            <View style={styles.imageContainer}>
                <Image source={require('../../../Assets/Image(2).png')} />
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#000000', marginLeft: 10 }}>Jeniffer Winget</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'rgba(0, 0, 0, 0.6)', marginLeft: 10 }}>ertuken@gmail.com</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SignIns')} >
                <Text style={styles.buttonText1}>Sign Student In</Text>
            </TouchableOpacity>
        </View>
    );

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
    stdentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '30@vs',
        marginTop: '5@vs'
    },

    stText: {
        fontSize: '16@vs',
        fontWeight: '600',
        color: '#000000',
        margin: '2@vs',
        textAlign: 'center'
    },
    image: {
        width: '30@vs',
        height: '30@vs'
    },
    dayText: {
        fontSize: '16@vs',
        fontWeight: '600',
        color: '#000000',
        marginLeft: '30@vs',
        marginTop: '20@vs'
    },
    textcol: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: '15@vs'
    },
    HorizontalLine: {
        height: '60%',
        width: 1,
        backgroundColor: '#B7B7B7',
        margin: 15
    },
    dateRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateText: {
        fontSize: '30@vs',
        fontWeight: '700',
        color: '#000000'
    },
    timenum: {
        fontSize: '18@vs',
        fontWeight: '600',
        color: '#000000'
    },
    timeText: {
        fontSize: '18@vs',
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: '400',
        textAlign: 'center'

    },

    togglContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5@vs',
        justifyContent: 'center',
    },
    toggelText: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        flex: 1,

    },
    imageContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: '15@vs',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        margin: '5%',
        justifyContent: 'space-between',
        borderColor: '#F3F4F6',
        borderWidth: 2,
    },
    stTime: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeButton: {
        borderRadius: 10,
        padding: 5,
        backgroundColor: "#F3F4F6",
    },
    selectedTimeButton: {
        backgroundColor: "#475AD7",
    },
    timeText: {
        fontSize: 20,
        margin: 5,
        flex: 1,
        color: "#000000",
        textAlign: "center",
    },
    selectedTimeText: {
        color: "#FFFFFF",
    },
    stText: {
        fontWeight: '400',
        fontSize: 18,
        color: '#000000'
    },
    dot: {
        fontWeight: '400',
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Timecontainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        flex: 1,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxContainer: {
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        margin: '6%',
        alignItems: 'center',
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
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
        marginTop: '20@vs',
        marginBottom: '20@vs',
        margin: 10
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
})