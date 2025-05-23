import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import colors from '../constants/colors';
import {launchImageLibrary} from 'react-native-image-picker';

const capsuleList = [
  {
    title: '어린이날',
    date: '2025-05-05',
    icon: require('../assets/images/pill.png'),
  },
  {
    title: '한강 봄 산책',
    date: '2025-05-01',
    icon: require('../assets/images/pill.png'),
  },
  {
    title: '바다보러간 날',
    date: '2025-04-18',
    icon: require('../assets/images/pill.png'),
  },
  {
    title: '롯데월드',
    date: '2025-04-03',
    icon: require('../assets/images/pill.png'),
  },
];

export default function TimeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.errorCode) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>타임 캡슐</Text>

      <View style={styles.sortRow}>
        <Image
          source={require('../assets/images/arrow_down.png')}
          style={styles.arrow}
        />
        <Text style={styles.sortText}>최신순</Text>
      </View>

      <ScrollView contentContainerStyle={styles.capsuleGrid}>
        {capsuleList.map((item, idx) => (
          <View key={idx} style={styles.capsuleBox}>
            <Image source={item.icon} style={styles.capsuleIcon} />
            <Text style={styles.capsuleTitle}>{item.title}</Text>
            <Text style={styles.capsuleDate}>{item.date}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>타임캡슐 추가하기</Text>
        <Image
          source={require('../assets/images/plus2.png')}
          style={styles.plusIcon}
        />
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>타임캡슐 추가하기</Text>

            <Text style={styles.label}>제목</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="제목을 입력하세요"
            />

            <Text style={styles.label}>사진</Text>
            {imageUri && (
              <Image source={{uri: imageUri}} style={styles.previewImage} />
            )}
            <TouchableOpacity style={styles.photoBtn} onPress={openImagePicker}>
              <Text style={styles.photoBtnText}>사진 선택</Text>
            </TouchableOpacity>

            <Text style={styles.label}>내용</Text>
            <TextInput
              style={[styles.input, {height: 100}]}
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
              placeholder="내용을 입력하세요"
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.saveText}>저장</Text>
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
    marginBottom: 16,
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  arrow: {
    width: 18,
    height: 10,
    marginRight: 6,
  },
  sortText: {
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
  },
  capsuleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 100,
  },
  capsuleBox: {
    width: '47%',
    aspectRatio: 1,
    borderWidth: 1.5,
    borderColor: colors.navy,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 10,
  },
  capsuleIcon: {
    width: 42,
    height: 42,
    marginBottom: 14,
  },
  capsuleTitle: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.black,
    marginBottom: 4,
  },
  capsuleDate: {
    fontSize: 16,
    fontFamily: 'Ownglyph_corncorn',
    color: colors.gray500,
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
    fontSize: 20,
    fontFamily: 'Ownglyph_corncorn',
    textAlign: 'center',
    marginBottom: 14,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Ownglyph_corncorn',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.navy,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontFamily: 'Ownglyph_corncorn',
    backgroundColor: colors.white,
  },
  previewImage: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 10,
  },
  photoBtn: {
    backgroundColor: colors.navy,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  photoBtnText: {
    color: colors.white,
    fontFamily: 'Ownglyph_corncorn',
    fontSize: 14,
  },
  saveBtn: {
    alignSelf: 'flex-end',
    marginTop: 14,
    backgroundColor: colors.navy,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  saveText: {
    color: colors.white,
    fontFamily: 'Ownglyph_corncorn',
    fontSize: 14,
  },
});
