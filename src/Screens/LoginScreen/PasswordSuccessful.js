import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PasswordSuccessful = () => {

  const handleButtonPress = (buttonName) => {
    console.log(`Button ${buttonName} pressed`);
    // Add your logic for button press here
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../../Assets/Group_181.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Successful</Text>
        <Text style={styles.subtitle}>Password reset completed successfully, you can go ahead and Login to account to access it</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress('Button 1')}
        >
          <Text style={styles.buttonText1}>Login</Text>
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

});

export default PasswordSuccessful;
