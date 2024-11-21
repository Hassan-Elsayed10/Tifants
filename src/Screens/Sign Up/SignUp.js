import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isDaycareFocused, setDaycareFocused] = useState(false);
  const [isOwnerFocused, setOwnerFocused] = useState(false);
  const [isPhoneFocused, setPhoneFocused] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isAllFieldsFilled, setAllFieldsFilled] = useState(true);

  useEffect(() => {
    setAllFieldsFilled(
      password !== '' &&
      isEmailFocused &&
      isDaycareFocused &&
      isOwnerFocused &&
      isPhoneFocused
    );
  }, [password, isEmailFocused, isDaycareFocused, isOwnerFocused, isPhoneFocused]);


  const handleLoginPress = () => {
    navigation.navigate('RegisterScreen');

  };



  const handleSignUpPress = () => {
    console.log('Sign Up button pressed');
    // Add your logic for sign up button press here
  };


  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordVisible(text !== '');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
            {isAllFieldsFilled && (
              <TouchableOpacity style={styles.nextButton} onPress={handleSignUpPress}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Enter your details to get access to your account
          </Text>
          </View>

        </View>
        <View style={styles.textInputContainer}>
          <View
            style={[
              styles.inputWrapper,
              isDaycareFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/building-3.png')}
              style={[
                styles.inputIcon,
                isDaycareFocused && styles.iconFocused,
              ]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Daycare Name"
              placeholderTextColor="#565656"
              onFocus={() => setDaycareFocused(true)}
              onBlur={() => setDaycareFocused(false)}
            />
          </View>
          <View
            style={[
              styles.inputWrapper,
              isOwnerFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/user-square.png')}
              style={[
                styles.inputIcon,
                isOwnerFocused && styles.iconFocused,
              ]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Owner / Admin Name"
              placeholderTextColor="#565656"
              onFocus={() => setOwnerFocused(true)}
              onBlur={() => setOwnerFocused(false)}
            />
          </View>
          <View
            style={[
              styles.inputWrapper,
              isPhoneFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/call.png')}
              style={[
                styles.inputIcon,
                isPhoneFocused && styles.iconFocused,
              ]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Mobile Number"
              placeholderTextColor="#565656"
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
            />
          </View>
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
          <View
            style={[
              styles.inputWrapper,
              isPasswordFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/password-check.png')}
              style={[
                styles.inputIcon,
                isPasswordFocused && styles.iconFocused,
              ]}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput1}
              placeholder="Password"
              secureTextEntry={passwordVisible}
              placeholderTextColor="#565656"
              onChangeText={handlePasswordChange}
              value={password}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  scrollContent: {
    padding: 20,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    alignItems: 'stretch',
  },
  subtitleContainer:{
    alignItems: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nextButtonText: {
    fontSize: 16,
    color: '#475AD7',
    textAlign: 'center',
    padding:5
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#454242',
    fontWeight: '400',
    textAlign: 'center',

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
    justifyContent: 'flex-start',
    borderColor: '#F3F4F6',
    borderWidth: 2,
  },
  inputFocused: {
    borderColor: '#475AD7',
  },
  iconFocused: {
    tintColor: '#475AD7',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    tintColor: '#7A7A7A',
  },
  eyecontainer: {
    marginLeft: '45%',
  },
  textInput: {
    flex: 1,
    height: 40,
    color: 'black',
    margin: '3%',
    fontSize: 16,
  },
  textInput1: {
    flex: 1,
    height: 40,
    color: 'black',
    margin: '3%',
    fontSize: 16,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  eyeImage: {
    width: '100%',
    height: '100%',
    tintColor: '#7A7A7A',
  },
  loginButton: {
    backgroundColor: '#475AD7',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 50,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default SignUp;
