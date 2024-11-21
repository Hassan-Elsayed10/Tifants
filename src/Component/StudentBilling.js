import { useNavigation } from '@react-navigation/native';
import React from'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';
const StudentBilling = ({item}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.row}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.col}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>    
                <Text style={styles.name}>{item.price}</Text>

            </View>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        padding:2,
        backgroundColor:'#FFF',
        flex:1
    },
    row:{
        flexDirection:'row',
        margin:10,
        padding:10,
        justifyContent:'space-around',
        alignItems:'center'
    },
    image:{
        borderRadius:15,
        width:65,
        height:65,
    },
    col:{
        flexDirection:'column',
        justifyContent:'center',
        marginRight:60    
    },
    name:{
        fontWeight:'600',
        fontSize:18,
        color:'#000000'
    },
    birth:{
        fontSize:15,
        color:'#545454',
        fontWeight:'400'
    },
})
export default StudentBilling;