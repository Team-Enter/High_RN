import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import Question from '../components/Question';
import EmptyView from '../components/EmptyView';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

// 적성검사 질문
const TestQuestionScreen = () => {

  const navigation = useNavigation();
  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };
  const handleNextQuestionPagePress = () => {
    navigation.navigate({/* TODO */});
  };
  const handleBackQuestionPagePress = () => {
    navigation.navigate({/* TODO */});
  };
  const handleLastQuestionPagePress = () => {
    navigation.navigate('TestResultLoadingScreen');
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
      <View style={styles.abilityContainer}>
        <Text style={styles.abilityTitle}>신체·운동능력 6문항</Text>
        <Text style={styles.abilityInfo}>기초체력을 바탕으로 효율적으로</Text>
        <Text style={styles.abilityInfo}>몸을 움직이고 동작을 학습할 수 있는 능력</Text>
      </View>
      <ScrollView>
        <EmptyView height={20}/>
        <View >
          <Question questionNumber="1" question="질문~~~~~~"/>
          <Question questionNumber="2" question="질문~~~~~~"/>
          <Question questionNumber="3" question="질문~~~~~~"/>
          <Question questionNumber="4" question="질문~~~~~~"/>
          <Question questionNumber="5" question="질문~~~~~~"/>
          <Question questionNumber="6" question="질문~~~~~~"/>
        </View>
        <View style={styles.buttonContainer}>
          <BackButton/>
          <EmptyView width={6}/>
          <NextButton onPress={handleLastQuestionPagePress}/>
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
  abilityContainer:{
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  abilityTitle:{
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 35,
    color: '#000'
  },
  abilityInfo:{
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    lineHeight: 20,
    color: '#6E6E6E'
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingEnd: 20,
  },
})

export default TestQuestionScreen