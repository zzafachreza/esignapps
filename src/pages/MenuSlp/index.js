import React, { useState, useEffect } from 'react';
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
    TextInput
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowWidth } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import { MyButton, MyGap } from '../../components';

export default function MenuSlp({ navigation, route }) {


    const user = route.params;
    const [pilihtujuan, setPilihtujuan] = useState({
        1: false,
        2: false,
        3: false,
    });


    const [pilihKendaraan, setPilihKendaraan] = useState({
        1: false,
        2: false,
    });

    const [kirim, setKirim] = useState({
        fid_user: route.params.id,
        tujuan: '',
        tanggal_sebelum: new Date(),
        tanggal_awal: new Date(),
        tanggal_akhir: new Date(),
        kembali_kerja: new Date(),
    })

    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1,
        }}>
            <ScrollView>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>PROJECT PERSONEL SITE LEAVING PERMIT (SLP)</Text>


                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    flexDirection: 'row',
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Name</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>{user.nama_lengkap}</Text>
                </View>
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    flexDirection: 'row',
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Title/Position</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>{user.jabatan}</Text>
                </View>
                {/* form isian data */}

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Purpose of</Text>
                    <View style={{
                        paddingVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => {
                            setPilihtujuan({
                                1: true,
                                2: false,
                                3: false
                            });
                            setKirim({
                                ...kirim,
                                tujuan: 'Day Off'
                            })
                        }
                        } style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihtujuan[1] ? colors.primary : colors.border,
                            flexDirection: 'row',
                            margin: 5,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihtujuan[1] ? colors.primary : colors.border,
                            }}>
                                {pilihtujuan[1] && <Icon type='ionicon' name='checkbox' color={colors.white} size={windowWidth / 30} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 30,
                            }}>Day Off</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            setPilihtujuan({
                                1: false,
                                2: true,
                                3: false
                            });
                            setKirim({
                                ...kirim,
                                tujuan: 'Demob'
                            })
                        }



                        } style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihtujuan[2] ? colors.primary : colors.border,
                            flexDirection: 'row',
                            margin: 5,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihtujuan[2] ? colors.primary : colors.border,
                            }}>
                                {pilihtujuan[2] && <Icon type='ionicon' name='checkbox' color={colors.white} size={windowWidth / 30} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 30,
                            }}>Demob</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setPilihtujuan({
                                1: false,
                                2: false,
                                3: true
                            });
                            setKirim({
                                ...kirim,
                                tujuan: 'Others'
                            })

                        }} style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihtujuan[3] ? colors.primary : colors.border,
                            flexDirection: 'row',
                            margin: 5,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihtujuan[3] ? colors.primary : colors.border,
                            }}>
                                {pilihtujuan[3] && <Icon type='ionicon' name='checkbox' color={colors.white} size={windowWidth / 30} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 30,
                            }}>Others</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Previous Arival Date</Text>

                    <DatePicker
                        style={{ width: '100%' }}
                        date={kirim.tanggal_sebelum}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                borderWidth: 0,
                                borderColor: colors.primary,
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {
                            setKirim({
                                ...kirim,
                                tanggal_sebelum: date
                            })
                        }}
                    />

                </View>

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Leave Date</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>

                        <View style={{
                            flex: 1,

                        }}>
                            <DatePicker
                                style={{ width: '100%' }}
                                date={kirim.tanggal_awal}
                                mode="date"
                                placeholder="select date"
                                format="DD/MM/YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                        borderColor: colors.primary,
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {
                                    setKirim({
                                        ...kirim,
                                        tanggal_awal: date
                                    })
                                }}
                            />

                        </View>

                        <Text style={{
                            flex: 1,
                            textAlign: 'center',
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,
                        }}>To</Text>

                        <View style={{
                            flex: 1,

                        }}>
                            <DatePicker
                                style={{ width: '100%' }}
                                date={kirim.tanggal_akhir}
                                mode="date"
                                placeholder="select date"
                                format="DD/MM/YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                        borderColor: colors.primary,
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {
                                    setKirim({
                                        ...kirim,
                                        tanggal_akhir: date
                                    })
                                }}
                            />
                        </View>

                    </View>

                </View>

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Return to work</Text>

                    <DatePicker
                        style={{ width: '100%' }}
                        date={kirim.kembali_kerja}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                borderWidth: 0,
                                borderColor: colors.primary,
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {
                            setKirim({
                                ...kirim,
                                kembali_kerja: date
                            })
                        }}
                    />

                </View>

                <View style={{

                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Destination / Route</Text>
                    <TextInput autoCapitalize='none' placeholder='Enter destination / route' style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                    }} value={kirim.destinasi} onChangeText={x => setKirim({
                        ...kirim,
                        destinasi: x
                    })} />
                </View>


                {/* transport */}

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Transport</Text>
                    <View style={{
                        paddingVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>



                        <TouchableOpacity onPress={() => {
                            setPilihKendaraan({
                                1: true,
                                2: false,
                            });
                            setKirim({
                                ...kirim,
                                kendaraan: 'Air Plane'
                            })
                        }



                        } style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihKendaraan[1] ? colors.primary : colors.border,
                            flexDirection: 'row',
                            margin: 5,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihKendaraan[1] ? colors.primary : colors.border,
                            }}>
                                {pilihKendaraan[1] && <Icon type='ionicon' name='checkbox' color={colors.white} size={windowWidth / 30} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 30,
                            }}>Air Plane</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setPilihKendaraan({
                                1: false,
                                2: true,

                            });
                            setKirim({
                                ...kirim,
                                tujuan: 'Inland'
                            })

                        }} style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: pilihKendaraan[2] ? colors.primary : colors.border,
                            flexDirection: 'row',
                            margin: 5,
                            padding: 0,

                        }}>
                            <View style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: pilihKendaraan[2] ? colors.primary : colors.border,
                            }}>
                                {pilihKendaraan[2] && <Icon type='ionicon' name='checkbox' color={colors.white} size={windowWidth / 30} />}

                            </View>

                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 30,
                            }}>Inland</Text>
                        </TouchableOpacity>

                    </View>
                </View>



                <View style={{

                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Report</Text>
                    <TextInput autoCapitalize='none' placeholder='Enter report' style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                    }} value={kirim.laporan} onChangeText={x => setKirim({
                        ...kirim,
                        laporan: x
                    })} />
                </View>

                <View style={{

                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Replaced by</Text>
                    <TextInput autoCapitalize='none' placeholder='Enter replaced by' style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                    }} value={kirim.digantikan} onChangeText={x => setKirim({
                        ...kirim,
                        digantikan: x
                    })} />
                </View>

                <View style={{

                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        flex: 1,
                    }}>Remarks</Text>
                    <TextInput multiline autoCapitalize='none' placeholder='Enter remarks' style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                    }} value={kirim.catatan} onChangeText={x => setKirim({
                        ...kirim,
                        catatan: x
                    })} />
                </View>


                <MyGap jarak={10} />
                <MyButton onPress={() => {
                    console.log(kirim)
                }} Icons="cloud-upload-outline" warna={colors.primary} title="Send your request" />
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})