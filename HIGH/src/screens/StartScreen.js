import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DefaultButton from '../components/DefaultButton'
import { useNavigation } from '@react-navigation/native'

// 시작화면
const StartScreen = () => {

  const navigation = useNavigation();
  const handleJoinPress = () => {
    navigation.navigate('JoinEmailIdPasswordScreen'); // JoinEmailIdPasswordScreen으로 네비게이션
  };
  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/Logo.jpg')}
          style={[styles.logo, {marginTop: 180}]}
        />
        <Text
          style={styles.logoText}
        >
          HIGH
        </Text>
      </View>
      <View style={{marginTop: 165}}>
        <DefaultButton title="시작하기" onPress={handleJoinPress}/>
      </View>
      <View style={styles.loginTextView}>
        <Text style={[styles.loginText, {fontWeight: 400}]}>
          이미 계정이 있으신가요?
        </Text>
        <TouchableOpacity 
          onPress={handleLoginPress}
        >
          <Text style={[styles.loginText, {fontWeight:700}]}>
            로그인하기
          </Text>
        </TouchableOpacity>
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
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 173,
    height: 175,
  },
  logoText: {
    fontFamily: 'Baloo-Regular',
    fontSize: 60,
    letterSpacing: 3,
    color: '#0080F7',
    fontWeight: 'bold',
  },
  loginTextView: {
    display: 'flex',
    flexDirection: 'row'
  },
  loginText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.408,
    marginEnd: 3,
  }
})

export default StartScreen
