import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fonts } from '../../utils/fonts';
import { Icon } from 'react-native-elements';

export default function MyButton({
  title,
  warna,
  onPress,
  Icons,
  marginVertical,
  flex,
  marginHorizontal,
  radius = 10,
  colorText = 'white',
  fontWeight = 'normal',
  iconColor = 'white',
  borderSize = 0,
  borderColor = 'red',
}) {
  return (
    <TouchableOpacity
      style={styles(warna, radius, borderSize, borderColor, marginVertical, flex, marginHorizontal).btn}
      onPress={onPress}>
      <Icon type="ionicon" name={Icons} color={iconColor} size={18} />
      <Text
        style={{
          color: colorText,
          fontSize: 12,
          left: 5,
          fontFamily: fonts.primary[600],
          // fontWeight: fontWeight,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = (warna, radius, borderSize, borderColor, marginVertical, flex, marginHorizontal) =>
  StyleSheet.create({
    btn: {
      height: 50,
      flex: flex,
      marginHorizontal: marginHorizontal,
      borderRadius: radius,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: warna,
      borderWidth: borderSize,
      borderColor: borderColor,
      flexDirection: 'row',
      marginVertical: marginVertical
    },
  });
