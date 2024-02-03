// JoinEmailIdPasswordScreen 스크린에서 비밀번호 입력란에 secureTextEntry prop을 추가하여 수정합니다.
import { View, StyleSheet} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogoText from '../components/LogoText';
import Title from '../components/Title';
import InputTextField from '../components/InputTextField';
import DefaultButton from '../components/DefaultButton';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

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
        <InputTextField 
          label="이메일"
          placeholder="이메일를 입력하세요"
        />

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
        <DefaultButton title="다음" onPress={handleNextJoin}/>
      </View>
    </SafeAreaView>
  );
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
});

export default JoinEmailIdPasswordScreen;