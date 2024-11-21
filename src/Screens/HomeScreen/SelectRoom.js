import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Room from "../../Component/Room";
import RoomData from "../../../Data/RoomData";
import { useNavigation } from "@react-navigation/native";
export default function SelectRoom() {
    const navigation = useNavigation();
    const Tags = ['Allergy', 'Full Day', 'Subside', 'Toddler'];
    const [selectedTag, setSelectedTag] = useState('');

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
    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.SelectContainer}>
                        <Text style={styles.headertext}>Select Room</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../../Assets/Group36711.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
                <Text style={styles.textinfo}>Tags</Text>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={Tags}
                        renderItem={renderTags}
                        keyExtractor={(item) => item}
                        horizontal
                    />
                </View>
            </View>
            <View style={styles.RoomContainer}>
                <Text style={styles.textRoom}>Room</Text>
                <FlatList
                    data={RoomData}
                    renderItem={({ item }) => <Room item={item} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('AddRoom') }>
                    <Image source={require("../../../Assets/Group36659.png")} style={styles.Plus} />
            </TouchableOpacity>
        </View>
    );
}
export const styles = ScaledSheet.create({

    container: {
        padding: '2@vs',
        flex: 1,
        marginBottom: 10,
        backgroundColor:'#FFF'
    },
    headercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    SelectContainer: {
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
    Tags: {
        margin: '10@vs',
        padding: '10@vs',

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
    RoomContainer: {
        flex: 1,
        margin: '10@vs',
        padding: '10@vs',
    },
    textRoom: {
        fontSize: '15@vs',
        fontWeight: '400',
        color: '#000000',

    },
    Plus:{
        marginLeft:'250@vs'
    },
    
});