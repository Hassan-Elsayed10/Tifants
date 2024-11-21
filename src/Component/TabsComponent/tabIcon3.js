import React from 'react';
import {
    Text, View, TouchableOpacity, Image
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
export default function TabIconIII() {
    const navigation = useNavigation();
    return (
        <View style={styles.TabsButton}>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder} onPress={()=> navigation.navigate('Mood')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/Frame(7).png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Mood</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder2} onPress={()=> navigation.navigate('Meds')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/Vector(1).png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Meds</Text>

            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.wrrapborder3} onPress={()=> navigation.navigate('Note')}>
                    <View style={styles.wrrapIcon}>
                        <Image source={require('../../../Assets/vuesax/note.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.textIcon}>Note</Text>

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
        backgroundColor: '#7DDF64',
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
        backgroundColor: '#4792D7',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: '20@vs'
    },
    wrrapborder3: {
        backgroundColor: '#F78764',
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
