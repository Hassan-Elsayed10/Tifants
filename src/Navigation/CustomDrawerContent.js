import { DrawerContentScrollView } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function CustomDrawerContent() {
    // const navigation = useNavigation();



    return (
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../Assets/menuImage.png')} />
                <View style={styles.overlayImageContainer}>
                    <Image source={require('../../Assets/Image.png')} />
                    <View>
                        <Text style={styles.name}>Jeniffer Winget</Text>
                        <Text style={styles.email}>ertuken@gmail.com</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('GettingStarted')}>
                <Image source={require('../../Assets/MenuIcon/timer-start.png')} />
                <Text style={styles.text}>Getting Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('Staff')}>
                <Image source={require('../../Assets/MenuIcon/iconoir_profile-circled.png')} />
                <Text style={styles.text}>Staff</Text>
            </TouchableOpacity>
            <View style={styles.menuContainer}>
                <Image source={require('../../Assets/MenuIcon/clarity_info-standard-line.png')} />
                <Text style={styles.text}>Live Sign-in feed</Text>
            </View>
            <TouchableOpacity style={styles.menuContainer} >
                <Image source={require('../../Assets/MenuIcon/iconoir_notes.png')} />
                <Text style={styles.text}>Bloomington Academy Daycare</Text>
            </TouchableOpacity>
            <View style={styles.menuContainer}>
                <Image source={require('../../Assets/MenuIcon/receipt-item.png')} />
                <Text style={styles.text}>Expenses</Text>
            </View>
            <View style={styles.menuContainer}>
                <Image source={require('../../Assets/MenuIcon/fluent_chat-28-regular.png')} />
                <Text style={styles.text}>New Inquiry</Text>
            </View>
            <View style={styles.menuContainer}>
                <Image source={require('../../Assets/MenuIcon/carbon_event-schedule.png')} />
                <Text style={styles.text}>Job Portal</Text>
            </View>
            <TouchableOpacity style={styles.menuContainer} >
                <Image source={require('../../Assets/MenuIcon/Group13.png')} />
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.menuContainer}>
                <Image source={require('../../Assets/MenuIcon/Group15.png')} />
                <Text style={styles.text}>Help & Support</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5, marginBottom: 20 }}>
                <Text style={styles.textVersion}>App Version - V1.00</Text>
                <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Logout</Text>
            </View>

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    overlayImageContainer: {
        bottom: '15%',
        flexDirection: 'row',
        flex: 1
    },
    name: {
        fontWeight: '500',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginTop: 10
    },
    email: {
        fontWeight: '400',
        fontSize: 14,
        color: '#3D3D3D',
        marginLeft: 20,
        marginTop: 5

    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#222222',
        marginLeft: 20,
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 40
    },
    textVersion: {
        fontWeight: '400',
        fontSize: 12,
        color: '#222222',
        marginLeft: 20,
    },
    logoutText: {
        fontWeight: '400',
        fontSize: 14,
        color: '#222222',
        marginLeft: 20,
    }
});
