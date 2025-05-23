import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

export default function DrawerScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>디지털 흔적 서랍</Text>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          내 흔적, 지금까지 9개가 등록되어 있어요.
        </Text>
        <Text style={styles.descriptionText}>
          마지막 업데이트: 2025. 04. 29.
        </Text>
      </View>

      <View style={styles.boxRow}>
        <BoxWithLabel label="사진" navigation={navigation} />
        <BoxWithLabel label="문서" navigation={navigation} />
      </View>
      <View style={styles.boxRow}>
        <BoxWithLabel label="이메일" navigation={navigation} />
        <BoxWithLabel label="기타" navigation={navigation} />
      </View>
    </View>
  );
}

function BoxWithLabel({label, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DrawerList', {type: label})}>
      <View style={styles.boxWrapper}>
        <Image
          source={require('../assets/images/box.png')}
          style={styles.boxImage}
          resizeMode="contain"
        />
        <Text style={styles.boxLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    marginBottom: 24,
  },
  descriptionBox: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.navy,
    borderRadius: 10,
    padding: 14,
    backgroundColor: colors.gray100,
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    textAlign: 'center',
    lineHeight: 40,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    width: '100%',
    marginBottom: 24,
  },
  boxWrapper: {
    width: 150,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  boxImage: {
    width: '100%',
    height: '100%',
  },
  boxLabel: {
    position: 'absolute',
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
  },
});
