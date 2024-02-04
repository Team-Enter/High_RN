import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import TestResultAbilityTitle from '../components/TestResultAbilityTitle';
import HighschoolList from '../components/HighschoolList';

// 검사 결과_고등학교 추천리스트
const TestResultHighschoolScreen = () => {

  const navigation = useNavigation();
  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };
  const handleSchoolInfoPress = () => {
    navigation.navigate('HighschoolDetailsSummaryScreen');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={handleMainPagePress}
        >
          <View style={styles.clickRangeBack}>
            <Image
              source={require('../../assets/images/BackArrowIcon.jpg')}
              style={styles.backArrowIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleMyPagePress}
        >
          <View style={styles.clickRangePeople}>
            <Image
              source={require('../../assets/images/UserIcon.jpg')}
              style={styles.userIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.upperTextContainer}>
        <View style={styles.textLine}>
          <Text style={styles.textBoldBlack}>푕힁영</Text>
          <Text style={styles.textDefaultBlack}> 님, 추천받은</Text>
        </View>
        <View style={styles.textLine}>
          <Text style={styles.textDefaultBlue}>#고등학교 </Text>
          <Text style={styles.textDefaultBlack}>를 확인해 보세요!</Text>
        </View>
      </View>
      <View style={styles.verticalScrollContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollAbilityList}
          showsHorizontalScrollIndicator={false}
        >
          <TestResultAbilityTitle title="#신체·운동능력" state={true}/>
          <TestResultAbilityTitle title="#손재능" state={true}/>
          <TestResultAbilityTitle title="#공간지각력" state={false}/>
          <TestResultAbilityTitle title="#음악능력" state={false}/>
          <TestResultAbilityTitle title="#언어능력" state={false}/>
          <TestResultAbilityTitle title="#예술시각능력" state={false}/>
          <TestResultAbilityTitle title="#수리·논리력" state={false}/>
          <TestResultAbilityTitle title="#자기성찰능력" state={false}/>
          <TestResultAbilityTitle title="#대인관계능력" state={false}/>
          <TestResultAbilityTitle title="#자연친화력" state={false}/>
          <TestResultAbilityTitle title="#창의력" state={false}/>
        </ScrollView>
      </View>
      <View style={styles.horizontalScrollContainer}>
        <ScrollView
          vertical
          contentContainerStyle={styles.scrollSchoolList}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고1" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고2" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고3" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고4" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고5" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고6" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고7" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSchoolInfoPress} showsHorizontalScrollIndicator={false} >
            <HighschoolList schoolType="특목고8" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구" />
          </TouchableOpacity>
        </ScrollView>
      </View>
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
    height: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  backArrowIcon:{
    width: 12,
    height: 19,
  },
  clickRangeBack: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  clickRangePeople: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  upperTextContainer:{
    paddingHorizontal: 20,
    paddingVertical: 5,
    paddingBottom: 15,
  },
  textLine:{
    flexDirection: 'row',
  },
  textBoldBlack:{
    fontFamily: 'Inter-Regular',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    color: '#000',
  },
  textDefaultBlack:{
    fontFamily: 'Inter-Regular',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.1,
    color: '#000',
  },
  textDefaultBlue:{
    fontFamily: 'Inter-Regular',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.1,
    color: '#007FDC',
  },
  verticalScrollContainer:{
    paddingStart: 20,
    paddingBottom: 20,
  },
  scrollAbilityList:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalScrollContainer:{
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  scrollSchoolList:{
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default TestResultHighschoolScreen