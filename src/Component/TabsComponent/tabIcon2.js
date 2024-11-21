import React from 'react';
import {
    Text, View, TouchableOpacity, Image
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
export default function TabIconII() {
    const navigation = useNavigation();

    return (
        <View style={styles.TabsButton}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder} onPress={()=>navigation.navigate('Nap')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/Vector.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Nap</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder2} onPress={()=>navigation.navigate('Restroom')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/bag-tick.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Restroom</Text>

            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder3}onPress={()=>navigation.navigate('Bottle')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/milk.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Bottle</Text>

            </View>
        </View>
    );
}
const styles = ScaledSheet.create({
    TabsButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrrapborder: {
        backgroundColor: '#47D7D7',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: '20@vs'
    },
    wrrapIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrrapborder2: {
        backgroundColor: '#F36ECE',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: '20@vs'
    },
    wrrapborder3: {
        backgroundColor: '#F36E72',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: '20@vs'
    },
    textIcon: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000'
    }
});
