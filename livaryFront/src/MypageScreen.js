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

export default function MypageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>전체 설정</Text>

      <View style={styles.profileRow}>
        <View style={styles.personBox}>
          <Image
            source={require('../assets/images/person2.png')}
            style={styles.personIcon}
          />
        </View>
        <View>
          <Text style={styles.vipText}>VIP</Text>
          <Text style={styles.idText}>ID: mcy325</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.item}>대리인 관리</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.item}>처리 방식 관리</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.item}>전체 디지털 흔적 백업 다운로드</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View>
        <TouchableOpacity>
          <Text style={styles.item}>회원탈퇴</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.item}>로그아웃</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.appVersionRow}>
        <Text style={styles.item}>앱 버전</Text>
        <Text style={styles.versionText}>2.0.1</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.item}>서비스 이용약관</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}>개인정보 처리방침</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
    color: colors.black,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  personBox: {
    width: 80,
    height: 80,
    backgroundColor: colors.gray200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  personIcon: {
    width: 50,
    height: 50,
  },
  vipText: {
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    marginBottom: 4,
  },
  idText: {
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.gray500,
  },
  item: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.navy,
    marginVertical: 10,
  },
  appVersionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  versionText: {
    fontSize: 16,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
  },
});
