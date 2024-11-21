import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import DollarIcon from '../../../Assets/$';
import SentIIcon from '../../../Assets/₹';
export default function StudentActivityBilling() {
    const navigation = useNavigation();
    const { params } = useRoute();
    let item = params;
    const [isfocusedDollar, setfocusedDollar] = useState(false);
    const [isfocusedSent, setfocusedSent] = useState(false);
    const handleDollar = () => {
        setfocusedDollar(true);
        setfocusedSent(false);
    };
    const handleSent = () => {
        setfocusedDollar(false);
        setfocusedSent(true);
    };


    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../Assets/Frame(6).png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Family Transactions</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={item.image} />
                <View style={styles.info}>
                    <Text style={styles.textname}>{item.name}</Text>
                    <View style={styles.progressContainer}>
                        <Text style={styles.textprogress}>In Progress: 0</Text>
                        <Text style={styles.textprogress}>Unpaid: 100</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>Type</Text>
            <View style={styles.imageContainer2}>
                <Image source={require('../../../Assets/Frame(1).png')} style={{ backgroundColor: '#F3F4F6' }} />
                <View style={styles.info}>
                    <Text style={styles.infoname}>Invoice</Text>
                    <View style={styles.infoContainer}>
                        <Image source={require('../../../Assets/Frame(2).png')} />
                        <Text style={styles.textdate}>Date Due: March 10, 2023</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>Description</Text>
            <View>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Praesent consequat quam ut condimentum dictum.
                    Suspendisse sed leo viverra, malesuada eros ac,
                    luctus diam.
                </Text>
            </View>
            <Text style={styles.title}>Amount</Text>
            <View style={styles.amountContainer}>
                <Text style={styles.textAmount}>{isfocusedDollar ? '$' : '₹'} 100</Text>
                {
                    isfocusedDollar ?
                        (<View style={{ flexDirection: 'row', margin: 5 }}>
                            <TouchableOpacity style={styles.Selecteditemdollar} onPress={handleDollar}>
                                <DollarIcon />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.sent} onPress={handleSent}>
                                <SentIIcon />
                            </TouchableOpacity>
                        </View>
                        ) :
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <TouchableOpacity style={styles.dollar} onPress={handleDollar}>
                                <DollarIcon />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Selecteditemsent} onPress={handleSent}>
                                <SentIIcon />
                            </TouchableOpacity>
                        </View>
                }
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
        alignItems: 'center',
    },
    text: {
        fontSize: '15@vs',
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        flex: 1
    },
    progressContainer: {
        flexDirection: 'row'
    },
    info: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    textprogress: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.6)',
        marginLeft: '10@vs'
    },
    textname: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 10,
        marginBottom: 10
    },
    imageContainer: {
        flexDirection: 'row',
        flex: .2,
        margin: '15@vs',
    },
    title: {
        fontWeight: '500',
        color: '#000000',
        fontSize: 18,
        padding: '15@vs'
    },
    imageContainer2: {
        flexDirection: 'row',
        flex: .2,
        margin: '15@vs',
        alignItems: 'center',
    },
    infoname: {
        fontSize: '18@vs',
        fontWeight: '500',
        color: '#000000',
        marginLeft: '10@vs'

    },
    textdate: {
        fontSize: '14@vs',
        fontWeight: '400',
        color: '#000000',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10@vs'

    },
    description: {
        fontSize: '14@vs',
        fontWeight: '400',
        color: '#000000',
        marginLeft: '15@vs'
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '15@vs'
    },
    textAmount: {
        fontSize: '18@vs',
        fontWeight: '400',
        color: "#000000"
    },
    Selecteditemdollar: {
        backgroundColor: '#475AD7',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
        padding: 14,
        justifyContent: 'center'
    },
    Selecteditemsent: {
        backgroundColor: '#475AD7',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        padding: 14,
        justifyContent: 'center'
    },
    sent: {
        backgroundColor: '#BDBFC2',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        padding: 15,
        justifyContent: 'center'
    },
    dollar: {
        backgroundColor: '#BDBFC2',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
        padding: 14,
        justifyContent: 'center'
    },
})