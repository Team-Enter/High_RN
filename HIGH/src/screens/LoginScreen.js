import { View, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoText from '../components/LogoText'
import Title from '../components/Title'
import InputTextField from '../components/InputTextField'
import DefaultButton from '../components/DefaultButton'
import { useNavigation } from '@react-navigation/native'

// 로그인
const LoginScreen = () => {

  const navigation = useNavigation();
  const handleMainPage = () => {
    navigation.navigate('MainPageScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.logoContent}>
          <LogoText/>
          <Title title="#로그인" />
        </View>
        <View>
          <InputTextField
            label="아이디"
            placeholder="5~15자 아이디를 입력하세요"
          />
          <InputTextField
            label="비밀번호"
            placeholder="8~20자 비밀번호를 입력하세요"
            secureTextEntry={true}
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
  buttonContainer:{
    marginTop: 'auto',
    bottom: 40,
  },
})

export default LoginScreen