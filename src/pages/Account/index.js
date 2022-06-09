import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { getData, storeData } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Account({ navigation, route }) {
  const [user, setUser] = useState({});
  const [com, setCom] = useState({});
  const isFocused = useIsFocused();
  const [wa, setWA] = useState('');



  useEffect(() => {
    if (isFocused) {
      getData('user').then(res => {
        setUser(res);
        console.error(res);
      });

    }
  }, [isFocused]);

  const btnKeluar = () => {
    storeData('user', {});

    navigation.replace('Login');
  };

  const kirimWa = x => {
    Linking.openURL(
      'https://api.whatsapp.com/send?phone=' +
      x +
      '&text=Halo%20NIAGA%20BUSANA',
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 10 }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={{
            uri: user.foto_user,
          }} style={{ width: 120, height: 120, borderRadius: 10, }} />
        </View>

        {/* data detail */}
        <View style={{ padding: 10 }}>

          <MyGap jarak={10} />
          <View>
            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Nama Lengkap
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.nama_lengkap}
              </Text>
            </View>

            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Jabatan
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.jabatan}
              </Text>
            </View>


            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Email Gmail / Ymail
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.email}
              </Text>
            </View>

            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Email Gmail / Ymail
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.email}
              </Text>
            </View>

            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Nomor Telephone ( WA )
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.telepon}
              </Text>
            </View>

            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Email @dsspower.co.id ( Jika ada )
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.email2}
              </Text>
            </View>

            <View
              style={{
                marginVertical: 5,
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.black,
                }}>
                Alamat
              </Text>
              <Text
                style={{
                  fontFamily: fonts.secondary[400],
                  color: colors.primary,
                }}>
                {user.alamat}
              </Text>
            </View>

          </View>
        </View>

        <View style={{
          flexDirection: 'row'
        }}>
          <View style={{
            flex: 1,
            margin: 5,
          }}>
            <MyButton
              onPress={() => navigation.navigate('EditProfile', user)}
              title="Edit Profile"
              colorText={colors.primary}
              iconColor={colors.primary}
              warna={colors.secondary}
              Icons="create-outline"
            />
          </View>
          <View style={{
            flex: 1,
            margin: 5,
          }}>
            <MyButton
              onPress={btnKeluar}
              title="Keluar"
              colorText={colors.white}
              iconColor={colors.white}
              warna={colors.primary}
              Icons="log-out-outline"
            />
          </View>
        </View>
        {/* button */}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});