import React from 'react';
import {
  Text, View, TouchableOpacity, Image
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import TabIcon from '../../Component/TabsComponent/tabIcon';
import TabIconII from '../../Component/TabsComponent/tabIcon2';
import TabIconIII from '../../Component/TabsComponent/tabIcon3';
import TabIconIIII from '../../Component/TabsComponent/tabIcon4';
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function Activity() {
  const navigation = useNavigation();
  const onSwipeLeft = () => {
    navigation.navigate('NewMessagex');
  };
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <View style={styles.container}>
      <GestureRecognizer onSwipeLeft={onSwipeLeft} config={config} style={{flex:1}}>

        <View style={styles.headercontainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require("../../../Assets/Group_36703.png")} />
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.roomContainer}>
              <Text style={styles.headertext}>Add Activity</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UpcomingActivities')}>
            <Image source={require("../../../Assets/vuesax/notification.png")} />
          </TouchableOpacity>
        </View>

        <TabIcon />
        <TabIconII />
        <TabIconIII />
        <TabIconIIII />
      </GestureRecognizer>
    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  roomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    marginRight: 10,
    color: '#000000',
  },
  TabsButton: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wrrapborder: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: '20@vs'
  },
  wrrapIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
