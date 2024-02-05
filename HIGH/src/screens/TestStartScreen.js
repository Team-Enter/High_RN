import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import AbilityTitle from '../components/AbilityTitle';
import DefaultButton from '../components/DefaultButton';

// 적성검사 시작
const TestStartScreen = () => {

  const navigation = useNavigation();
  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };
  const handleQuestionPage = () => {
    navigation.navigate('TestQuestionScreen');
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
      <View style={styles.testInfoContainer}>
        <View style={styles.testInfoText}>
          <Text 
            style={styles.testInfoBold}>🧐 해당 적성검사</Text>
          <Text style={styles.testInfoDefaultFirst}>는</Text>
        </View>
        <View>
          <Text style={styles.testInfoDefault}>아래 키워드를 기반으로</Text>
        </View>
        <View style={styles.testInfoText}>
          <Text style={styles.testInfoBlue}>#다양한_능력</Text>
          <Text
            style={styles.testInfoDefaultThird}
          > 중</Text>
        </View>
        <View>
          <Text style={styles.testInfoDefault}>높은 능력을 파악하고, 이를 바탕으로</Text>
        </View>
        <View>
          <Text style={styles.testInfoBlue}>#나에게_맞는_학과 #고등학교</Text>
        </View>
        <View>
          <Text style={styles.testInfoDefault}>정보를 제공합니다</Text>
        </View>
      </View>
      <View style={styles.abilityTitleContainer}>
        <AbilityTitle
          title = "#신체·운동능력"
          borderColor = "#1696F2"
          titleColor = "#1696F2"
          backgroundColor = "#D4F1FE"
        />
        <AbilityTitle
          title = "#손재능"
          borderColor = "#AD58CB"
          titleColor = "#AD58CB"
          backgroundColor = "#F7DFFF"
        />
        <AbilityTitle
          title = "#공간지각력"
          borderColor = "#62B231"
          titleColor = "#62B231"
          backgroundColor = "#DFF6C9"
        />
        <AbilityTitle
          title = "#음악능력"
          borderColor = "#F5841B"
          titleColor = "#F5841B"
          backgroundColor = "#FFE4C4"
        />
        <AbilityTitle
          title = "#언어능력"
          borderColor = "#D9C300"
          titleColor = "#D9C300"
          backgroundColor = "#F4FBC7"
        />
        <AbilityTitle
          title = "#예술시각능력"
          borderColor = "#F95083"
          titleColor = "#F95083"
          backgroundColor = "#FFDCDC"
        />
        <AbilityTitle
          title = "#수리·논리력"
          borderColor = "#18AB91"
          titleColor = "#18AB91"
          backgroundColor = "#D5F6F2"
        />
        <AbilityTitle
          title = "#자기성찰능력"
          borderColor = "#7764C1"
          titleColor = "#7764C1"
          backgroundColor = "#E3E2FA"
        />
        <AbilityTitle
          title = "#대인관계능력"
          borderColor = "#D52323"
          titleColor = "#D52323"
          backgroundColor = "#FFD0D0"
        />
        <AbilityTitle
          title = "#자연친화력"
          borderColor = "#258B29"
          titleColor = "#258B29"
          backgroundColor = "#D7F5D5"
        />
        <AbilityTitle
          title = "#창의력"
          borderColor = "#494FE3"
          titleColor = "#494FE3"
          backgroundColor = "#DBE1FF"
        />
      </View>
      <View style={styles.startTestContainer}>
        <Text style={styles.startTestText}>시작하기를 클릭 시 적성검사가 시작됩니다.</Text>
      </View>
      <View style={styles.buttonContainer}>
          <DefaultButton title="시작하기" onPress={handleQuestionPage}/>
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
    alignItems: 'flex-end',
  },
  testInfoContainer:{
    marginTop: 30,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  testInfoText:{
    flexDirection: 'row',
  },
  testInfoDefault:{
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 40,
    letterSpacing: -0.41,
    textAlign: 'left',
  },
  testInfoBlue:{
    color: '#0081F9',
    fontFamily: 'Inter-Regular',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 40,
    letterSpacing: -0.41,
    textAlign: 'left',
  },
  abilityTitleContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 105,
  },
  startTestContainer:{
    alignItems: 'center',
  },
  startTestText:{
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#A1A1A1',
  },
  buttonContainer:{
    marginTop: 'auto',
    bottom: 40,
    marginStart: 30,
  },
  testInfoBold:{
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30,
    letterSpacing: -0.41,
    textAlign: 'left',
  },
  testInfoDefaultFirst:{
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30,
    letterSpacing: -0.41,
    textAlign: 'left',
  },
  testInfoDefaultThird: {
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 40,
    letterSpacing: -0.41,
    textAlign: 'left',
  },
})

export default TestStartScreen