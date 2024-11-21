import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, KeyboardAvoidingView } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function CreateEvent() {
    const [isEventName, setisEventName] = useState(false);
    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [Date, setDate] = useState(false)
    const [selectedStart, setSelectedStart] = useState("");
    const [selectedEnd, setSelectedEnd] = useState("");
    const data = ['Caterpillar', 'Butterfly', 'Test Room'];
    const navigation = useNavigation();
    const handleStartTime = (time) => {
        setSelectedStart(time);
    };

    const handleEndTime = (time) => {
        setSelectedEnd(time);
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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <FlatList
                contentContainerStyle={styles.scrollContent}
                data={[{ key: 'profile' }]}
                renderItem={() => (
                    <>
                        <View style={styles.row} >
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../../../Assets/Frame(6).png')} />
                            </TouchableOpacity>
                            <Text style={styles.text}>Create Event</Text>
                        </View>
                        <View style={styles.textInputContainer}>
                            <View
                                style={[
                                    styles.inputWrapper,
                                    isEventName && styles.inputFocused,
                                ]}
                            >
                                <Image
                                    source={require('../../../Assets/vuesax/user-square.png')}
                                    style={[
                                        styles.inputIcon,
                                        isEventName && styles.iconFocused,
                                    ]}
                                    resizeMode="contain"
                                />
                                <TextInput
                                    style={styles.textInput1}
                                    placeholder="Event Name"
                                    placeholderTextColor="#565656"
                                    onFocus={() => setisEventName(true)}
                                    onBlur={() => setisEventName(false)}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
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
                            <View
                                style={[
                                    styles.inputWrapper,
                                    Date && styles.inputFocused,
                                ]}
                            >
                                <TextInput
                                    style={styles.textInput1}
                                    placeholder="06/ 04/ 2023"
                                    placeholderTextColor="#565656"
                                    onFocus={() => setDate(true)}
                                    onBlur={() => setDate(false)}
                                />
                                <Image
                                    source={require('../../../Assets/Group3.png')}
                                    style={[
                                        styles.inputIcon,
                                        Date && styles.iconFocused,
                                    ]}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.stTime}>
                            <Text style={styles.stText}>Start Time</Text>
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
                                    <View>
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
                                {/* End Time */}
                                <Text style={styles.stText}>End Time</Text>
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
                                    <View>
                                        <View style={styles.Timecontainer}>
                                            <TouchableOpacity
                                                style={[
                                                    styles.timeButton,
                                                    selectedEnd === "AM" && styles.selectedTimeButton,
                                                ]}
                                                onPress={() => handleEndTime("AM")}
                                            >
                                                <Text
                                                    style={[
                                                        styles.timeText,
                                                        selectedEnd === "AM" && styles.selectedTimeText,
                                                    ]}
                                                >
                                                    AM
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={[
                                                    styles.timeButton,
                                                    selectedEnd === "PM" && styles.selectedTimeButton,
                                                ]}
                                                onPress={() => handleEndTime("PM")}
                                            >
                                                <Text
                                                    style={[
                                                        styles.timeText,
                                                        selectedEnd === "PM" && styles.selectedTimeText,
                                                    ]}
                                                >
                                                    PM
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.InputMsg}>
                                <Text style={styles.stakedText}>Notes</Text>
                                <TextInput
                                    style={styles.textInput}
                                    maxLength={150}
                                    placeholder="Type your event description here"
                                    placeholderTextColor={'#565656'}
                                    multiline={true}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('EventSuccessful')} >
                            <Text style={styles.buttonText1}>Done</Text>
                        </TouchableOpacity>
                    </>
                )}
            />

        </KeyboardAvoidingView>
    );
}

export const styles = ScaledSheet.create({
    container: {
        padding: '2@vs',
        backgroundColor: '#FFF',
        flex: 1,
        marginBottom: 10,
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
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    boxContainer: {
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        margin: '6%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    scrollContent: {
        padding: 20,
        justifyContent: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        margin: '10@vs',
        padding: '10@vs',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container1: {
        flex: .7,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    image: {
        width: '120@vs',
        height: '120@vs',
    },
    overlay: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        top: '90@vs',
        right: '90@vs',
    },
    textInputContainer: {
        marginTop: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        justifyContent: 'flex-start',
        borderColor: '#F3F4F6',
        borderWidth: 2,
        marginTop: '20@vs'
    },
    inputFocused: {
        borderColor: '#475AD7',
    },
    iconFocused: {
        tintColor: '#475AD7',
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginHorizontal: '10@vs',
        tintColor: '#7A7A7A',
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
        marginTop: '20@vs'
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
    InputMsg: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        paddingTop: '5@vs',
        marginBottom: '15@vs',
        width: '280@vs',
        height: '150@vs',
        marginTop: '15@vs'
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
    textInput1: {
        flex: 1,
        height: '35@vs',
        color: 'black',
        margin: '3%',
        fontSize: 16,
    },
    textInput2: {
        flex: 1,
        height: '35@vs',
        color: 'black',
        margin: '3%',
        fontSize: 16,
    },
});