import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView
} from 'react-native';
const ActivityComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dayContainer}>
                <View style={{justifyContent:'center'}}>
                <Text style={styles.daynumText}>05</Text>

                </View>
               <View style={{flexDirection:'column'}}>
                <View style={styles.timeContainer}>
                        <Text style={styles.timeText}> 3:23 PM</Text>
                        <Image source={require('../../Assets/Group36712.png')}/>
                </View>
                <View style={styles.actname}>
                    <Text style={styles.actText}>Meal</Text>
                    <Text style={styles.discrip}>discrip</Text>
                </View>
               </View>
            </View>
            <View style={styles.lastContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.monthText}>Mar</Text>
                    <Text style={styles.dayText}>Mon</Text>
                </View>
                <Image source={require('../../Assets/Group36786.png')} style={{marginRight:'35%'}}/>
                <Image source={require('../../Assets/Rectangle3619.png')}/>
            </View>
            <View style={styles.verticleLine}></View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding:2,
        backgroundColor: '#FFF',
        flex: 1
    },
    timeContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:'5%',
    textAlign:'center'
    },
    dayContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        // alignItems:'center',
        // textAlign:'center'
    },
    timeText:{
        fontSize:15,
        fontWeight:'400',
        marginRight:'63%',
        color:'#000000'
    },
    actname:{
        marginLeft:'7%',
        textAlign:'center'

    },
    actText:{
        fontSize:20,
        fontWeight:'700',
        color:'#000000',
        
    },
    discrip:{
        fontSize:15,
        fontWeight:'400',
        color:'rgba(0, 0, 0, 0.6)'
    },
    lastContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10

    },
    dateContainer:{
        marginLeft:27,
        marginRight:10
    },
    monthText:{
        fontSize:16,
        fontWeight:'500',
        color:'#000000'
    },
    dayText:{
        color:'rgba(0, 0, 0, 0.6)',
        fontSize:16,
        fontWeight:'500'
    },
    daynumText:{
        fontSize:35,
        fontWeight:'700',
        borderWidth:5,
        borderEndWidth:15,
        borderColor:'#475AD7',
        backgroundColor:'#475AD7',
        borderRadius:15,
        textAlign:'center',
    },
    verticleLine: {
        height: 1,
        width: "90%",
        backgroundColor: '#B7B7B7',
        margin:15
      }
})
export default ActivityComponent;