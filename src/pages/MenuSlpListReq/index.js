import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowWidth } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';

export default function MenuSlpListReq({ route }) {
    const user = route.params;
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.post(urlAPI + '/1data_slp.php', {
            fid_user: user.id
        }).then(res => {
            console.warn('res', res.data);
            setData(res.data);
        })
    }, []);
    const __render = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                padding: 10,
                marginVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: colors.primary,
            }}>
                <View style={{
                    flex: 1
                }}>
                    <Text style={{ fontFamily: fonts.secondary[600], fontSize: windowWidth / 32 }}>Request Date</Text>
                    <Text style={{ fontFamily: fonts.secondary[400], fontSize: windowWidth / 32 }}>{item.tanggal}</Text>
                    <Text style={{ fontFamily: fonts.secondary[600], fontSize: windowWidth / 32 }}>Destination / route</Text>
                    <Text style={{ fontFamily: fonts.secondary[400], fontSize: windowWidth / 32 }}>{item.destinasi}</Text>
                </View>
                <View style={{
                    flex: 1
                }}>
                    <Text style={{ fontFamily: fonts.secondary[600], fontSize: windowWidth / 32 }}>Transport</Text>
                    <Text style={{ fontFamily: fonts.secondary[400], fontSize: windowWidth / 32 }}>{item.kendaraan}</Text>
                    <Text style={{ fontFamily: fonts.secondary[600], fontSize: windowWidth / 32 }}>Replaced by</Text>
                    <Text style={{ fontFamily: fonts.secondary[400], fontSize: windowWidth / 32 }}>{item.digantikan}</Text>

                </View>
                <View>
                    <Text style={{
                        backgroundColor: colors.primary,
                        padding: 5,
                        color: colors.white,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 32
                    }}>{item.tujuan}</Text>


                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
        }}>
            <FlatList data={data} renderItem={__render} />
        </SafeAreaView>
    )
}

