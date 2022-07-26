import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import { fonts } from '../../utils/fonts';
import { WebView } from 'react-native-webview';
import { Icon } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { MyButton } from '../../components';

export default function MenuSlpListDetail({ navigation, route }) {
    const item = route.params.id;
    console.log(item)
    const [loading, setLoading] = useState(true);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 10,
                backgroundColor: colors.white
            }}>
            <WebView
                onLoad={() => setLoading(false)}
                injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                scalesPageToFit={false}
                style={{
                    flex: 1,
                }}
                source={{
                    uri: 'https://esignapps.zavalabs.com/slp/print/' + route.params.id

                }}
            />
            {route.params.tipe == "ttd" && <View style={{
                flex: 0.3,
                padding: 10,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <MyButton onPress={() => navigation.navigate('MenuSlpTTD', {
                        id: route.params.id,
                        ttd: 'digantikan',
                        person: 'Back to Back'
                    })} marginVertical={5} flex={1} marginHorizontal={5} title="Back to back" warna={colors.primary} Icons="create-outline" />
                    <MyButton onPress={() => navigation.navigate('MenuSlpTTD', {
                        id: route.params.id,
                        ttd: 'cek_3',
                        person: 'Checked by Section'
                    })} marginVertical={5} flex={1} marginHorizontal={5} title="Checked by Section" warna={colors.primary} Icons="create-outline" />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <MyButton onPress={() => navigation.navigate('MenuSlpTTD', {
                        id: route.params.id,
                        ttd: 'cek_4',
                        person: 'Approved by Division'
                    })} marginVertical={5} flex={1} marginHorizontal={5} title="Approved by Division" warna={colors.primary} Icons="create-outline" />
                    <MyButton onPress={() => navigation.navigate('MenuSlpTTD', {
                        id: route.params.id,
                        ttd: 'cek_5',
                        person: 'Checked by HRGA'
                    })} marginVertical={5} flex={1} marginHorizontal={5} title="Checked by HRGA" warna={colors.primary} Icons="create-outline" />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <MyButton onPress={() => navigation.navigate('MenuSlpTTD', {
                        id: route.params.id,
                        ttd: 'cek_6',
                        person: 'Acknowledge'
                    })} marginVertical={5} flex={1} marginHorizontal={5} title="Acknowledge" warna={colors.primary} Icons="create-outline" />
                    <MyButton onPress={() => navigation.navigate('MenuSlpTTD', {
                        id: route.params.id,
                        ttd: 'cek_7',
                        person: 'Checked by HSE'
                    })} marginVertical={5} flex={1} marginHorizontal={5} title="Checked by HSE" warna={colors.primary} Icons="create-outline" />
                </View>
            </View>}


            {loading && <View style={{
                backgroundColor: colors.white,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} /></View>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})