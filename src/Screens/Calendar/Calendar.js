import React from 'react';
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
import ActivityComponent from '../../Component/ActivityComponent';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const Calendra = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row} >
        <TouchableOpacity onPress={() => navigation.navigate('SelectRoom')} >
          <View style={styles.roomContainer}>
            <Text style={styles.headertext}>All Rooms</Text>
            <Image source={require("../../../Assets/Frame(4).png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')}>
          <Image source={require('../../../Assets/Frame(2).png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.dayContainer}>

        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.daynumText}>05</Text>
        </View>

        <View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>Today</Text>
            <Image source={require('../../../Assets/Group36712.png')} />
          </View>
          <View style={styles.actname}>
            <Text style={styles.actText}>Upcoming Events</Text>
            <Text style={styles.discrip}>No events available</Text>
          </View>
        </View>
      </View>


      <View style={styles.lastContainer}>
        <View>
          <Text style={styles.monthText}>Mar</Text>
          <Text style={styles.dayText}>Mon</Text>
        </View>
        <Image source={require('../../../Assets/Group36786.png')} style={{ marginRight: 120 }} />
        <Image source={require('../../../Assets/Rectangle3619.png')} />
      </View>
      <View style={styles.verticleLine}></View>
      {/* seconed event */}
      <View style={styles.dayContainer}>

        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.timeText1}>11:15 AM</Text>

          <Text style={styles.daynumText1}>10</Text>
          <View style={styles.lastContainer1}>
            <Text style={styles.monthText}>Mar</Text>
            <Text style={styles.dayText}>Mon</Text>
          </View>
        </View>
        <View>

        </View>
        <View style={{ flex: .6, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../Assets/Rectangle3624.png')} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.timeContainer}>
            <Text style={styles.title}>Art Project</Text>
            <Image source={require('../../../Assets/Group36712.png')} />
          </View>
          <View style={styles.actname}>
            <Text style={styles.RoomName}>Room: Caterpillar</Text>
            <Text style={styles.discrip}>We are making classic scratch art making family portrait</Text>
          </View>
        </View>
      </View>
      <View style={styles.verticleLine1}></View>
      {/* seconed staked event */}
      <View style={styles.dayContainer1}>
        <View style={{ flex: .5, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../Assets/Rectangle3625.png')} style={{marginRight:15}}  />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.timeContainer}>
            <Text style={styles.title}>Halloween</Text>
            <Image source={require('../../../Assets/Group36712.png')} />
          </View>
          <View style={styles.actname}>
            <Text style={styles.RoomName}>Room: Caterpillar, Butterfly</Text>
            <Text style={styles.discrip}>Parade will be in the playground. Parents come in your favorite costume.</Text>
          </View>
        </View>
      </View>
      <View style={styles.verticleLine}></View>
      <View style={styles.dayContainer}>

        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.timeText1}>9:15 AM</Text>

          <Text style={styles.daynumText1}>15</Text>
          <View style={styles.lastContainer1}>
            <Text style={styles.monthText}>Mar</Text>
            <Text style={styles.dayText}>Tue</Text>
          </View>
        </View>
        <View>

        </View>
        <View style={{ flex: .7, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../Assets/Rectangle(3).png')} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.timeContainer}>
            <Text style={styles.title}>PTA Meeting</Text>
            <Image source={require('../../../Assets/Group36712.png')} />
          </View>
          <View style={styles.actname}>
            <Text style={styles.RoomName}>Room: Butterfly</Text>
            <Text style={styles.discrip}>We are looking forward to meeting all room parents.</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );

}

const styles = ScaledSheet.create({
  container: {
    padding: '10@vs',
    backgroundColor: '#FFF',
    flex: 1,

  },
  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 100
  },
  headertext: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    marginRight: 10,
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  perviewtext: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    flex: 1
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    flex: 1,

  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 5
  },
  dayContainer1: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    marginLeft: '60@vs'
  },
  timeText: {
    fontSize: 15,
    fontWeight: '400',
    marginRight: '63%',
    color: '#000000'
  },
  timeText1: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  actname: {
    textAlign: 'center',
    flex: 1

  },
  actText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',

  },
  RoomName: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
  },
  discrip: {
    fontSize: 15,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',

  },
  lastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-around'
  },
  lastContainer1: {
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000'
  },
  dayText: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 16,
    fontWeight: '500'
  },
  daynumText: {
    fontSize: 35,
    fontWeight: '700',
    borderWidth: 5,
    borderEndWidth: 15,
    borderColor: '#475AD7',
    backgroundColor: '#475AD7',
    borderRadius: 15,
    textAlign: 'center',
    color: '#FFF',
    marginRight: '5@vs'
  },
  daynumText1: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
    marginRight: '20@vs'

  },
  verticleLine1: {
    height: 1,
    width: "90%",
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginLeft: 80,
    justifyContent: 'center',
    margin: '20@vs'
  },
  verticleLine: {
    height: 1,
    width: "90%",
    backgroundColor: '#B7B7B7',
    margin: 15
  },
})
export default Calendra;