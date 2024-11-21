import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView,Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
  const [isFocused1, setisFocused1] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);
  const [isFocused3, setisFocused3] = useState(false);
  const [isFocused4, setisFocused4] = useState(false);
  const [first, setfirst] = useState('');
  const [seconed, setsecond] = useState('');
  const [third, setthird] = useState('');
  const [fourth, setfourth] = useState('');
  const navigation = useNavigation();


  const handleNextPress = () => {
    navigation.navigate('NewPassword')
  };
  const handleSendAgain = () => {
    navigation.navigate('ForgetPassword')

  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Verification Code ✅</Text>
        <Text style={styles.subtitle}>You need to enter 4-digit code we send to your email adress.</Text>
      </View>
      <View style={styles.textInputContainer}>
        <View style={[styles.inputWrapper, isFocused1 && styles.inputFocused]}>
          <TextInput
            style={[styles.textInput,isFocused1 && styles.wrraperFocused]} 
            placeholder="-"
            placeholderTextColor="#7C82A1" 
            maxLength={1}
            value={first}
            onChangeText={setfirst}
            onFocus={() => setisFocused1(true)}
            onBlur={() => setisFocused1(false)}
          />
        </View>

        <View style={[styles.inputWrapper, isFocused2 && styles.inputFocused]}>
          <TextInput
            style={[styles.textInput,isFocused2 && styles.wrraperFocused]} 
            placeholder="-"
            placeholderTextColor="#7C82A1" 
            maxLength={1}
            value={seconed}
            onChangeText={setsecond}
            onFocus={() => setisFocused2(true)}
            onBlur={() => setisFocused2(false)}
          />
        </View>

        <View style={[styles.inputWrapper, isFocused3 && styles.inputFocused]}>
          <TextInput
            style={[styles.textInput,isFocused3 && styles.wrraperFocused]} 
            placeholder="-"
            placeholderTextColor="#7C82A1" 
            maxLength={1}
            value= {third}
            onChangeText={setthird}
            onFocus={() => setisFocused3(true)}
            onBlur={() => setisFocused3(false)}
          />
        </View>

         <View style={[styles.inputWrapper, isFocused4 && styles.inputFocused]}>
          <TextInput
            style={[styles.textInput,isFocused4 && styles.wrraperFocused]} 
            placeholder="-"
            placeholderTextColor="#7C82A1" 
            maxLength={1}
            value= {fourth}
            onChangeText={setfourth}
            onFocus={() => setisFocused4(true)}
            onBlur={() => setisFocused4(false)}
          />
        </View>
      </View>
    
      <TouchableOpacity style={styles.loginButton} onPress={handleNextPress}>
        <Text style={styles.loginButtonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Didn’t receive an email?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSendAgain}>
          <Text style={styles.signUpButtonText}> Send Again </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    margin:'1%',
    justifyContent:'center',
  },
  inputWrapper: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor:'#F3F4F6',
    margin:'2%',
    flex:1,
    alignItems:'center',
  },
  inputFocused: {
    marginBottom: 20,
    borderRadius: 12,
    borderColor:'#475AD7',
    margin:'2%',
    flex:1,
    alignItems:'center',
    borderWidth:1
  },
  textInput: {
    color: '#000000',
    margin:"2%",
    textAlign:'center',
    fontWeight:'400',
    fontSize:18
  },
  wrraperFocused:{
    color: '#475AD7',
    margin:"2%",
    textAlign:'center',
    fontWeight:'400',
    fontSize:18
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
    marginTop:'130%',
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

export default Verification;
