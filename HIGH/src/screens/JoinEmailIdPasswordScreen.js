import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoText from '../components/LogoText'
import Title from '../components/Title'
import InputTextField from '../components/InputTextField'
import DefaultButton from '../components/DefaultButton'
import { useNavigation } from '@react-navigation/native'

// 회원가입_이메일, 아이디, 비밀번호
const JoinEmailIdPasswordScreen = () => {

  const navigation = useNavigation();
  const handleNextJoin = () => {
    navigation.navigate('JoinNicknameScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.logoContent}>
          <LogoText/>
          <Title title="#회원가입" />
        </View>
        <View>
          <InputTextField placeholder="이메일를 입력하세요"/>
          <View style={styles.inputSpacing} />
          <InputTextField placeholder="5~15자 아이디를 입력하세요"/>
          <View style={styles.inputSpacing} />
          <InputTextField placeholder="8~20자 비밀번호를 입력하세요"/>
      </View>
      <View style={styles.inputButtonSpacing}/>
      <View style={styles.buttonContainer}>
        <View/>
        <DefaultButton title="다음" onPress={handleNextJoin}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContent: {
    marginBottom: 40,
  },
  inputSpacing: {
    height: 14,
  },
  inputButtonSpacing: {
    height: 230,
  },
})

export default JoinEmailIdPasswordScreen