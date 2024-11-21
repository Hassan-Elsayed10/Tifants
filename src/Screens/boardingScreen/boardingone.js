import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const images = [
  require('../../../Assets/Illustration.png'),
  require('../../../Assets/Illustration_1.png'),
  require('../../../Assets/Illustration_2.png'),
];
const texts = [
  {
    header: 'Simplify operations',
    sub: 'Manage your daycare more efficiently with Tifants\' scheduling, billing, and attendance tracking features.',
  },
  {
    header: 'Keep parents informed',
    sub: 'Communicate with parents in real-time through Tifants\' messaging system and share updates on meals, naps, and activities.',
  },
  {
    header: 'Boost Enrollment',
    sub: 'Tifants simplifies daycare management, so you can focus on growing your business with confidence.',
  },
];

const BoardingOne = () => {
  const { width, height } = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;
  const navigation = useNavigation();

  const skip = ()=>{
    setCurrentIndex(images.length - 1);

  }

  const prvious = () =>{
    setCurrentIndex(images.length - 2);

  }

  const goToNextImage = () => 
  {
    if (isLastImage) {
      navigation.navigate('Login')
    }
    const nextIndex = currentIndex + 1 < images.length ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const previousIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(previousIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <TouchableOpacity  onPress={isLastImage? prvious :skip}>
          {isLastImage?
          <View style={styles.iconcontainer}>
            <Icon name="arrow-back" size={30} color="#000000" />
            <Text style={styles.textskip}>{isLastImage?'Previous':'Skip'}</Text>
          </View>:<Text style={styles.textskip}>{isLastImage?'Previous':'Skip'}</Text>

          }       
        </TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <Image style={[styles.image, { width, height: height * 0.46 }]} source={images[currentIndex]} />
        <Text style={styles.textheader}>{texts[currentIndex].header}</Text>
        <Text style={styles.textsub}>{texts[currentIndex].sub}</Text>
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index ? styles.activeDot : null]}
            />
          ))}
        </View>
      </View>

      <View style= {isLastImage? styles.getstarted:styles.buttonsContainer}>
        <View style={isLastImage?null:styles.previous}>
        {!isLastImage && (
          <TouchableOpacity
            style={[styles.button, isFirstImage ? styles.disabledButton : null]}
            onPress={goToPreviousImage}
            disabled={isFirstImage}
          >
            <View style={styles.iconcontainer}>
            <Icon name="arrow-back" size={30} color="#000000" />

            <Text style={[styles.buttonText, isFirstImage ? styles.disabledButtonText : null]}>
              Previous
            </Text>
            </View>


          </TouchableOpacity>
        )}
        </View>
        <View style={isLastImage?styles.getbutton:styles.next}>
        <TouchableOpacity
          style={[
            styles.button,
            isLastImage ? styles.centerButton : null,
          ]}
          onPress={goToNextImage}
        >
          {isLastImage?
          <Text style={isLastImage?styles.getstartedtext:styles.buttonnext}>{isLastImage ? 'Get Started' : 'Next'}</Text>
          :
          <View style={styles.iconcontainer}>
          <Text style={isLastImage? styles.getstartedtext:styles.buttonnext}>{isLastImage ? 'Get Started' : 'Next'}</Text>
          <Icon name="arrow-forward" size={30} color="#000000" />
          </View>
          }
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0.1,
    alignItems: 'center',
    marginRight: 20,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    marginBottom: '10%',
  },
  textheader: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '700',
    color: '#000000',
    marginBottom: '5%',
  },
  textsub: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: '#454242',
    marginBottom: '10%',
  },
  textskip: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000000',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#475AD7',
    width:30
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    flex:.24,    
    // backgroundColor:'red',

  },

  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  buttonnext: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledButtonText: {
    color: 'gray',
  },
  next:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    // backgroundColor:'blue',
    marginRight:20
  },
  previous:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    // backgroundColor:'blue',
    marginLeft:20   
  },
  getstarted:{
    flex:.15,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
    
    
  },
  getbutton:{
    backgroundColor:'#475AD7',
    borderWidth:0,
    flex:1,
    marginLeft:'10%',
    padding:15,
    marginRight:'10%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12
  },
  getstartedtext:{
    color:'#FFFFFF'
  },
  iconcontainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }

});

export default BoardingOne;
