import { View, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import LogoText from '../components/LogoText'
import Title from '../components/Title'
import InputTextField from '../components/InputTextField'
import DefaultButton from '../components/DefaultButton'
import { useNavigation } from '@react-navigation/native'

// 로그인
const LoginScreen = () => {

  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleMainPage = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          accountId: accountId,
          password: password,
        }),
      });

      if(response.ok){
        const responseData = await response.json();
        // 로그인 성공
        if (response.status === 201){
          Alert.alert('로그인 성공', '로그인에 성공하였습니다.');

          // 액세스 토큰 추출 및 저장
          const accessToken = responseData.accessToken;

          navigation.navigate('MainPageScreen');
        }
      } else {
          if (response.status === 404) {
            // 사용자를 찾을 수 없음
            Alert.alert('로그인 실패', '사용자를 찾을 수 없습니다.');
          }
          else if (response.status === 400) {
            // 잘못된 요청
            Alert.alert('로그인 실패', '잘못된 요청입니다.');
          } else if (response.status === 401) {
            // 토큰이 유효하지 않음
            Alert.alert('로그인 실패', '토큰이 유효하지 않습니다.');
          } else if (response.status === 405) {
            // 허용되지 않는 메소드로 요청됨
            Alert.alert('로그인 실패', '허용되지 않는 메소드로 요청되었습니다.');
          } else if (response.status === 409) {
            // 비밀번호가 일치하지 않음
            Alert.alert('로그인 실패', '비밀번호가 일치하지 않습니다.');
          }
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
          <Title title="#로그인" />
        </View>
        <View>
          <InputTextField
            label="아이디"
            placeholder="5~15자 아이디를 입력하세요"
            onChangeText={(text) => setAccountId(text)}
          />
          <InputTextField
            label="비밀번호"
            placeholder="8~20자 비밀번호를 입력하세요"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      <View style={styles.buttonContainer}>
        <DefaultButton title="로그인" onPress={handleMainPage}/>
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
})

export default LoginScreen