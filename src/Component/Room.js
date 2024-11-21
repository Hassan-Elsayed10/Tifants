import React from'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Room = ({item}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('RoomSelected',{...item})}>
            <View style={styles.row}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.col}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>              
            </View>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flex:1
    },
    row:{
        flexDirection:'row',
        margin:10,
        padding:10
    },
    image:{
        borderRadius:15,
        width:65,
        height:65
    },
    col:{
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:20
    
    },
    name:{
        fontWeight:'600',
        fontSize:18,
        color:'#000000'
    },
})
export default Room;