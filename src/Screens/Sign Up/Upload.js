import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator, Image, Modal } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [isUploadingRegistrationNumber, setIsUploadingRegistrationNumber] = useState(false);
  const [uploadedRegistrationNumberFile, setUploadedRegistrationNumberFile] = useState(null);
  const [isUploadingAddress, setIsUploadingAddress] = useState(false);
  const [uploadedAddressFile, setUploadedAddressFile] = useState(null);
  const [registrationNumberProgress, setRegistrationNumberProgress] = useState(0);
  const [addressProgress, setAddressProgress] = useState(0);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showRegistrationNumberProgressModal, setShowRegistrationNumberProgressModal] = useState(false);
  const [showAddressProgressModal, setShowAddressProgressModal] = useState(false);
  
  const navigation = useNavigation();

  let uploadProgressInterval = null;

  useEffect(()=>{
    if(registrationNumberProgress >= 100) {
      endProsses()
    }
  },[registrationNumberProgress])

  const startProsses = () => {
     uploadProgressInterval = setInterval(() => {
      setRegistrationNumberProgress(prevProgress => {
        const newProgress = prevProgress + 10; // Update the progress value as per your requirements
        return newProgress >= 100 ? 100 : newProgress; // Cap the progress at 100
      });
    }, 1000);
   }


   const endProsses = () => {
    clearInterval(uploadProgressInterval)
    setRegistrationNumberProgress(0);
    setShowRegistrationNumberProgressModal(false);
    setIsUploadingRegistrationNumber(false);
  }

  const handleLoginPress = () => {
    navigation.navigate('HomeTabs');
  };


  const handleRegistrationNumberUploadPress = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });

      console.log('File URI:', res.uri);
      console.log('File Type:', res.type);
      console.log('File Name:', res.name);
      console.log('File Size:', res.size);
      
      setIsUploadingRegistrationNumber(true);
      setShowRegistrationNumberProgressModal(true);
      startProsses()
      setUploadedRegistrationNumberFile(res);

    } catch (error) {
      console.log('DocumentPicker Error:', error);
    }
  };

  const handleAddressUploadPress = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });

      console.log('File URI:', res.uri);
      console.log('File Type:', res.type);
      console.log('File Name:', res.name);
      console.log('File Size:', res.size);
      setIsUploadingAddress(true);
      setShowAddressProgressModal(true);

      // Simulating the file upload process
      const uploadProgressInterval = setInterval(() => {
        setAddressProgress(prevProgress => {
          const newProgress = prevProgress + 10; // Update the progress value as per your requirements
          return newProgress >= 100 ? 100 : newProgress; // Cap the progress at 100
        });
      }, 1000);

      setTimeout(() => {
        // Add your logic to handle the uploaded file here

        setUploadedAddressFile(res);
        setIsUploadingAddress(false);
        clearInterval(uploadProgressInterval); // Stop the progress update interval
        setAddressProgress(0); // Reset the progress value
        setShowAddressProgressModal(false);
      }, 1000); // Simulating a 5-second upload process
    } catch (error) {
      console.log('DocumentPicker Error:', error);
    }
  };

  const handleRemoveFile = (type) => {
    if (type === 'registrationNumber') {
      setUploadedRegistrationNumberFile(null);
    } else if (type === 'address') {
      setUploadedAddressFile(null);
    }
  };

  const handleCancelUpload = async () => {
    setShowAddressProgressModal(false);
    setIsUploadingRegistrationNumber(false);
    setIsUploadingAddress(false);
    setRegistrationNumberProgress(0);
    setAddressProgress(0);
    setShowRegistrationNumberProgressModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Upload Documents</Text>
        <Text style={styles.subtitle}>Upload all required documents below</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.registrationContainer}>
          <Text style={styles.registrationText}>Registration Number</Text>
          {uploadedRegistrationNumberFile ? (
            <View style={styles.fileUploaded}>
              <View style={styles.fileInfoRow}>
                <Image source={require('../../../Assets/vuesax/document-text.png')} style={styles.fileIcon} />
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, flex: 1 }}>
                  <Text style={styles.fileName}>{uploadedRegistrationNumberFile.name}</Text>
                  <Text style={styles.fileSize}>{uploadedRegistrationNumberFile.size} KB</Text>
                </View>
                <TouchableOpacity onPress={() => handleRemoveFile('registrationNumber')}>
                  <Image source={require('../../../Assets/trash.png')} style={styles.trashIcon} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.uploadButtonDashed} onPress={handleRegistrationNumberUploadPress}>
              <Text style={styles.uploadButtonText}>Registration Number not Uploaded Tap Here to Upload the File</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.registrationText}>Address</Text>
          {uploadedAddressFile ? (
            <View style={styles.fileUploaded}>
              <View style={styles.fileInfoRow}>
                <Image source={require('../../../Assets/vuesax/document-text.png')} style={styles.fileIcon} />
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20, flex: 1 }}>
                  <Text style={styles.fileName}>{uploadedAddressFile.name}</Text>
                  <Text style={styles.fileSize}>{uploadedAddressFile.size} KB</Text>
                </View>
                <TouchableOpacity onPress={() => handleRemoveFile('address')}>
                  <Image source={require('../../../Assets/trash.png')} style={styles.trashIcon} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity style={styles.uploadButtonDashed} onPress={handleAddressUploadPress}>
              <View style={{ padding: 10 }}>
                <Text style={styles.uploadButtonText1}>Address not Uploaded</Text>
                <Text style={styles.uploadButtonText1}>Tap Here to Upload Your Address</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Progress Modal */}
      {showRegistrationNumberProgressModal && (
        <View style={styles.progressModalContainer}>
          <View style={styles.progressModal}>
            <Image source={require('../../../Assets/Group_188.png')} style={styles.fileIcon} />

            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
              <Text style={styles.progressModalTitle}>Uploading Registration Number</Text>
              <Text style={styles.progressModalsub}>Wait for the document to finish uploading</Text>
            </View>

            <View style={styles.progressBarContainer}>
              <View>
                <Text style={styles.uploadButtonText}>Uploading... {registrationNumberProgress}% </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelUpload}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {showAddressProgressModal && (
        <View style={styles.progressModalContainer}>
          <View style={styles.progressModal}>
            <Image source={require('../../../Assets/Group_188.png')} style={styles.fileIcon} />

            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
              <Text style={styles.progressModalTitle}>Uploading Address Number</Text>
              <Text style={styles.progressModalsub}>Wait for the document to finish uploading</Text>
            </View>

            <View style={styles.progressBarContainer}>
              <View>
                <Text style={styles.uploadButtonText}>Uploading... {addressProgress}% </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelUpload}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowhight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#FFFF',
  },
  headerContainer: {
    justifyContent: 'flex-end',
    marginBottom: 30,
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
  contentContainer: {
    marginTop: 50,
    alignItems: 'flex-start',
  },
  uploadButtonDashed: {
    backgroundColor: 'rgba(71, 90, 215, 0.15)',
    borderWidth: 1,
    borderColor: '#475AD7',
    borderStyle: 'dashed',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: '20%',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#475AD7',
    fontWeight: '400',
    padding: 10,
    textAlign: 'center',
  },
  uploadButtonText1: {
    fontSize: 16,
    color: '#475AD7',
    fontWeight: '400',
    textAlign: 'center',
  },
  fileInfoContainer: {
    backgroundColor: '#475AD7',
    borderWidth: 1,
    borderColor: '#475AD7',
    borderStyle: 'dashed',
    borderRadius: 15,
    width: 353,
    height: 100,
    alignItems: 'center',
    marginBottom: '20%',
  },
  fileUploaded: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
    alignItems: 'flex-start',
    marginBottom: '20%',
    width: 353,
    height: 100,
    justifyContent: 'center',
  },
  fileInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 10,
  },
  fileIcon: {
    width: 54,
    height: 54,
  },
  trashIcon: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  fileName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#565656',
  },
  fileSize: {
    fontSize: 16,
    color: '#565656',
    fontWeight: '400',

  },
  registrationText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#475AD7',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: '50%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // Progress Modal Styles
  progressModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.19)',
    borderRadius: 15
  },
  progressModal: {
    width: windowWidth - 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    height: windowhight - 75
  },
  progressModalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000'
  },
  progressModalsub: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
    color: '#454242',
    textAlign: 'left'
  },
  progressBarContainer: {
    backgroundColor: 'rgba(71, 90, 215, 0.15)',
    borderWidth: 1,
    borderColor: '#475AD7',
    borderStyle: 'dashed',
    borderRadius: 15,
    alignItems: 'center',
    width: 353,
    height: 80,
    justifyContent: 'center'
  },
  progressBar: {
    height: 10,
    backgroundColor: '#475AD7',
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#FFFFF',
    borderRadius: 12,
    marginBottom: 0,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#475AD7',
    flex: 1
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#475AD7',
    textAlign: 'center',
  },
});

export default RegisterScreen;