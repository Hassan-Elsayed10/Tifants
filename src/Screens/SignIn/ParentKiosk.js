import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import StudentSign from '../../Component/StudentSign';
import students from '../../../Data/students';
export default function ParentKiosk() {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SelectRoom')} >
                    <View style={styles.roomContainer}>
                        <Text style={styles.headertext}>Parent Kiosk</Text>
                    </View>
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
            <FlatList
                data={students}
                renderItem={({ item }) => <StudentSign item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
const styles = ScaledSheet.create({
    container: {
        padding: '5@vs',
        backgroundColor: '#FFF',
        flex: 1,

    },
    roomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 100
    },
    headertext: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        marginRight: 10,
        color: '#000000',
    },
    row: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    perviewtext: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    SignContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    signText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#565656'
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
    line: {
        height: 2,
        backgroundColor: '#475AD7',
        marginTop: 5,
    },
    SignContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    signText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#565656',
    },
    selectedSignText: {
        color: '#475AD7',
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
