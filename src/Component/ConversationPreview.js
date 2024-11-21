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
const ConversationPreview = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.row}>
                    <View style={{}}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.col}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.subname}>{item.status}</Text>
                        </View>
                        <Text style={styles.subname}>{item.time}</Text>

                    </View>
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
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    subname: {
        fontWeight: '400',
        fontSize: 15,
        color: '#545454'
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
export default ConversationPreview;