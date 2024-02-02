import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoText from '../components/LogoText'
import Title from '../components/Title'
import InputTextField from '../components/InputTextField'
import DefaultButton from '../components/DefaultButton'
import { useNavigation } from '@react-navigation/native'

// 회원가입_닉네임
const JoinNicknameScreen = () => {

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.logoContent}>
      <LogoText/>
      <Title title="#회원가입" />
    </View>
    <View>
      <InputTextField placeholder="2~8자 닉네임 입력"/>
      <View style={styles.inputSpacing} />
      <View style={styles.nonInputTextField} />
      <View style={styles.inputSpacing} />
      <View style={styles.nonInputTextField} />

  </View>
  <View style={styles.inputButtonSpacing}/>
  <View style={styles.buttonContainer}>
    <View/>
    <DefaultButton title="회원가입" onPress={handleLogin}/>
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
  nonInputTextField: {
    height: 56,
  }
})

export default JoinNicknameScreen