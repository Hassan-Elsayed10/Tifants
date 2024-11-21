import React from 'react';
import {
    Text, View, TouchableOpacity, Image
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function TabIcon() {
    const navigation = useNavigation();
    return (
        <View style={styles.TabsButton}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/camera.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Photo</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder2}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/video-horizontal.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Video</Text>

            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder3}onPress={()=>navigation.navigate('Meal')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/Group36688.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Meal</Text>

            </View>
        </View>
    );
}
const styles = ScaledSheet.create({
    TabsButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrrapborder: {
        backgroundColor: '#FBBC05',
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
        backgroundColor: '#475AD7',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: '20@vs'
    },
    wrrapborder3: {
        backgroundColor: '#2AC171',
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
