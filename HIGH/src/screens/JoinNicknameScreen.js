import { View, StyleSheet } from 'react-native'
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
        <InputTextField 
          label="닉네임"
          placeholder="2~8자 닉네임 입력"
        />
    </View>
    <View style={styles.buttonContainer}>
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
      marginTop: 80,
      marginBottom: 40,
  },
  buttonContainer:{
    marginTop: 'auto',
    bottom: 40
  },
})

export default JoinNicknameScreen