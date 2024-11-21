import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView,Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
 const [password, setPassword] = useState('');
 const [isPasswordFocused, setPasswordFocused] = useState(false);
 const [isPasswordRFocused, setPasswordRFocused] = useState(false);
 const navigation = useNavigation();


  const handleConfirmPress = () => {
    navigation.navigate('Login');

  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create New Password 🔒</Text>
        <Text style={styles.subtitle}>You can create a new password, please dont forget it too.</Text>
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
            style={styles.textInput} 
            placeholder="New Password"
            placeholderTextColor="#565656" 
            onChangeText={setPassword}
            value={password}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </View>
        <View
            style={[
              styles.inputWrapper,
              isPasswordRFocused && styles.inputFocused,
            ]}
          >
            <Image
              source={require('../../../Assets/vuesax/password-check.png')}
              style={[styles.inputIcon,isPasswordRFocused && styles.iconFocused,]}
              resizeMode="contain"
            />
          <TextInput
            style={styles.textInput} 
            placeholder="Repeat New Password" 
            placeholderTextColor="#565656" 
            onChangeText={setPassword}
            value={password}
            onFocus={() => setPasswordRFocused(true)}
            onBlur={() => setPasswordRFocused(false)}
          />
        </View>
    
      <TouchableOpacity style={styles.loginButton} onPress={handleConfirmPress}>
        <Text style={styles.loginButtonText}>Confirm</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '2%',
    margin:'1%',
    backgroundColor:'#FFF'
  },
  headerContainer: {
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginRight: 10,
    color:'#000000'
  },
  subtitle: {
    fontSize: 16,
    color: '#454242',
    fontWeight:'400',
    marginBottom:'15%'
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
  eyecontainer:{
    marginLeft:'45%'
  },
  textInput: {
    height: 40,
    color: 'black',
    margin:"3%",
    width:'60%'
  },
  eyeIcon: {
    width: 20,
    height: 20,
    flex:1,
    justifyContent:'center',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#565656',
    fontSize: 16,
    fontWeight:'400'
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
    color:'#757575',
    fontWeight:'700'
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
    borderColor:'#D9D9D9',
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'center',
  },
  orButtonText: {
    fontSize: 16,
    color: '#565656',
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
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

export default NewPassword;
