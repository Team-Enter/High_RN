import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

// 메인페이지
const MainPageScreen = () => {

  const navigation = useNavigation();
  const handleTestPress = () => {
    navigation.navigate('TestStartScreen');
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logoText}>HIGH</Text>
        <TouchableOpacity
          onPress={handleMyPagePress}
        >
          <Image
            source={require('../../assets/images/UserIcon.jpg')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.containerUp}>
          <View style={styles.mainContainer}>
            <View style={styles.mainContext}>
              <View style={styles.mainTextContainer}>
                <View style={styles.rowText}>
                  <Text style={styles.userNameText}>푕힁영</Text>
                  <Text style={styles.userNameText}>님</Text>
                </View>
                <View style={styles.rowText}>
                  <Text style={styles.mainText}>궁금한</Text>
                  <Text style={styles.highSchoolText}>#고등학교</Text>
                  <Text style={styles.mainText}>의</Text>
                </View>
                <Text style={styles.mainText}>정보를 미리 확인하세요</Text>
                <Text style={styles.mainSmallText}>고등학교 선택 전, 다양한 학교 정보 확인</Text>
              </View>
            </View>
            <Image
              source={require('../../assets/images/MainImage.jpg')}
              style={styles.mainImage}
            />
          </View>
          <TouchableOpacity
            onPress={handleTestPress}
          >
            <View style={styles.testContainer}>
              <Text style={styles.goTestText}>나의 적성검사 하러가기 →</Text>
              <Text style={styles.checkTest}>고등학교를 확인하기 전 나에게 맞는 적성을 확인하세요</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/Banner.jpg')}
          style={styles.bannerImage}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  logoText: {
    fontFamily: 'Baloo-Regular',
    fontSize: 32,
    letterSpacing: 3,
    color: '#0080F7',
    fontWeight: 'bold',
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  mainImage: {
    width: 155,
    height: 127,
    position: 'absolute', // 이미지를 고정
    right: 0, // 왼쪽에 고정
  },
  mainContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainContext:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // 부모 컨테이너 기준으로 위치 지정
    zIndex: 1,
  },
  mainTextContainer: {
    zIndex: 1,
  },
  rowText:{
    flexDirection: 'row',
  },
  userNameText:{
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  mainText:{
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: -0.408,
  },
  highSchoolText:{
    color: '#0081F9',
    fontFamily: 'Inter-Regular',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: -0.408,
  },
  mainSmallText:{
    color: '#949494',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 27,
    letterSpacing: -0.408,
  },
  testContainer:{
    display: 'flex',
    width: 347,
    height: 70,
    paddingVertical: 11,
    paddingHorizontal: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#E8F4FF',
    marginBottom: 20,
  },
  goTestText:{ 
    color: '#0081F9',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
  },
  checkTest:{
    color: '#90A2B8',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  bannerImage:{
    width: '100%',
    height: 95,
    marginBottom: 20,
  },
})

export default MainPageScreen
