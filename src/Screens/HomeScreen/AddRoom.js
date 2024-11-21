import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from "@react-navigation/native";
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

export default function AddRoom() {
    const navigation = useNavigation();
    const [isLastName, setLastName] = useState(false);
    const Tags = ['Allergy', 'Full Day', 'Subside', 'Toddler'];
    const [selectedTag, setSelectedTag] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleTags = (item) => {
        setSelectedTag(item);
    };

    const renderTags = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    styles.tag,
                    selectedTag === item && styles.selectedTag,
                ]}
                onPress={() => handleTags(item)}
            >
                <Text
                    style={[
                        styles.tagText,
                        selectedTag === item && styles.selectedTagText,
                    ]}
                >
                    {item}
                </Text>
            </TouchableOpacity>
        );
    };
    const handleImageUpload = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
        };
        launchImageLibrary({options}, response => {
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else {
            console.log('Image selected: ', response.uri);
          }})
    };

    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Add Room</Text>
            </View>
            <View style={styles.imgContainer}>
                <TouchableOpacity onPress={handleImageUpload}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                    ) : (
                        <Image source={require('../../../Assets/Group36921.png')} />
                    )}
                </TouchableOpacity>

            </View>
            <View style={{ padding: 15, flex: 1 }}>
                <View
                    style={[
                        styles.inputWrapper,
                        isLastName && styles.inputFocused,
                    ]}
                >
                    <Image
                        source={require('../../../Assets/vuesax/user-square.png')}
                        style={[
                            styles.inputIcon,
                            isLastName && styles.iconFocused,
                        ]}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Room Name"
                        placeholderTextColor="#565656"
                        onFocus={() => setLastName(true)}
                        onBlur={() => setLastName(false)}
                    />
                </View>
            </View>
            <View style={styles.Tags}>
                <Text style={styles.textinfo}>Select Room Tags</Text>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={Tags}
                        renderItem={renderTags}
                        keyExtractor={(item) => item}
                        horizontal
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button1} >
                <Text style={styles.buttonText1}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}



export const styles = ScaledSheet.create({

    container: {
        padding: '2@vs',
        flex: 1,
        marginBottom: 10,
        backgroundColor: '#FFF'
    },
    selectedImage: {
        width: '200@vs',
        height: '200@vs',
        borderRadius: 10,
        marginVertical: 20,
      },
      uploadText: {
        fontSize: '16@vs',
        fontWeight: '500',
        color: '#565656',
        textAlign: 'center',
        marginTop: 20,
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
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    Tags: {
        margin: '10@vs',
        padding: '10@vs',
        flex: 2

    },
    textinfo: {
        fontSize: '15@vs',
        fontWeight: '400',
        color: '#000000',
        marginBottom: '10@vs',
    },
    tag: {
        width: '100@vs',
        height: '45@vs',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        justifyContent: 'center',
        margin: 5,
    },
    selectedTag: {
        backgroundColor: '#475AD7',
    },
    tagText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#565656',
        textAlign: 'center',
    },
    selectedTagText: {
        color: '#FFF',
    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        marginBottom: '10@vs',
        paddingVertical: '15@vs',
        marginTop: '20@vs',
        margin: '10@vs'
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },
});