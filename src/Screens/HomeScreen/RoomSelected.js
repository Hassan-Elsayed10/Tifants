import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const RoomSelected = () => {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.container}>
            <View style={styles.headercontainer} >
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image source={require("../../../Assets/Group_36703.png")} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.roomContainer}>
                        <Text style={styles.headertext}>{item.name}</Text>
                        <Image source={require("../../../Assets/Frame(4).png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddStudent')}>
                    <Image source={require("../../../Assets/vuesax/profile-add.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Image
                        source={require('../../../Assets/vuesax/search-normal.png')}
                        style={styles.Iconsearch}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Student’s Name"
                        placeholderTextColor="#565656"
                        onChangeText={setSearch}
                        value={search}
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        source={require('../../../Assets//Group36672.png')}
                        style={styles.Iconsearch}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../../../Assets//Group1678.png')} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Nothing Here</Text>
                <Text style={styles.subtitle}>Tap add button to add new students to the Test Room</Text>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    headercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    roomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertext: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        marginRight: 10,
        color: '#000000',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 12,
        backgroundColor: '#F3F4F6',
        margin: '5%',
        justifyContent: 'space-between',
        borderColor: '#F3F4F6',
        borderWidth: 2,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
        color: '#000000',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#454242',
        textAlign: 'center'
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


});
export default RoomSelected;