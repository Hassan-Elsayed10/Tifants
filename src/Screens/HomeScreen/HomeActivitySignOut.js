import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function StudentActivitySignOut() {
    const [isFocused, setIsFocused] = useState(false);
    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;

    const handleToggle = () => {
      setIsFocused(!isFocused);
    };
    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Sign Out</Text>
            </View>
            <Text style={styles.selectedText}>1 Student selected</Text>
            <View style={styles.stdentContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.stText}>{item.name}</Text>
            </View>

            <Text style={styles.dayText}>Wednesday</Text>
            <View style={styles.dateRow}>
                <View style={styles.textcol}>
                    <Text style={styles.dateText}>13.12</Text>
                    <Text style={styles.dateText}>DEC</Text>
                </View>
                <View style={styles.HorizontalLine}></View>
                <View style={styles.textcol}>
                    <Text style={styles.timenum}>1:20 PM</Text>
                    <Text style={styles.timeText}>Time</Text>
                </View>
            </View>

            <View style={styles.togglContainer}>
                <Text style={styles.toggelText}>Transfer to different room</Text>
                <TouchableOpacity onPress={handleToggle}>
                     <Icon
                    name={isFocused ? 'toggle-on' : 'toggle-off'}
                    size={30}
                    color={isFocused ? '#475AD7' : '#D9D9D9'}
                    />
                </TouchableOpacity>

           </View>
            <Text style={{fontWeight:'400',color:'#000000',fontSize:18,padding:15}}>Sign Out By</Text>

            <View style={styles.imageContainer}>
                <Image source={require('../../../Assets/Image(2).png')}/>
                <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                <Text style={{fontSize:18,fontWeight:'500',color:'#000000',marginLeft:10}}>Jeniffer Winget</Text>
                <Text style={{fontSize:14,fontWeight:'400',color:'rgba(0, 0, 0, 0.6)',marginLeft:10}}>ertuken@gmail.com</Text>
                </View>
            </View>
        </View>
    );

}

export const styles = ScaledSheet.create({
    container: {
        padding: '2@vs',
        backgroundColor: '#FFF',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        margin: '10@vs',
        padding: '10@vs',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    selectedText: {
        fontSize: '16@vs',
        fontWeight: '400',
        color: '#000000',
        textAlign: 'left',
        marginLeft: '20@vs',
    },
    stdentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '30@vs',
        marginTop: '5@vs'
    },
    stText: {
        fontSize: '16@vs',
        fontWeight: '600',
        color: '#000000',
        margin: '2@vs',
        textAlign: 'center'
    },
    image: {
        width: '30@vs',
        height: '30@vs'
    },
    dayText: {
        fontSize: '16@vs',
        fontWeight: '600',
        color: '#000000',
        marginLeft: '30@vs',
        marginTop: '20@vs'
    },
    textcol: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: '15@vs'
    },
    HorizontalLine: {
        height: '60%',
        width: 1,
        backgroundColor: '#B7B7B7',
        margin: 15
    },
    dateRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateText: {
        fontSize: '30@vs',
        fontWeight: '700',
        color: '#000000'
    },
    timenum: {
        fontSize: '18@vs',
        fontWeight: '600',
        color: '#000000'
    },
    timeText: {
        fontSize: '18@vs',
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: '400'
    },
   
    togglContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: "12@vs",
        alignItems: 'center',
        margin: '15@vs',
        padding: '10@vs',
        justifyContent: 'center',
    },
    toggelText: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        flex: 1,

    },
    imageContainer:{
        flexDirection:'row',
        flex:1,
        margin:'15@vs',
    },

})