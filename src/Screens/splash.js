import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to another component after 3 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('BoardingOne');
    }, 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);


    return (
      <View style={styles.container}>
        <Image
          source={require("../../Assets/Group_2.png")}
          style={styles.image}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#475AD7',
    },
    image: {
      width: 85,
      height: 115,
    },
  });
  
export default SplashScreen;