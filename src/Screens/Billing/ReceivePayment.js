import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function ReceivePayment() {
    const navigation = useNavigation();

    const [isParent, setIsParent] = useState(false);
    const [isSchool, setIsSchool] = useState(false);
    const [ShowModal, setShowModal] = useState(false)
    const handelSelectParent = () => {
        setIsParent(true);
        setIsSchool(false);
    }
    const handelSelectSchool = () => {
        setIsSchool(true);
        setIsParent(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Receive Payment</Text>
            </View>

            <View style={styles.header}>
                <Text style={styles.textheader}>Please choose method to receive the payment</Text>
            </View>

            <View style={styles.CardContainer}>
                {
                    isParent ?
                        (
                            <TouchableOpacity style={styles.SelectCard} onPress={handelSelectParent}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/vuesax/cardsw.png")} />
                                    <Text style={styles.SelecttitleCard}>Credit Card</Text>
                                    <Icon name="dot-circle" size={30} color="#FFF" light />
                                </View>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity style={styles.Card} onPress={handelSelectParent}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/vuesax/cardsb.png")} />
                                    <Text style={styles.titleCard}>Credit Card</Text>
                                    <Icon name="circle" size={30} color="#C6C6C6" light />
                                </View>
                            </TouchableOpacity>
                        )

                }
                {
                    isSchool ?
                        (
                            <TouchableOpacity style={styles.SelectCard} onPress={handelSelectSchool}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/vuesax/moneysw.png")} />
                                    <Text style={styles.SelecttitleCard}>Check / Cash</Text>

                                    <Icon name="dot-circle" size={30} color="#FFF" light />
                                </View>
                            </TouchableOpacity>

                        )
                        :
                        (
                            <TouchableOpacity style={styles.Card} onPress={handelSelectSchool}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/vuesax/moneys.png")} />
                                    <Text style={styles.titleCard}>Check / Cash</Text>
                                    <Icon name="circle" size={30} color="#C6C6C6" light />
                                </View>
                            </TouchableOpacity>

                        )
                }

            </View>

            <View style={{ flex: 2,justifyContent:'center', }}>
                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('ReceivePaymentSubmit')} >
                            <Text style={styles.buttonText1}>Next</Text>
                        </TouchableOpacity>
            </View>
        </View>
    );

}

export const styles = ScaledSheet.create({
    container: {
        padding: '2@vs',
        backgroundColor: '#FFF',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        margin: '10@vs',
        padding: '10@vs',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    textheader: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    button1: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        paddingVertical: '15@vs',
        margin: 10,
    },

    buttonText1: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500'
    },

    SelectCard: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        padding: '10@vs',
        marginBottom: '15@vs',
        backgroundColor: '#475AD7'
    },
    SelecttitleCard: {
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF'
    },
    SelectsubtitleCard: {
        fontWeight: '400',
        fontSize: 16,
        color: '#EDEDED'
    },
    CardContainer: {
        flex: 5,
        margin: '10@vs',
        padding: '10@vs',
    },
    Card: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#C6C6C6',
        padding: '10@vs',
        marginBottom: '15@vs'
    },
    rowIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleCard: {
        fontWeight: '500',
        fontSize: 18,
        color: '#3D3D3D'
    },
    subtitleCard: {
        fontWeight: '400',
        fontSize: 16,
        color: '#3D3D3D'
    },
})