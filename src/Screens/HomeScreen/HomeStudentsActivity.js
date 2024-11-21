import React from'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import ActivityData from '../../../Data/ActivityData';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ActivityComponent from '../../Component/ActivityComponent';
const HomeStudentActivity = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;
    return(
        <ScrollView style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                  <Image source={require('../../../Assets/Frame(6).png')} style={styles.image}  />    
                </TouchableOpacity>
                <Text style={styles.perviewtext}>Preview</Text>
            </View>
            <View style={styles.imgContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('StudentProfile',{...item})}>
                <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('ActivityStackX')}>
                <Image source={require('../../../Assets/Group36706.png')} style={{margin:10}} />  
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('studentActivitySignInOut',{...item})}>
                <Image source={require('../../../Assets/Group36707.png')} style={{margin:10}}/>    

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('studentActivityBilling',{...item})}>
                <Image source={require('../../../Assets/Group36708.png')} style={{margin:10}}/>    

                </TouchableOpacity>
            </View>
            {/* <FlatList
                data={ActivityData}
                renderItem={({ item }) => <ActivityComponent item={item} />}
                showsVerticalScrollIndicator={false}
            /> */}
            <View style={styles.dayContainer}>
                <View style={{justifyContent:'center'}}>
                <Text style={styles.daynumText}>05</Text>

                </View>
               <View style={{flexDirection:'column'}}>
                <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>3:23 PM</Text>
                        <Image source={require('../../../Assets/Group36712.png')}/>
                </View>
                <View style={styles.actname}>
                    <Text style={styles.actText}>Meal</Text>
                    <Text style={styles.discrip}>Julia ate all of the PM snack</Text>
                </View>
               </View>
            </View>
            <View style={styles.lastContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.monthText}>Mar</Text>
                    <Text style={styles.dayText}>Mon</Text>
                </View>
                <Image source={require('../../../Assets/Group36786.png')} style={{marginRight:'35%'}}/>
                <Image source={require('../../../Assets/Rectangle3619.png')}/>
            </View>
            <View style={styles.verticleLine1}></View>

            <View style={styles.dayContainer}>

               <View style={{flexDirection:'column'}}>
                <View style={styles.timeContainer1}>
                        <Text style={styles.timeText1}> 3:23 PM</Text>
                        <Image source={require('../../../Assets/Group36712.png')}/>
                </View>
                <View style={styles.actname1}>
                    <Text style={styles.actText}>Nap</Text>
                    <Text style={styles.discrip}>Julia slept for 30mins</Text>
                </View>
               </View>
            </View>
            <View style={styles.lastContainer1}>
                <Image source={require('../../../Assets/Group36786.png')} style={{marginRight:'40%'}}/>
                <Image source={require('../../../Assets/Rectangle3619.png')}/>
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.dayContainer}>
                <View style={{justifyContent:'center'}}>
                <Text style={styles.daynumText1}>10</Text>

                </View>
               <View style={{flexDirection:'column'}}>
                <View style={styles.timeContainer}>
                        <Text style={styles.timeText}> 3:23 PM</Text>
                        <Image source={require('../../../Assets/Group36712.png')}/>
                </View>
                <View style={styles.actname}>
                    <Text style={styles.actText}>Meal</Text>
                    <Text style={styles.discrip}>Julia ate some of the breakfast</Text>
                </View>
               </View>
            </View>
            <View style={styles.lastContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.monthText}>Mar</Text>
                    <Text style={styles.dayText}>Mon</Text>
                </View>
                <Image source={require('../../../Assets/Group36786.png')} style={{marginRight:'35%'}}/>
                <Image source={require('../../../Assets/Rectangle3619.png')}/>
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.dayContainer2}>
                <View style={{justifyContent:'center'}}>
                <Text style={styles.daynumText2}>13</Text>
                </View>

                <View style={styles.image}>
                <Image source={require('../../../Assets/Frame.png')} style={styles.icon}/>
               <View style={{flexDirection:'column'}}>
                <View style={styles.timeContainer2}>
                        <Text style={styles.timeText2}> 3:23 PM</Text>
                        <Image source={require('../../../Assets/Group36712.png')}/>
                </View>
                <View style={styles.actname2}>
                    <Text style={styles.actText}>Meal</Text>
                    <Text style={styles.discrip}>Julia ate some of the breakfast</Text>
                </View>
                </View>
               </View>
            </View>
            <View style={styles.lastContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.monthText}>Mar</Text>
                    <Text style={styles.dayText}>Mon</Text>
                </View>
                <Image source={require('../../../Assets/Group36786.png')} style={{marginRight:'35%'}}/>
                <Image source={require('../../../Assets/Rectangle3619.png')}/>
            </View>
            <View style={styles.verticleLine}></View>
            
            <View style={styles.dayContainer2}>
                <View style={{justifyContent:'center'}}>
                <Text style={styles.daynumText2}>13</Text>
                </View>

                <View style={styles.image}>
                <Image source={require('../../../Assets/logout.png')} style={styles.icon1}/>
               <View style={{flexDirection:'column'}}>
                <View style={styles.timeContainer2}>
                        <Text style={styles.timeText2}> 3:23 PM</Text>
                        <Image source={require('../../../Assets/Group36712.png')}/>
                </View>
                <View style={styles.actname2}>
                    <Text style={styles.actText}>Meal</Text>
                    <Text style={styles.discrip}>Julia ate some of the breakfast</Text>
                </View>
                </View>
               </View>
            </View>
            <View style={styles.lastContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.monthText}>Mar</Text>
                    <Text style={styles.dayText}>Mon</Text>
                </View>
                <Image source={require('../../../Assets/Group36786.png')} style={{marginRight:'35%'}}/>
                <Image source={require('../../../Assets/Rectangle3619.png')}/>
            </View>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity>
                <Text style={{color:'#475AD7',fontSize:16,fontWeight:'500', textAlign:'center',marginBottom:30}}>Load More Activities</Text>
            </TouchableOpacity>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container:{
        padding:2,
        backgroundColor:'#FFF',
        flex:1,
        marginBottom:10

    },
    row:{
        flexDirection:'row',
        margin:10,
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    perviewtext:{
        fontSize:20,
        fontWeight:'500',
        color:'#000000',
        textAlign:'center',
        flex:1
    },
    imgContainer:{
        alignItems:'center',
        marginBottom:15
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    name:{
        fontWeight:'600',
        fontSize:22,
        color:'#000000',
        textAlign:'center'
    },
    timeContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'5%',
        textAlign:'center'
        },
        timeContainer1:{
            flexDirection:'row',
            alignItems:'center',
            marginLeft:'24%',
            textAlign:'center'
        },
        timeContainer2:{
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
        dayContainer2:{
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
        timeText1:{
            fontSize:15,
            fontWeight:'400',
            marginRight:'68%',
            color:'#000000'
        },
        timeText2:{
            fontSize:15,
            fontWeight:'400',
            marginRight:'53%',
            color:'#000000'
        },
        actname:{
            marginLeft:'7%',
            textAlign:'center'
    
        },
        actname1:{
            marginLeft:'25%',
            textAlign:'center'
        },
        actname2:{
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
        lastContainer1:{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:10,
            justifyContent:'center',
            marginLeft:60
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
            color:'#FFF'
        },
        daynumText1:{
            fontSize:35,
            fontWeight:'700',
            // borderWidth:5,
            // borderEndWidth:15,
            // borderColor:'#475AD7',
            // backgroundColor:'#475AD7',
            // borderRadius:15,
            textAlign:'center',
            color:'#000000',
            marginLeft:20
        },
        daynumText2:{
            fontSize:35,
            fontWeight:'700',
            // borderWidth:5,
            // borderEndWidth:15,
            // borderColor:'#475AD7',
            // backgroundColor:'#475AD7',
            // borderRadius:15,
            textAlign:'center',
            color:'#000000',
            marginLeft:20
        },
        verticleLine1: {
            height: 1,
            width: "90%",
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            marginLeft:80,
            justifyContent:'center'
          },
          verticleLine:{
            height: 1,
            width: "90%",
            backgroundColor: '#B7B7B7',
            margin:15
          },
          icon:{
            backgroundColor:'#47D789',
            borderColor:"#47D789",
            borderRadius:10,
            width:50,
            height:50
          },
          icon1:{
            backgroundColor:'#D74747',
            borderColor:"#D74747",
            borderRadius:10,
            width:50,
            height:50
          },
          image:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          },
})
export default HomeStudentActivity;