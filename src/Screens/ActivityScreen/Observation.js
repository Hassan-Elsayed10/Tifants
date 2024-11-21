import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function Observation() {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [isListStaffVisible, setListStaffVisible] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [selectedStart, setSelectedStart] = useState("");
    const [search, setSearch] = useState('');

    const staff = ['walled', 'wessam', 'hassan'];

    const handleToggle = () => {
        setIsFocused(!isFocused);
    };
    const handleStartTime = (time) => {
        setSelectedStart(time);
    };


    const handleStaffPress = () => {
        setListStaffVisible(!isListStaffVisible);
    };


    const handleStaffSelect = (item) => {
        setSelectedStaff(item);
        setListStaffVisible(false);
    };

    const renderListStaff = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => handleStaffSelect(item)}>
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
                <Text style={styles.text}>Observation</Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('SelectionObservation')}>
            <Text style={styles.selectedText}>1 Student selected</Text>
            </TouchableOpacity>          

            <View style={styles.stdentContainer}>
                <Image source={require('../../../Assets/Image.png')} style={styles.image} />
                <Text style={styles.stText}>  Julia Test</Text>
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
            <View style={{ margin: 5, padding: 5 }}>
                {isListStaffVisible ? (
                    <FlatList
                        data={staff}
                        renderItem={renderListStaff}
                        keyExtractor={(item) => item}
                    />
                ) :
                    <TouchableOpacity style={styles.selectContainer} onPress={handleStaffPress}>
                        {selectedStaff ?
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>{selectedStaff}</Text>
                            :
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Staff Present</Text>
                        }
                        <Image source={require('../../../Assets/Frame(4).png')} />
                    </TouchableOpacity>
                }
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.InputMsg}>
                    <Text style={styles.stakedText}>Description</Text>
                    <TextInput
                        style={styles.textInput}
                        maxLength={150}
                        placeholder="Type your message here...."
                        placeholderTextColor={'#565656'}
                        multiline={true}
                    />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>

                        <TouchableOpacity style={styles.wrrapborder}>
                            <View style={styles.wrrapIcon}>
                                <Image source={require('../../../Assets/vuesax/cameras.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.togglContainer}>
                <Text style={styles.toggelText}>Staff only - Requires Admin Approval for parents</Text>
                <TouchableOpacity onPress={handleToggle} >
                    <Icon
                        name={isFocused ? 'toggle-on' : 'toggle-off'}
                        size={30}
                        color={isFocused ? '#475AD7' : '#D9D9D9'}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button2}
                onPress={() => handleButtonPress('Button 2')}
            >
                <Text style={styles.buttonText2}>Add Milestones</Text>
            </TouchableOpacity>
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
        color: '#565656'
    },
    wrrapborder: {
        backgroundColor: '#FBBC05',
        width: '35@vs',
        height: '35@vs',
        borderRadius: 4,
        margin: '5@vs'

    },
    wrrapIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrrapborder3: {
        backgroundColor: '#2AC171',
        width: '35@vs',
        height: '35@vs',
        borderRadius: 4,
        margin: '5@vs'
    },
    togglContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5@vs',
        justifyContent: 'center',
    },
    toggelText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
        flex: 1,
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
    button2: {
        backgroundColor: '#FFFFF',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
        borderWidth:1,
        borderColor:'#475AD7',
        marginTop: '20@vs',
        margin: 10,
      },
      buttonText2: {
        fontSize: 16,
        color: '#475AD7',
        textAlign: 'center',
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