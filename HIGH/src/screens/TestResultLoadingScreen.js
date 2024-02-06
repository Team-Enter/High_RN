import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// 검사 결과 로딩
const TestResultLoadingScreen = () => {
  const navigation = useNavigation();
  const [dots, setDots] = useState('');

  useEffect(() => {
    // 4초 후에 TestResultScreen으로 이동
    const timer = setTimeout(() => {
      navigation.navigate('TestResultScreen');
    }, 4000);

    // 점을 0.5초에 하나씩 추가
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length === 3 ? '' : prevDots + '.'));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  },[navigation]);

  const handleMainPagePress = () => {
    navigation.navigate('MainPageScreen');
  };

  const handleMyPagePress = () => {
    navigation.navigate('MyPageScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleMainPagePress}>
          <View style={styles.clickRangeBack}>
            <Image
              source={require('../../assets/images/BackArrowIcon.jpg')}
              style={styles.backArrowIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyPagePress}>
          <View style={styles.clickRangePeople}>
            <Image
              source={require('../../assets/images/UserIcon.jpg')}
              style={styles.userIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.smileImageContainer}>
        <Image
          source={require('../../assets/images/LoadingImage.jpg')}
          style={styles.smileImage}
        />
        <Text style={styles.loadingText}>결과를 가져오는 중{dots}</Text>
      </View>
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
    width: 24,
    height: 24,
  },
  backArrowIcon: {
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
  smileImageContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smileImage: {
    width: 155,
    height: 154,
    marginBottom: 30,
  },
  loadingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TestResultLoadingScreen