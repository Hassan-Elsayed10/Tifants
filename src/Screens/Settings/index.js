import React, { useState } from "react";
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback,View, Modal, FlatList, TextInput, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Settings() {
    const [isMedia, setIsMedia] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false);
    const [isAllergy, setIsAllergy] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const [showMediaModal, setShowMediaModal] = useState(false);
    const [showDisplayModal, setShowDisplayModal] = useState(false);
    const [showAllergyModal, setShowAllergyModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const navigation = useNavigation();
  
    const handleMediaToggle = () => {
      setIsMedia(!isMedia);
      setShowMediaModal(true);
    };
    const handleDisplayToggle = () => {
      setIsDisplay(!isDisplay);
      setShowDisplayModal(true);
    };
    const handleAllergyToggle = () => {
      setIsAllergy(!isAllergy);
      setShowAllergyModal(true);
    };
    const handleStatusToggle = () => {
      setIsStatus(!isStatus);
      setShowStatusModal(true);
    };
    const handleCancelRemoval = () => {
      setShowMediaModal(false);
      setShowDisplayModal(false);
      setShowAllergyModal(false);
      setShowStatusModal(false);
    };
  
    return (
      <TouchableWithoutFeedback onPress={() => {
        if (showMediaModal || showDisplayModal || showAllergyModal || showStatusModal) {
          return;
        }
        // Handle other actions when touch events are allowed
      }}>
        <View style={[styles.container, (showMediaModal || showDisplayModal || showAllergyModal || showStatusModal) && styles.opacityContainer]}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={require('../../../Assets/Frame(6).png')} />
            </TouchableOpacity>
            <Text style={styles.text}>Settings</Text>
          </View>
          <View style={styles.Device}>
            <Text style={styles.subtitle}>Device Settings</Text>
            <View style={styles.togglContainer}>
              <Text style={styles.toggelText}>Save Media to Gallery</Text>
              <TouchableOpacity onPress={handleMediaToggle}>
                <Icon
                  name={isMedia ? 'toggle-on' : 'toggle-off'}
                  size={30}
                  color={isMedia ? '#475AD7' : '#D9D9D9'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.togglContainer}>
              <Text style={styles.toggelText}>Display Student Full Name</Text>
              <TouchableOpacity onPress={handleDisplayToggle}>
                <Icon
                  name={isDisplay ? 'toggle-on' : 'toggle-off'}
                  size={30}
                  color={isDisplay ? '#475AD7' : '#D9D9D9'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Other}>
            <Text style={styles.subtitle}>Other</Text>
            <View style={styles.togglContainer}>
              <Text style={styles.toggelText}>Show Allergy Icon</Text>
              <TouchableOpacity onPress={handleAllergyToggle}>
                <Icon
                  name={isAllergy ? 'toggle-on' : 'toggle-off'}
                  size={30}
                  color={isAllergy ? '#475AD7' : '#D9D9D9'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.togglContainer}>
              <Text style={styles.toggelText}>Show Child Status on Attendance</Text>
              <TouchableOpacity onPress={handleStatusToggle}>
                <Icon
                  name={isStatus ? 'toggle-on' : 'toggle-off'}
                  size={30}
                  color={isStatus ? '#475AD7' : '#D9D9D9'}
                />
              </TouchableOpacity>
            </View>
          </View>
          {showMediaModal && (
            <View style={styles.ModalContainer}>
              <View style={styles.Modal}>
                <Image source={require('../../../Assets/Group36664.png')} />
  
                <View style={styles.modalContent}>
                  <Text style={styles.ModalTitle}>Save Media to Gallery</Text>
                  <Text style={styles.Modalsub}>Photos and videos captured will be saved to your device album</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRemoval}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {showDisplayModal && (
            <View style={styles.ModalContainer}>
              <View style={styles.Modal}>
                <Image source={require('../../../Assets/Group36664.png')} />
  
                <View style={styles.modalContent}>
                  <Text style={styles.ModalTitle}>Display Student Full Name</Text>
                  <Text style={styles.Modalsub}>Full name of students displayed in all screens</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRemoval}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {showAllergyModal && (
            <View style={styles.ModalContainer}>
              <View style={styles.Modal}>
                <Image source={require('../../../Assets/Group36664.png')} />
  
                <View style={styles.modalContent}>
                  <Text style={styles.ModalTitle}>Show Allergy Icon</Text>
                  <Text style={styles.Modalsub}>Photos and videos captured will be saved to your device album</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRemoval}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          {showStatusModal && (
            <View style={styles.ModalContainer}>
              <View style={styles.Modal}>
                <Image source={require('../../../Assets/Group36664.png')} />
  
                <View style={styles.modalContent}>
                  <Text style={styles.ModalTitle}>Show Child Status on Attendance</Text>
                  <Text style={styles.Modalsub1}>Student’s currently signed-in or assigned room (when transferred) will be displayed under the student’s name in the attendance screen</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRemoval}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  export const styles = ScaledSheet.create({
    container: {
      padding: '2@vs',
      backgroundColor: '#FFF',
      flex: 1,
    },
    opacityContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set opacity value as desired
    },
    row: {
      flexDirection: 'row',
      margin: '10@vs',
      padding: '10@vs',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: '20@vs',
    },
    text: {
      fontSize: '15@vs',
      fontWeight: '500',
      color: '#000000',
      textAlign: 'center',
      flex: 1,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
      color: '#000000',
    },
    Device: {
      alignItems: 'flex-start',
      margin: '5@vs',
      padding: '5@vs',
    },
    Other: {
      alignItems: 'flex-start',
      margin: '5@vs',
      padding: '5@vs',
    },
    togglContainer: {
      flexDirection: 'row',
      backgroundColor: '#F3F4F6',
      borderRadius: '12@vs',
      alignItems: 'center',
      marginTop: '10@vs',
      padding: '10@vs',
      justifyContent: 'center',
    },
    toggelText: {
      fontSize: 15,
      fontWeight: '500',
      color: '#000000',
      flex: 1,
    },
    ModalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    Modal: {
      backgroundColor: '#FFF',
      borderRadius: 12,
      padding: '20@vs',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      marginBottom: '50@vs',
    },
    ModalTitle: {
      fontSize: '18@vs',
      fontWeight: '600',
      color: '#000000',
      textAlign: 'center',
    },
    Modalsub: {
      fontSize: '15@vs',
      fontWeight: '400',
      color: '#000000',
      textAlign: 'center',
    },
    Modalsub1: {
      fontSize: '15@vs',
      fontWeight: '400',
      color: '#000000',
    },
    cancelButton: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      paddingVertical: '8@vs',
      paddingHorizontal: '20@s',
      marginBottom: '10@vs',
      width: '100%',
      borderColor: '#475AD7',
      borderWidth: 1,
      justifyContent: 'center',
    },
    cancelButtonText: {
      fontSize: 16,
      color: '#475AD7',
      textAlign: 'center',
    },
  });