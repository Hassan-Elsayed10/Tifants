import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventSuccessful = () => {
  const navigation = useNavigation();

  const handleButtonPress = (buttonName) => {
    navigation.navigate('Homex');
    // Add your logic for button press here
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../Assets/Group_181.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Successful</Text>
        <Text style={styles.subtitle}>The event has been successfully created. You can share it or head back to calendar.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress('Button 1')}
        >
          <Text style={styles.buttonText1}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText}>Share</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFF',
    padding:10
  },
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  logo: {
    width: 145,
    height: 145,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    color:'#000000'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#454242',
    fontWeight:'400'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    paddingHorizontal: 20,
    width: '100%',
  },
  button1: {
    backgroundColor: '#475AD7',
    borderRadius: 12,
    marginBottom: 10,
    paddingVertical: 15,
  },
  buttonText1: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  buttonText:{
    fontSize: 16,
    color: '#475AD7',
    textAlign: 'center',
    fontWeight:'500'
  },
});

export default EventSuccessful;
