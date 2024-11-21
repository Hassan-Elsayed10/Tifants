import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';
const CreateRoom = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.row}>
                    <View style={{ backgroundColor: '#F3F4F6', padding: 20, borderRadius: 15 }}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.nameII}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        backgroundColor: '#FFF',
        flex: 1
    },
    row: {
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    image: {
        borderRadius: 15,
        width: 30,
        height: 30
    },
    col: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20

    },
    name: {
        fontWeight: '400',
        fontSize: 14,
        color: '#000000'
    },

})
export default CreateRoom;