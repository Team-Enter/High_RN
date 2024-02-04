import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TestResultContainer from '../components/TestResultContainer';
import TestStartButton from '../components/TestStartButton';
import SpeechBubble from '../components/SpeechBubble';

// 검사 결과
const TestResultScreen = () => {

  const navigation = useNavigation();
  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };
  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };
  const handleResultSchoolPress = () => {
    navigation.navigate('TestResultHighschoolScreen');
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
      <View style={styles.centerContainer}>
        <TestResultContainer 
          name="푕힁영"
          ability1="능력1"
          ability2="능력2"
        />
        <TestStartButton
          title="고등학교 추천받으러가기 →"
          onPress={handleResultSchoolPress}
        />
        <SpeechBubble/>
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
  speechBubble: {
    width: 215,
    height: 44,
    marginTop: 10,
  },
  centerContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default TestResultScreen