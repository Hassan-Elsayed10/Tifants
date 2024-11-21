import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StaffData from '../../../Data/StaffData';
import StaffHome from '../../Component/StaffHome';
const Staff = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={require("../../../Assets/Frame(6).png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('SelectRoom')}>
                    <View style={styles.roomContainer}>
                        <Text style={styles.headertext}>All Rooms</Text>
                        <Image source={require("../../../Assets/Frame(4).png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('AddStaff')}>
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
                        placeholder="Search Staff Name"
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
                data={StaffData}
                renderItem={({ item }) => <StaffHome item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
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
    searchInput: {
    }
});
export default Staff;