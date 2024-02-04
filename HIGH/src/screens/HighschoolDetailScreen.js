import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HighschoolInfo from '../components/HighschoolInfoText';
import SchoolInfoContent from '../components/SchoolInfoContent';
import SchoolInfoSummary from '../components/SchoolInfoSummary';
import SchoolInfoMajor from '../components/SchoolInfoMajor';

const HighschoolDetailScreen = () => {
  const navigation = useNavigation();
  const [showSummary, setShowSummary] = useState(false);
  const [showMajor, setShowMajor] = useState(false);

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
      <View style={styles.upperTextContainer}>
        <HighschoolInfo schoolType="특목고" schoolName="대덕소프트웨어마이스터고등학교" schoolPlace="대전광역시 유성구"/>
      </View>
      <View style={styles.infoTitleContainer}>
        <SchoolInfoContent 
          setSummaryVisible={setShowSummary} 
          setMajorVisible={setShowMajor}
        />
      </View>
      {showSummary &&
        <SchoolInfoSummary
          buildDate = "1991. 04. 19"
          buildType = "공립"
          schoolType= "남여공학"
          number = "042-866-8822"
          place = "대전광역시 유성구 가정북로 76"
          link = "https://dsmhs.djsch.kr/main.do"
      />}
      {showMajor &&
        <SchoolInfoMajor
          majorName1= "SW개발과"
          majorName2= "임베디드SW과"
          majorName3= "인공지능SW과"
          class1={2}
          class2={1}
          class3={1}
          people1={32}
          people2={16}
          people3={16}
      />}
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
  upperTextContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
});

export default HighschoolDetailScreen;
