import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TextInput,
    ActivityIndicator
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowWidth } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import { MyButton, MyGap } from '../../components';
import SignatureScreen from "react-native-signature-canvas";
import SignatureCapture from 'react-native-signature-capture';
import { showMessage } from 'react-native-flash-message';
export default function MenuSlpTTD({ route }) {

    const ref = useRef();

    const [loading, setLoading] = useState(false);
    const [kirim, setKirim] = useState({
        id: route.params.id,
        ttd: route.params.ttd
    })


    const imgWidth = '100%';
    const imgHeight = 250;


    const item = route.params;
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.border,
            justifyContent: 'center',
            padding: 20,
        }}>

            <View style={{ flex: 0.5, width: imgWidth, height: imgHeight }}>

                <TouchableOpacity onPress={() => {
                    ref.current.resetImage();
                }} style={{
                    width: 100,
                    height: 30,
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.black
                }}>
                    <Icon size={windowWidth / 25} type='ioncion' name='refresh' color={colors.white} />
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.white,
                        fontSize: windowWidth / 25
                    }}>Reset</Text>
                </TouchableOpacity>

                <SignatureCapture
                    style={{
                        flex: 1
                    }}
                    ref={ref}
                    onSaveEvent={x => {


                        setKirim({
                            ...kirim,
                            cek: `data:image/png;base64,${x.encoded}`
                        })


                    }}
                    onDragEvent={x => {
                        if (x.dragged) {
                            ref.current.saveImage()
                        }
                    }}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={true}
                    backgroundColor={colors.white}
                    strokeColor={colors.black}
                    minStrokeWidth={5}
                    maxStrokeWidth={4}
                    viewMode={"portrait"} />

            </View>
            <MyGap jarak={10} />
            {loading && <ActivityIndicator color={colors.primary} size="large" />}
            {!loading && <MyButton onPress={() => {
                // setLoading(true);
                console.log(kirim);
                axios.post(urlAPI + '/1add_slp_ttd.php', kirim).then(res => {
                    console.warn(res.data);
                    showMessage({
                        message: 'Your request has sent !',
                        type: 'success'
                    });
                    // setLoading(false);
                    // navigation.replace('MainApp')
                });
            }} Icons="cloud-upload-outline" warna={colors.primary} title="Sign for this request" />

            }

            <Text style={{
                fontFamily: fonts.secondary[600],
                color: colors.black,
                textAlign: 'center',
                fontSize: windowWidth / 13,
                marginVertical: 10,
            }}>{route.params.person}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})