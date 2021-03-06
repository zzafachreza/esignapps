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
import { fonts } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import MyCarouser from '../../components/MyCarouser';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import 'intl';
import 'intl/locale-data/jsonp/en';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';

export default function Home({ navigation }) {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState(0);
  const [token, setToken] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {

    const unsubscribe = messaging().onMessage(async remoteMessage => {

      const json = JSON.stringify(remoteMessage);
      const obj = JSON.parse(json);



      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: 'esignapps', // (required) channelId, if the channel doesn't exist, notification will not trigger.
        title: obj.notification.title, // (optional)
        message: obj.notification.body, // (required)
      });
    });

    if (isFocused) {
      __getDataUserInfo();
    }
    return unsubscribe;
  }, [isFocused]);


  const __getDataUserInfo = () => {
    getData('user').then(users => {
      setUser(users);
      getData('token').then(res => {
        console.log('data token,', res);
        setToken(res.token);
        axios
          .post(urlAPI + '/update_token.php', {
            id: users.id,
            token: res.token,
          })
          .then(res => {
            console.error('update token', res.data);
          });
      });
    });
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;

  const DataKategori = ({
    icon,
    nama,
    nama2,
    onPress,
    warna = colors.primary,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: warna,
          padding: 5,
          borderRadius: 10,
          width: windowWidth / 2.5,
          height: windowHeight / 5,
          elevation: 5,
          justifyContent: 'center',
        }}>
        <View>
          <Icon
            type="ionicon"
            name={icon}
            color={colors.primary}
            size={windowWidth / 5}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              fontSize: windowWidth / 30,
              textAlign: 'center',

            }}>
            {nama}
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.primary,
              fontSize: windowWidth / 30,
              textAlign: 'center',
            }}>
            {nama2}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>

      <View
        style={{
          height: windowHeight / 9,
          padding: 10,
          marginBottom: 20,
          flexDirection: 'row',
        }}>


        <View style={{ paddingLeft: 10, flex: 1 }}>
          <Text
            style={{
              fontSize: windowWidth / 30,
              color: colors.primary,
              fontFamily: fonts.secondary[600],
            }}>
            Welcome, <Text
              style={{
                fontSize: windowWidth / 30,
                color: colors.black,
                fontFamily: fonts.secondary[600],
              }}>
              {user.nama_lengkap}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: windowWidth / 20,
              color: colors.primary,
              fontFamily: fonts.secondary[600],
            }}>
            E-Sign Apps
          </Text>

        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../../assets/logo.png')} style={{
            width: 150,
            resizeMode: 'contain'
          }} />
        </View>
      </View>

      <MyCarouser />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <DataKategori
          warna={colors.secondary}
          onPress={() => navigation.navigate('MenuSlp', user)}
          icon="log-out-outline"
          nama="Personal Site"
          nama2="Leaving Permit (SLP)"
        />
        <DataKategori
          warna={colors.secondary}
          onPress={() => navigation.navigate('ListData2')}
          icon="checkmark-circle-outline"
          nama="Gate Pass"
          nama2="Manpower"
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <DataKategori
          warna={colors.secondary}
          onPress={() => navigation.navigate('MenuSlpList', user)}
          icon="file-tray-stacked-outline"
          nama="History Personal Site"
          nama2="Leaving Permit (SLP)"
        />
        <DataKategori
          warna={colors.secondary}
          onPress={() => navigation.navigate('ListData2')}
          icon="file-tray-stacked-outline"
          nama="History Gate Pass"
          nama2="Manpower"
        />
      </View>



    </SafeAreaView>
  );
}
