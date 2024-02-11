import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import HighschoolList from '../components/HighschoolList';
// import TopBarTitle from '../components/TopBarTitle';

// 메인페이지
const MainPageScreen = () => {

  const navigation = useNavigation();
  const handleTestPress = () => {
    navigation.navigate('TestStartScreen');
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };
  const handleSchoolInfoPress = () => {
    navigation.navigate('HighschoolDetailScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        {/* <TopBarTitle title="HIGH"/> 상단바 로고 */}
        <Image
          source={require('../../assets/images/Logo_HIGH.jpg')}
          style={styles.logoTextImage}
        />
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
                  <Text style={styles.mainText}>궁금한 </Text>
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
        <View style={styles.containerDown}>
          <Text style={styles.listText}>🔥 고등학교 추천을 이렇게!</Text>
          <ScrollView style={styles.scrollView}>
            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSchoolInfoPress}
            >
              <HighschoolList
                schoolType="특목고"
                schoolName="대덕소프트웨어마이스터고등학교"
                schoolPlace="대전광역시 유성구"
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerUp: {
    paddingHorizontal: 20,
  },
  containerDown: {
    paddingHorizontal: 20,
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
    width: 24,
    height: 24,
  },
  mainImage: {
    width: 155,
    height: 127,
    position: 'absolute',
    right: 0,
  },
  logoTextImage: {
    width: 79,
    height: 22,
    marginTop: 15,
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
    position: 'relative',
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
  listText:{
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 16
  },
})

export default MainPageScreen
