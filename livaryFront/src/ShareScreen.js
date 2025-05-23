import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../constants/colors';

export default function ShareScreen() {
  const sharedFriends = ['아리', '베릴'];
  const friendsTraces = ['썬', '안'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>나의 흔적 공유하기</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          내 흔적을 함께 나눌 사람을 선택하세요.{'\n'}
        </Text>
        <Text style={styles.infoText}>
          원하는 기록만 선택해{'\n'}가족이나 친구에게 공유할 수 있습니다.
        </Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>공유 중인 친구</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/plus2.png')}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
      {sharedFriends.map((name, index) => (
        <View key={index}>
          <View style={styles.friendRow}>
            <View style={styles.personBox}>
              <Image
                source={require('../assets/images/person.png')}
                style={styles.personIcon}
              />
            </View>
            <Text style={styles.friendName}>{name}</Text>
          </View>
          <View style={styles.divider} />
        </View>
      ))}

      <Text style={styles.sectionTitle}>친구의 흔적</Text>
      {friendsTraces.map((name, index) => (
        <View key={index}>
          <View style={styles.friendRow}>
            <View style={styles.personBox}>
              <Image
                source={require('../assets/images/person.png')}
                style={styles.personIcon}
              />
            </View>
            <Text style={styles.friendName}>{name}</Text>
          </View>
          <View style={styles.divider} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Ownglyph_corncorn',
    textAlign: 'center',
    marginBottom: 24,
    color: colors.black,
  },
  infoBox: {
    borderWidth: 2,
    borderColor: colors.navy,
    borderRadius: 10,
    backgroundColor: colors.gray100,
    padding: 16,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    textAlign: 'center',
    lineHeight: 26,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    marginTop: 10,
    marginBottom: 10,
  },
  plusIcon: {
    width: 30,
    height: 30,
  },
  friendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  personBox: {
    width: 50,
    height: 50,
    backgroundColor: colors.gray200,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  personIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  friendName: {
    fontSize: 16,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: colors.navy,
    marginVertical: 10,
  },
});
