import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PeopleInfo from '../components/PeopleInfo';
import MyPageButton from '../components/MyPageButton';
import ModalLogOut from '../components/ModalLogOut';
import ModalBug from '../components/ModalBug';
// import TopBarTitle from '../components/TopBarTitle';

// 마이페이지
const MyPageScreen = () => {
  const navigation = useNavigation();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isBugReportModalVisible, setIsBugReportModalVisible] = useState(false);

  const [userData, setUserData] = useState(null); // 사용자 정보 상태

  // API 호출 및 데이터 가져오기
  useEffect(() => {
    fetchUserData(); // 페이지가 렌더링될 때 사용자 정보 가져오기
  }, []);

  // 사용자 정보 가져오는 함수
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/login');
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else if (response.status === 400){
        // 잘못된 요청
        const errorData = await response.json();
        Alert.alert('잘못된 요청', errorData.message);
      }
      else if (response.status === 401){
        // 토큰이 유효하지 않음
        const errorData = await response.json();
        Alert.alert('토큰 오류', errorData.message);
      }
      else if (response.status === 404){
        // 요청한 페이지를 찾을 수 없음
        const errorData = await response.json();
        Alert.alert('페이지 찾기 오류', errorData.message);
      }
      else if (response.status === 405){
        // 허용하지 않는 메소드로 요청함
        const errorData = await response.json();
        Alert.alert('허용되지 않는 메소드', errorData.message);
      }
      else if (response.status === 409){
        // 비밀번호가 일치하지 않음
        const errorData = await response.json();
        Alert.alert('비밀번호 오류', errorData.message);
      }
    } catch (error) {
      console.error('Error', error);
      Alert.alert('오류', '서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };

  const toggleLogoutModal = () => {
    setIsLogoutModalVisible(!isLogoutModalVisible);
  };

  const toggleBugReportModal = () => {
    setIsBugReportModalVisible(!isBugReportModalVisible);
  };

  const handleLogoutConfirm = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // 로그아웃 성공
        navigation.navigate('StartScreen');
        setIsLogoutModalVisible(false);
      } else {
        // 로그아웃 실패
        const errorData = await response.json();
        Alert.alert('로그아웃 실패', errorData.message);
      }
    } catch (error) {
      console.error('Error', error);
      Alert.alert('오류', '서버와의 통신 중 오류가 발생했습니다.')
    }
  };

  const handleBugReportConfirm = () => {
    // 버그 제보 처리
    setIsBugReportModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        {/* <TopBarTitle title="MY"/> 상단바 로고 */}
        <Image
          source={require('../../assets/images/Logo_MY.jpg')}
          style={styles.logoTextImage}
        />
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
  userIcon: {
    width: 20,
    height: 20,
  },
  logoTextImage: {
    width: 53,
    height: 22,
    marginTop: 15,
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