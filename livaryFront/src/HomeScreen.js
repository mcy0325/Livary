import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../constants/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Livary</Text>
        <Text style={styles.subtitle}>소중한 흔적을 Livary에 담아보세요.</Text>
      </View>

      <Text style={styles.titleText}>나의 흔적</Text>

      <View style={styles.box}>
        <TouchableOpacity style={styles.plusButton}>
          <Image
            source={require('../assets/images/plus.png')}
            style={styles.plusIcon}
          />
        </TouchableOpacity>

        <Text style={styles.infoText}>등록한 계정 수 : 3개</Text>
        <Text style={styles.infoText}>사진 수 : 3개</Text>
        <Text style={styles.infoText}>문서 수 : 3개</Text>
        <Text style={styles.infoText}>기타 자료 수 : 0개</Text>
        <Text style={styles.caption}>*지금까지 9개의 흔적을 정리했어요</Text>
      </View>

      <View style={styles.boxUnderline} />

      <View style={styles.row}>
        <Image
          source={require('../assets/images/paper.png')}
          style={styles.icon}
        />
        <Text style={styles.rowText}>
          최근 일주일 간 사진 321장, 정리해 보세요!
        </Text>
      </View>

      <View style={styles.row}>
        <Image
          source={require('../assets/images/calendar.png')}
          style={styles.icon}
        />
        <Text style={styles.rowText}>마지막 업데이트: 2025. 04. 29.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../assets/images/clock.png')}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>나의 흔적 타임라인 보기</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../assets/images/paper_2.png')}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>2025 연간 요약 PDF 다운로드</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: colors.white,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontFamily: 'OleoScript-Regular',
    color: colors.navy,
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
    color: colors.black,
    fontFamily: 'Ownglyph_corncorn',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
    color: colors.black,
    fontFamily: 'Ownglyph_corncorn',
  },
  box: {
    borderWidth: 2,
    borderColor: colors.navy,
    backgroundColor: colors.gray100,
    borderRadius: 8,
    padding: 18,
    marginBottom: 12,
    position: 'relative',
  },
  boxUnderline: {
    alignSelf: 'center',
    width: '100%',
    height: 10,
    backgroundColor: colors.navy,
    borderRadius: 5,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 18,
    marginTop: 14,
    fontFamily: 'Ownglyph_corncorn',
  },
  caption: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Ownglyph_corncorn',
  },
  plusButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 10,
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowText: {
    marginLeft: 8,
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
  },
  icon: {
    width: 28,
    height: 28,
  },
  button: {
    backgroundColor: colors.gray100,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.navy,
    borderRadius: 8,
    padding: 16,
    marginTop: 14,
  },
  buttonIcon: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Ownglyph_corncorn',
  },
});
