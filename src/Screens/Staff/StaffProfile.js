import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ScrollView,Dimensions,SafeAreaView } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function StaffProfile() {
    const [isListVisible, setListVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const data = ['Test Room', 'Item 2', 'Item 3', 'Item 4'];
    const schedule = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const Tags = ['Allergy', 'Full Day', 'Subside', 'Toddler']
    const [showRemovalModal, setShowRemovalModal] = useState(false);
    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;


    const handlePress = () => {
        setListVisible(!isListVisible);
    };

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setListVisible(false);
    };
    const handelRemoval = () => {
        setShowRemovalModal(true);
      };
    
      const handleCancelRemoval = () => {
        setShowRemovalModal(false);
      };
    
      const handleConfirmRemoval = () => {
        // Perform removal action
        setShowRemovalModal(false);
        navigation.navigate('DeleteSuccessful')
      };
    const renderListItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => handleItemSelect(item)}>
                <Text style={{ color: '#000000', fontSize: 15, fontWeight: '400' }}>{item}</Text>
            </TouchableOpacity>
        );
    };

    const renderSchedule = ({ item }) => {
        return (
            <View style={styles.selectSchedule}>
                <TouchableOpacity>
                    <Text style={styles.day}>{item}</Text>
                </TouchableOpacity>
            </View>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 10 }}
          data={[0]}
          keyExtractor={() => "dummyKey"}
          renderItem={() => (
            <>
              <View style={styles.row}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                  <Image source={require("../../../Assets/Frame(6).png")} />
                </TouchableOpacity>
                <Text style={styles.text}>Staff Profile</Text>
                <TouchableOpacity>
                  <Text style={styles.savetext}>Save</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container1}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.overlay}>
                  <Image source={require("../../../Assets/Group36773.png")} />
                </View>
                <Text style={styles.textname}>{item.name}</Text>
              </View>
              <View style={styles.personInfo}>
                <Text style={styles.textinfo}>Personal Information</Text>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>First Name</Text>
                  <TextInput style={styles.textInput} />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Last Name</Text>
                  <TextInput style={styles.textInput} />
                </View>
                <View style={styles.Inputroom}>
                  {isListVisible ? (
                    <FlatList
                      data={data}
                      renderItem={renderListItem}
                      keyExtractor={(item) => item}
                    />
                  ) : (
                    <TouchableOpacity style={styles.selectContainer} onPress={handlePress}>
                      {selectedItem ? (
                        <Text
                          style={{
                            color: "#565656",
                            fontSize: 16,
                            fontWeight: "500",
                            flex: 1,
                            width: 20,
                            height: 30,
                          }}
                        >
                          {selectedItem}
                        </Text>
                      ) : (
                        <Text style={{ color: "#565656", fontSize: 16, fontWeight: "500", flex: 1 }}>
                          Assigned Room
                        </Text>
                      )}
  
                      <Image source={require("../../../Assets/Frame(4).png")} />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Date of Birth</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="April 07, 2013"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Medications</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap to add"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Allergies</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap to add"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Street Address</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap to add"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>City</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap to add"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>State</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap to add"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Zip</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Tap to add"
                    placeholderTextColor={"#565656"}
                  />
                </View>
                <View style={styles.InputMsg}>
                  <Text style={styles.stakedText}>Notes</Text>
                  <TextInput
                    style={styles.textInput}
                    maxLength={150}
                    placeholder="Type your notes here"
                    placeholderTextColor={"#565656"}
                    multiline={true}
                  />
                </View>
              </View>
  
              <View style={styles.parentInfo}>
                <Text style={styles.textinfo}>Parents</Text>
                <View style={styles.Input}>
                  <Text style={styles.stakedText}>Parent Name</Text>
                  <TextInput style={styles.textInput} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddParent")}>
                  <Text style={styles.buttonText}>Add Parent</Text>
                </TouchableOpacity>
                <Text style={styles.textinfo}>Authorized Pick Up</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("AddAuthorizedPickup")}
                >
                  <Text style={styles.buttonText}>Add Authorized Pick Up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.Schedule}>
                <Text style={styles.textinfo}>Schedule</Text>
                <View style={{ flexDirection: "row" }}>
                  <FlatList
                    data={schedule}
                    renderItem={renderSchedule}
                    keyExtractor={(item) => item}
                    horizontal
                  />
                </View>
              </View>
              <View style={styles.Schedule}>
                <Text style={styles.textinfo}>Tags</Text>
                <View style={{ flexDirection: "row" }}>
                  <FlatList
                    data={Tags}
                    renderItem={renderSchedule}
                    keyExtractor={(item) => item}
                    horizontal
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.removebutton} onPress={handelRemoval}>
                <Text style={styles.buttonText}>Remove Profile</Text>
              </TouchableOpacity>
  
              {showRemovalModal && (
                <View style={styles.removalModalContainer}>
                  <View style={styles.progressModal}>
                    <Image source={require("../../../Assets/Group188.png")} />
  
                    <View style={styles.modalContent}>
                      <Text style={styles.progressModalTitle}>Delete Confirmation</Text>
                      <Text style={styles.progressModalsub}>
                        Are you sure you want to remove this student profile?
                      </Text>
                    </View>
                    <View style={styles.modalButtonContainer}>
                      <TouchableOpacity style={styles.deleteButton} onPress={handleConfirmRemoval}>
                        <Text style={styles.buttonText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRemoval}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </>
          )}
        />
      </SafeAreaView>
    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = ScaledSheet.create({
    
    container: {
        padding: '2@vs',
        backgroundColor: '#FFF',
        flex: 1,
        marginBottom:10
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
    savetext: {
        color: '#475AD7',
        fontSize: '15@vs',
        fontWeight: '400'
    },
    container1: {
        flex: .7,
        alignItems: 'center'
    },
    image: {
        width: '120@vs',
        height: '120@vs',
    },
    textname: {
        fontSize: '18@vs',
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
    },
    overlay: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        top: '90@vs',
        right: '90@vs',
    },
    personInfo: {
        flex: 2,
        margin: '10@vs',
        padding: '10@vs'
    },
    textinfo: {
        fontSize: '15@vs',
        fontWeight: '400',
        color: '#000000',
        marginBottom: '10@vs',
    },
    Input: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        marginBottom: '15@vs',
        width: '280@vs',
        height: '50@vs'

    },
    InputMsg: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingLeft: '10@vs',
        paddingTop: '5@vs',
        marginBottom: '15@vs',
        width: '280@vs',
        height: '150@vs'
    },
    Inputroom: {
        width: '280@vs',
        height: '50@vs',
        justifyContent: 'center',
        marginBottom: '15@vs',

    },
    stakedText: {
        fontSize: '11@vs',
        fontWeight: '400',
        color: '#ACACAC',

    },
    textInput: {
        fontSize: '13@vs',
        fontWeight: '500',
        color: '#565656'
    },
    selectContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: "12@vs",
        alignItems: 'center',
        margin: '0@vs',
        padding: '10@vs',

    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    parentInfo: {
        flex: 2,
        margin: '10@vs',
        padding: '10@vs'
    },
    button: {
        backgroundColor: '#475AD7',
        borderRadius: '12@vs',
        paddingVertical: '15@vs',
        marginTop: '10@vs',
        marginBottom: '10@vs'
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
    },
    removebutton: {
        backgroundColor: '#D74747',
        borderRadius: '12@vs',
        paddingVertical: '15@vs',
        marginTop: '10@vs',
        marginBottom: '10@vs',
        margin: '10@vs'
    },
    Schedule: {
        flex: 2,
        margin: '10@vs',
        padding: '10@vs',
    },
    selectSchedule: {
        width: '100@vs',
        height: '45@vs',
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        justifyContent: 'center',
        margin: 5
    },
    day: {
        fontSize: 16,
        fontWeight: '500',
        color: '#565656',
        textAlign: 'center'
    },
    removalModalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        position:'absolute',
        marginTop:'600@vs',
      },
      progressModal: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: '20@vs',
        alignItems: 'center',
        width: '330@s',
        height:'500@s',
        justifyContent:'center',
      },
      modalContent: {
        marginBottom: '50@vs',
      },
      progressModalTitle: {
        fontSize: '18@vs',
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
      },
      progressModalsub: {
        fontSize: '15@vs',
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
      },
      modalButtonContainer: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:'20@vs'
      },
      cancelButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: '8@vs',
        paddingHorizontal: '20@s',
        marginBottom: '10@vs',
        width: '100%',
        borderColor:'#475AD7',
        borderWidth:1,
        justifyContent:'center'
      },
      deleteButton: {
        backgroundColor: '#FF0000',
        borderRadius: 12,
        paddingVertical: '8@vs',
        paddingHorizontal: '20@s',
        marginBottom: '10@vs',
        width: '100%',
        alignItems:'center',
        justifyContent:'center'

      },
      cancelButtonText: {
        fontSize: 16,
        color: '#475AD7',
        textAlign: 'center',
      },

});