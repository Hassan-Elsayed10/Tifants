import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, TextInput,FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function NewMessage() {
    const navigation = useNavigation();
    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const data = ['Test Room', 'Item 2', 'Item 3', 'Item 4'];
    // const { params } = useRoute();
    // let item = params;

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
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>New Message</Text>
            </View>
            <Text style={styles.selectedText}> Staff selected</Text>
            <View style={styles.stdentContainer}>
                <Image source={require('../../../Assets/Image.png')} style={styles.image} />
                <Text style={styles.stText}>Test Staff</Text>
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
                            <Text style={{ color: '#565656', fontSize: 16, fontWeight: '500', flex: 1 }}>Message</Text>


                        }

                        <Image source={require('../../../Assets/Frame(4).png')} />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.InputMsg}>
                <Text style={styles.stakedText}>Notes</Text>
                <TextInput
                    style={styles.textInput}
                    maxLength={150}
                    placeholder="Type your notes here"
                    placeholderTextColor={'#565656'}
                    multiline={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button1}

                >
                    <Text style={styles.buttonText1}>Send</Text>
                </TouchableOpacity>
            </View>

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

    buttonContainer: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: '30@vs',
        paddingHorizontal: '20@vs',
        width: '100%',
    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
    },
    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
    selectContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: "12@vs",
        alignItems: 'center',
        margin: '20@vs',
        padding: '15@vs',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputMsg: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        paddingTop: '5@vs',
        marginBottom: '15@vs',
        width: '280@vs',
        height: '150@vs',
        margin:'20@vs'
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
})