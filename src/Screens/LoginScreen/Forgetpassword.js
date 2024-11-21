import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView,Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('Verification')
  };
  const handleTryAgain = () => {
    navigation.navigate('Login')
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Forgot Password 🤔</Text>
        <Text style={styles.subtitle}>We need your email adress so we can send you the password reset code.</Text>
      </View>
      <View style={styles.textInputContainer}>
          <View
            style={[
              styles.inputWrapper,
              isEmailFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/sms.png')}
              style={[
              styles.inputIcon,
              isEmailFocused && styles.iconFocused, 
            ]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              placeholderTextColor="#565656"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>
    </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleNextPress}>
        <Text style={styles.loginButtonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Remember the password?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={handleTryAgain}>
          <Text style={styles.signUpButtonText}>Try Again </Text>
        </TouchableOpacity>
      </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#FFF'
  },
  headerContainer: {
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginRight: 10,
    color:'#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#454242',
    fontWeight:'400'
  },
  textInputContainer: {
    marginTop: 20,
  },
  textInputContainer: {
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    margin: '1%',
    flex: 1,
    justifyContent: 'flex-start',
    borderColor: '#F3F4F6',
    borderWidth: 2,
  },
  inputFocused: {
    borderColor: '#475AD7',
  },
  iconFocused:{
    tintColor: '#475AD7',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    tintColor: '#7A7A7A',
  },
  textInput: {
    height: 40,
    color: 'black',
    margin:"3%",
    width:'30%'
  },

  loginButton: {
    backgroundColor: '#475AD7',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:'130%'
  },
  signUpText: {
    fontSize: 16,
    color:'#7A7A7A',
    fontWeight:'500'
  },
  signUpButton: {
    marginLeft: 0,
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#475AD7',
  },
});

export default ForgetPassword;
