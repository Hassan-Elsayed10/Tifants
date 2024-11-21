import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GetStarted = () => {
  const handleButtonPress = (buttonName) => {
    console.log(`Button ${buttonName} pressed`);
    // Add your logic for button press here
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../Assets/Group_1.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let’s Get Started</Text>
        <Text style={styles.subtitle}>Welcome to Tifants,  to get started, create an account or login to your existing account</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress('Button 1')}
        >
          <Text style={styles.buttonText1}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => handleButtonPress('Button 2')}
        >
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
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
  button2: {
    backgroundColor: '#FFFFF',
    borderRadius: 12,
    marginBottom: 10,
    paddingVertical: 15,
    borderWidth:1,
    borderColor:'#475AD7'
  },
  buttonText1: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  buttonText2: {
    fontSize: 16,
    color: '#475AD7',
    textAlign: 'center',
  },
});

export default GetStarted;
