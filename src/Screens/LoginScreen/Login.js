import React, { useState } from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [password, setPassword] = useState('');
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('HomeTabs');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgetPassword')

  };
  
  const handleSignUpPress = () => {
    navigation.navigate('SignUp')

  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome Back 👋</Text>
          <Text style={styles.subtitle}>
            Enter your details to get access to your account
          </Text>
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
          <View
            style={[
              styles.inputWrapper,
              isPasswordFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/password-check.png')}
              style={[styles.inputIcon,isPasswordFocused && styles.iconFocused,]}
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
            <View style={styles.eyecontainer}>
              {passwordVisible && (
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                >
                  <Image
                    source={require('../../../Assets/vuesax/eye.png')}
                    style={styles.eyeImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={handleForgotPasswordPress}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orButtonContainer}>
          <TouchableOpacity style={styles.orButton} onPress={handleSignUpPress}>
            <Image
              source={require('../../../Assets/Logo/logo_googleg_48dp.png')}
              style={[styles.inputIcon, styles.googleIcon]}
              resizeMode="contain"
            />
            <Text style={styles.orButtonText}>Log In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orButton} onPress={handleSignUpPress}>
            <Image
              source={require('../../../Assets/Logo/path14.png')}
              style={[styles.inputIcon, styles.facebookIcon]}
              resizeMode="contain"
            />
            <Text style={styles.orButtonText}>Log In with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSignUpPress}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    backgroundColor: '#FFFF',
  },
  headerContainer: {
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginRight: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#454242',
    fontWeight: '400',
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
  eyecontainer: {
    marginLeft: '45%',
  },
  textInput: {
    height: 40,
    color: 'black',
    margin: '3%',
    width: '50%',
    fontSize: 16,
  },
  textInput1: {
    height: 40,
    color: 'black',
    margin: '3%',
    width: '30%',
    fontSize: 16,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    flex: 1,
    justifyContent: 'center',
  },
  eyeImage: {
    width: '100%',
    height: '100%',
    tintColor: '#7A7A7A',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#565656',
    fontSize: 16,
    fontWeight: '400',
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
  orText: {
    textAlign: 'center',
    marginTop: '10%',
    color: '#757575',
    fontWeight: '700',
  },
  orButtonContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  orButton: {
    backgroundColor: '#FFFF',
    borderRadius: 12,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  orButtonText: {
    fontSize: 16,
    color: '#565656',
    textAlign: 'center',
  },
  googleIcon: {
    tintColor: '#DB4437',
  },
  facebookIcon: {
    tintColor: '#4267B2',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '35%',
  },
  signUpText: {
    fontSize: 16,
    color: '#7A7A7A',
    fontWeight: '500',
  },
  signUpButton: {
    marginLeft: 0,
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#475AD7',
  },
});

export default Login;
