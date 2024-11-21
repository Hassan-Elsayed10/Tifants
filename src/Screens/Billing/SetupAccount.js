import React, { useState } from 'react';
import {
    Text, View, TouchableOpacity, Image
} from 'react-native';
import { ScaledSheet, s } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function SetupAccount() {
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
    const infoSheet = () => {
        setShowModal(true)
    }
    const handleCancel = () => {
        setShowModal(false)

    }
    return (
        <View style={[styles.container, ShowModal && (styles.info)]}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../Assets/Frame(6).png")} />
                </TouchableOpacity>

                <TouchableOpacity  >
                    <View style={styles.roomContainer}>
                        <Text style={styles.headertext}>Setup Account</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={infoSheet}>
                    <Image source={require("../../../Assets/vuesax/info-circle.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.TitleContainer}>
                <Text style={styles.title}>Select Option</Text>
                <Text style={styles.subtitle}>Choose who will pay for online transaction fee</Text>
            </View>
            <View style={styles.CardContainer}>
                {
                    isParent ?
                        (
                            <TouchableOpacity style={styles.SelectCard} onPress={handelSelectParent}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/vuesax/profile-2user.png")} />
                                    <Icon name="dot-circle" size={30} color="#FFF" light />
                                </View>
                                <View style={styles.textCard}>
                                    <Text style={styles.SelecttitleCard}>Parent Pays</Text>
                                    <Text style={styles.SelectsubtitleCard}>No fees paid by school</Text>
                                    <Text style={styles.SelectsubtitleCard}>Bank: 1.25  Credit Card 3.00% + 1</Text>
                                </View>

                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity style={styles.Card} onPress={handelSelectParent}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/profile-2user.png")} />
                                    <Icon name="circle" size={30} color="#C6C6C6" light />
                                </View>
                                <View style={styles.textCard}>
                                    <Text style={styles.titleCard}>Parent Pays</Text>
                                    <Text style={styles.subtitleCard}>No fees paid by school</Text>
                                    <Text style={styles.subtitleCard}>Bank: 1.25  Credit Card 3.00% + 1</Text>
                                </View>

                            </TouchableOpacity>
                        )

                }
                {
                    isSchool ?
                        (
                            <TouchableOpacity style={styles.SelectCard} onPress={handelSelectSchool}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/vuesax/building-4.png")} />
                                    <Icon name="dot-circle" size={30} color="#FFF" light />
                                </View>
                                <View style={styles.textCard}>
                                    <Text style={styles.SelecttitleCard}>School Pays</Text>
                                    <Text style={styles.SelectsubtitleCard}>No fees paid by school</Text>
                                    <Text style={styles.SelectsubtitleCard}>Bank: 1.25  Credit Card 3.00% + 1</Text>
                                </View>
                            </TouchableOpacity>

                        )
                        :
                        (
                            <TouchableOpacity style={styles.Card} onPress={handelSelectSchool}>
                                <View style={styles.rowIcon}>
                                    <Image source={require("../../../Assets/building-3.png")} />
                                    <Icon name="circle" size={30} color="#C6C6C6" light />
                                </View>
                                <View style={styles.textCard}>
                                    <Text style={styles.titleCard}>School Pays</Text>
                                    <Text style={styles.subtitleCard}>No fees paid by school</Text>
                                    <Text style={styles.subtitleCard}>Bank: 1.25  Credit Card 3.00% + 1</Text>
                                </View>
                            </TouchableOpacity>

                        )
                }

            </View>

            {ShowModal ? (
                <View style={styles.ModalContainer}>
                    <View style={styles.Modal}>
                        <Image source={require('../../../Assets/Group36664.png')} style={{}} />
                        <Text style={styles.ModalTitle}>Payment Timeline</Text>
                    </View>
                    <View style={{flex:1}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',flex:1}}>
                        <Image source={require('../../../Assets/vuesax/bank.png')} />
                        <Text style={styles.Modalsub}>ACH/Bank</Text>
                        <Text style={styles.Modalsub2}>2 business days</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',flex:1 }}>
                        <Image source={require('../../../Assets/vuesax/cards.png')} />
                        <Text style={styles.Modalsub}>Credit Card</Text>
                        <Text style={styles.Modalsub2}>1 business days</Text>
                    </View>
                    </View>

                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.PhoneButton} onPress={handleCancel}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image source={require('../../../Assets/Vector(2).png')} />

                                <Text style={styles.PhoneButtonText}>+91 385 438 7312</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
                :
                (
                    <View style={{ flex: 2 }}>
                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('TransactionRecord')} >
                            <Text style={styles.buttonText1}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                )

            }

        </View>
    );
}
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 10,
        flex: 1,
        margin: '10@vs',
        padding: '10@vs',
    },
    roomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertext: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        marginRight: 10,
        color: '#000000',
    },
    TitleContainer: {
        flex: 1,
        margin: '10@vs',
        padding: '10@vs',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#454242',
        textAlign: 'center'
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
    ModalContainer: {
        flex: 20,
        backgroundColor:'#FFF',
        borderRadius: 12,
        marginBottom:10

    },
    Modal: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    ModalTitle: {
        fontSize: '18@vs',
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
    },
    Modalsub: {
        fontSize: '15@vs',
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
    },
    Modalsub2: {
        fontSize: 16,
        fontWeight: '400',
        color: '#454242',
        textAlign: 'center',
    },
    Modalsub1: {
        fontSize: '15@vs',
        fontWeight: '400',
        color: '#000000',
    },
    cancelButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderColor: '#475AD7',
        borderWidth: 1,
        justifyContent: 'center',
        margin:10,
        padding:10,

    },
    cancelButtonText: {
        fontSize: 16,
        color: '#475AD7',
        textAlign: 'center',
    },
    PhoneButton: {
        backgroundColor: '#475AD7',
        borderRadius: 12,
        borderColor: '#475AD7',
        borderWidth: 1,
        justifyContent: 'center',
        margin:10,
        padding:10,
    },
    PhoneButtonText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',

    },
    info: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
    }
});
