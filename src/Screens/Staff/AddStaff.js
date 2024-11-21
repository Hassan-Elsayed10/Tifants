import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, KeyboardAvoidingView } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function AddStaff() {
      const navigation = useNavigation();

    const [isFirstName, setFirstName] = useState(false);
    const [isPhoneFocused, setPhoneFocused] = useState(false);
    const data = ['Father', 'Mother', 'Brother', 'Sister'];
    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isEmailFocused, setEmailFocused] = useState(false);

    const handleToggle = () => {
        setIsFocused(!isFocused);
    }
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
                            <TouchableOpacity onPress={()=> navigation.goBack()}>
                                <Image source={require('../../../Assets/Frame(6).png')} />
                            </TouchableOpacity>
                            <Text style={styles.text}>Add Staff</Text>
                        </View>

                        <View style={styles.textInputContainer}>
                            <View
                                style={[
                                    styles.inputWrapper,
                                    isFirstName && styles.inputFocused,
                                ]}
                            >
                                <Image
                                    source={require('../../../Assets/vuesax/frame.png')}
                                    style={[
                                        styles.inputIcon,
                                        isFirstName && styles.iconFocused,
                                    ]}
                                    resizeMode="contain"
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Staff Name"
                                    placeholderTextColor="#565656"
                                    onFocus={() => setFirstName(true)}
                                    onBlur={() => setFirstName(false)}
                                />
                            </View>
                            <View
                                style={[
                                    styles.inputWrapper,
                                    isEmailFocused && styles.inputFocused,
                                ]}
                            >
                                <Image
                                    source={require('../../../Assets/vuesax/sms.png')}
                                    style={[
                                        styles.inputIcon,
                                        isEmailFocused && styles.iconFocused,
                                    ]}
                                    resizeMode="contain"
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email Address"
                                    placeholderTextColor="#565656"
                                    onFocus={() => setEmailFocused(true)}
                                    onBlur={() => setEmailFocused(false)}
                                />
                            </View>
                            <View
                                style={[
                                    styles.inputWrapper,
                                    isPhoneFocused && styles.inputFocused,
                                ]}
                            >
                                <Image
                                    source={require('../../../Assets/vuesax/call.png')}
                                    style={[
                                        styles.inputIcon,
                                        isPhoneFocused && styles.iconFocused,
                                    ]}
                                    resizeMode="contain"
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Mobile Number"
                                    placeholderTextColor="#565656"
                                    onFocus={() => setPhoneFocused(true)}
                                    onBlur={() => setPhoneFocused(false)}
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
                                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Select Room</Text>
                                        }
                                        <Image source={require('../../../Assets/Frame(4).png')} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                        <View style={styles.togglContainer}>
                            <Text style={styles.toggelText}>Is Admin</Text>
                            <TouchableOpacity onPress={handleToggle}>
                                <Icon
                                    name={isFocused ? 'toggle-on' : 'toggle-off'}
                                    size={30}
                                    color={isFocused ? '#475AD7' : '#D9D9D9'}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:1,justifyContent:'flex-end'}}>
                            <TouchableOpacity style={styles.button1} >
                                <Text style={styles.buttonText1}>Save</Text>
                            </TouchableOpacity>
                        </View>

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
    textInput: {
        flex: 1,
        height: '35@vs',
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
    togglContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: "12@vs",
        alignItems: 'center',
        marginTop: '10@vs',
        padding: '10@vs',
        justifyContent: 'center',
        marginBottom:'100@vs'
    },
    toggelText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#565656',
        flex: 1,

    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
        marginTop: '50@vs'
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
});