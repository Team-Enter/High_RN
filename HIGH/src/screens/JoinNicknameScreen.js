import { View, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import LogoText from '../components/LogoText'
import Title from '../components/Title'
import InputTextField from '../components/InputTextField'
import DefaultButton from '../components/DefaultButton'
import { useNavigation } from '@react-navigation/native'

// 회원가입_닉네임
const JoinNicknameScreen = () => {

  const [nickname, setNickname] = useState('');

  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          nickname: nickname,
        }),
      });

      if (response.ok){
        // 회원가입 성공
        if (response.status === 201){
          Alert.alert('회원가입 성공', '회원가입이 성공적으로 완료되었습니다.');
          navigation.navigate('LoginScreen');
        }
      } else if (response.status === 400){
        // 회원가입 실패_잘못된 요청
        Alert.alert('회원가입 실패', '잘못된 요청입니다.');
      }
      else if (response.status === 401){
        // 회원가입 실패_토큰이 유효하지 않음
        Alert.alert('회원가입 실패', '토큰이 유효하지 않습니다.');
      }
      else if (response.status === 404){
        // 회원가입 실패_요청한 페이지를 찾을 수 없음
        Alert.alert('회원가입 실패', '요청한 페이지를 찾을 수 없습니다.');
      }
      else if (response.status === 405){
        // 회원가입 실패_허용하지 않는 메소드로 요청
        Alert.alert('회원가입 실패', '허용되지 않는 메소드로 요청되었습니다.');
      }
      else if (response.status === 409){
        // 회원가입 실패_유저 아이디가 이미 존재하는 경우
        Alert.alert('회원가입 실패', '유저 아이디가 이미 존재합니다.');
      }
    } catch (error) {
        console.error('Error', error);
        Alert.alert('오류', '서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContent}>
       {/* <LogoText/> 로고 텍스트 */}
       <Image
          source={require('../../assets/images/Logo_HIGH.jpg')}
          style={styles.logoTextImage}
        />
        <Title title="#회원가입" />
      </View>
      <View>
        <InputTextField
          label="닉네임"
          placeholder="2~8자 닉네임 입력"
          onChangeText={(text) => setNickname(text)}
        />
    </View>
    <View style={styles.buttonContainer}>
      <DefaultButton title="회원가입" onPress={handleLogin}/>
    </View>
  </SafeAreaView>
  );
};

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
  logoTextImage: {
    width: 150,
    height: 42,
    marginBottom: 15,
  },
  buttonContainer:{
    marginTop: 'auto',
    bottom: 40,
  },
});

export default JoinNicknameScreen