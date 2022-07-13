import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowWidth } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import axios from 'axios';


export default function MenuSlpList({ navigation, route }) {
    const user = route.params;

    const MYLIST = ({ judul, icon, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                flex: 1,
                backgroundColor: colors.primary,
                marginHorizontal: 10,
                marginVertical: 5,
                padding: 10,
                flexDirection: 'row'
            }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{
                        color: colors.white,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20,
                    }}>{judul}</Text>
                </View>
                <View style={{
                    justifyContent: 'center'
                }}>
                    <Icon type='ionicon' name={icon} color={colors.white} size={windowWidth / 10} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <MYLIST judul="Request" icon="download-outline" onPress={() => navigation.navigate('MenuSlpListReq', user)} />

            <MYLIST judul="Back to back" icon="enter-outline" />

            <MYLIST judul="Checked by Section" icon="checkmark-circle-outline" />

            <MYLIST judul="Approved by Division" icon="checkbox-outline" />

            <MYLIST judul="Checked by HRGA" icon="shield-checkmark-outline" />

            <MYLIST judul="Acknowledge" icon="create-outline" />


        </SafeAreaView>
    )
}
