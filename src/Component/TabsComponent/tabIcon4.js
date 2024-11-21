import React from 'react';
import {
    Text, View, TouchableOpacity, Image
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function TabIconIIII() {
    const navigation = useNavigation();

    return (
        <View style={styles.TabsButton}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder}  onPress={()=> navigation.navigate('Incident')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/alarm.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Incident</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder2} onPress={()=> navigation.navigate('NameToFace')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/personalcard.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Name to face</Text>

            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder3} onPress={()=> navigation.navigate('Observation')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/eye1.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Observation</Text>

            </View>
        </View>
    );
}
const styles = ScaledSheet.create({
    TabsButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom:50
    },
    wrrapborder: {
        backgroundColor: '#FF4D4D',
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
        backgroundColor: '#539987',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: '20@vs'
    },
    wrrapborder3: {
        backgroundColor: '#B883DD',
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
