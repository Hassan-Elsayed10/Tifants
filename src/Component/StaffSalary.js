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
const StaffSalary = ({ item }) => {
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <View style={styles.row}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.col}>
                        <View style={styles.rowtext}>
                            <Text style={styles.name}>Name</Text>
                            <Text style={styles.balance}>Balance</Text>
                        </View>
                        <View style={styles.rowtext}>
                            <Text style={styles.staffname}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
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
        padding: 10
    },
    image: {
        borderRadius: 15,
        width: 65,
        height: 65
    },
    col: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        flex: 1

    },
    name: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000000'
    },
    balance: {
        fontSize: 13,
        color: '#545454',
        fontWeight: '500'
    },
    rowtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    staffname:{
        fontWeight: '400',
        fontSize: 16,
        color: '#000000'
    },
    price:{
        fontWeight: '400',
        fontSize: 13,
        color: '#000000'
    }
})
export default StaffSalary;