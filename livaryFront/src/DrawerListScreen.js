import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import colors from '../constants/colors';

export default function DrawerListScreen({route}) {
  const {type} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('삭제');

  // 예시 이메일 리스트
  const emailAccounts = [
    {
      icon: require('../assets/images/google.png'),
      email: 'mczero325@gmail.com',
    },
    {
      icon: require('../assets/images/naver.png'),
      email: 'mcy325@naver.com',
    },
    {
      icon: require('../assets/images/kakao.png'),
      email: 'mcy325@daum.net',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>디지털 흔적 서랍</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{type}</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.settingButton}>
          <Text style={styles.settingText}>설정</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {emailAccounts.map((item, index) => (
          <View key={index} style={styles.itemWrapper}>
            <View style={styles.item}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.emailText}>{item.email}</Text>
            </View>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>나의 흔적 추가하기</Text>
        <Image
          source={require('../assets/images/plus2.png')}
          style={styles.plusIcon}
        />
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>등록된 계정 설정</Text>

            <Text style={styles.modalLabel}>대리인 설정</Text>
            <Text style={styles.modalCaption}>
              *디지털 흔적 정리를 요청할 대리인을 지정하세요.
            </Text>
            <View style={styles.delegateBox}>
              <Text style={styles.delegateText}>
                김민지{'\n'}min.ji1234@naver.com
              </Text>
            </View>
            <TouchableOpacity style={styles.delegateAddBtn}>
              <Text style={styles.delegateAddText}>대리인 추가하기</Text>
              <Image
                source={require('../assets/images/plus2.png')}
                style={styles.plusIcon2}
              />
            </TouchableOpacity>

            <Text style={styles.modalLabel}>처리 방식 설정</Text>
            <Text style={styles.modalCaption}>
              *디지털 흔적의 사후 처리 방식을 지정하세요.
            </Text>
            <View style={styles.methodRow}>
              {['삭제', '보관'].map(method => (
                <TouchableOpacity
                  key={method}
                  onPress={() => setSelectedMethod(method)}
                  style={[
                    styles.methodBtn,
                    selectedMethod === method && styles.methodBtnActive,
                  ]}>
                  <Text
                    style={[
                      styles.methodText,
                      selectedMethod === method && styles.methodTextActive,
                    ]}>
                    {method}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>저장</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontSize: 24,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
  },
  settingButton: {
    backgroundColor: colors.navy,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  settingText: {
    color: colors.white,
    fontFamily: 'Ownglyph_corncorn',
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 100,
  },
  itemWrapper: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  emailText: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
  },
  divider: {
    marginTop: 20,
    height: 1,
    backgroundColor: colors.navy,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.navy,
    fontFamily: 'Ownglyph_corncorn',
    fontSize: 18,
    marginRight: 6,
  },
  plusIcon: {
    width: 40,
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    marginBottom: 16,
  },
  modalLabel: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    marginTop: 10,
    marginBottom: 4,
  },
  modalCaption: {
    fontSize: 14,
    color: colors.gray600,
    marginBottom: 10,
    fontFamily: 'Ownglyph_corncorn',
  },
  delegateBox: {
    borderWidth: 2,
    borderColor: colors.navy,
    backgroundColor: colors.gray100,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  delegateText: {
    fontSize: 14,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
  },
  delegateAddBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  delegateAddText: {
    marginRight: 6,
    fontFamily: 'Ownglyph_corncorn',
    fontSize: 14,
  },
  plusIcon2: {
    width: 30,
    height: 30,
  },
  methodRow: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 20,
  },
  methodBtn: {
    borderWidth: 1,
    borderColor: colors.navy,
    padding: 16,
    borderRadius: 6,
    backgroundColor: colors.gray100,
  },
  methodBtnActive: {
    backgroundColor: colors.navy,
  },
  methodText: {
    fontFamily: 'Ownglyph_corncorn',
    textAlign: 'flex-start',
    color: colors.black,
    fontSize: 14,
  },
  methodTextActive: {
    color: colors.white,
  },
  saveBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: colors.navy,
    marginTop: 10,
  },
  saveBtnText: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Ownglyph_corncorn',
  },
});
