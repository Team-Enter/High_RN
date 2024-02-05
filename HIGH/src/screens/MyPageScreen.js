import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PeopleInfo from '../components/PeopleInfo';
import MyPageButton from '../components/MyPageButton';
import ModalLogOut from '../components/ModalLogOut';
import ModalBug from '../components/ModalBug';

const MyPageScreen = () => {
  const navigation = useNavigation();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isBugReportModalVisible, setIsBugReportModalVisible] = useState(false);

  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };

  const toggleLogoutModal = () => {
    setIsLogoutModalVisible(!isLogoutModalVisible);
  };

  const toggleBugReportModal = () => {
    setIsBugReportModalVisible(!isBugReportModalVisible);
  };

  const handleLogoutConfirm = () => {
    navigation.navigate('StartScreen')
    setIsLogoutModalVisible(false);
  };

  const handleBugReportConfirm = () => {
    // 버그 제보 처리
    setIsBugReportModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logoText}>MY</Text>
        <TouchableOpacity onPress={handleMainPagePress}>
          <Image
            source={require('../../assets/images/XIcon.jpg')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <PeopleInfo />
        <View style={styles.button}>
          <MyPageButton title="로그아웃" onPress={toggleLogoutModal} />
          <MyPageButton title="버그 제보" onPress={toggleBugReportModal} />
        </View>
      </View>
      <Modal
         visible={isLogoutModalVisible}
         animationType="none"
         transparent={true}
         onRequestClose={toggleLogoutModal}
      >
        <ModalLogOut
          onPressNext={toggleLogoutModal}
          onPressLogOut={handleLogoutConfirm}
        />
      </Modal>
      <Modal
         visible={isBugReportModalVisible}
         animationType="none"
         transparent={true}
         onRequestClose={toggleBugReportModal}
      >
        <ModalBug
          onPressOkay={handleBugReportConfirm}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  logoText: {
    fontFamily: 'Baloo-Regular',
    fontSize: 32,
    letterSpacing: 3,
    color: '#0080F7',
    fontWeight: 'bold',
  },
  userIcon: {
    width: 20,
    height: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
});

export default MyPageScreen