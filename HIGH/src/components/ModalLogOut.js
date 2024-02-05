import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ModalLogOut = ({onPressNext, onPressLogOut}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
            <View style={styles.titleText}>
                <Text style={styles.boldTextLogOut}>로그아웃 하시겠어요?</Text>
                <Text style={styles.defaultTextLogOut}>언제든지 다시 로그인하실 수 있어요.</Text>
            </View>
        <View style={styles.lowButton}>
            <TouchableOpacity style={styles.nextButton} onPress={onPressNext}>
                <Text style={styles.nextText}>다음에</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logOutButton} onPress={onPressLogOut}>
                <Text style={styles.logOutText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeAreaView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container:{
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    titleText:{
        paddingHorizontal: 20,
        marginVertical: 5,
        paddingTop: 15,
        paddingVertical: 10,
        width: 316,
        height: 80,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    boldTextLogOut:{
        fontFamily: 'Inter-Regular',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 5,
        letterSpacing: 0.1,
    },
    defaultTextLogOut:{
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        fontWeight: '400',
        color: '#757575',
        letterSpacing: 0.1,
    },
    lowButton:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nextButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        width: 174,
        height: 48,
        borderBottomLeftRadius: 10,
    },
    logOutButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0080F7',
        width: 174,
        height: 48,
        borderBottomRightRadius: 10,
    },
    nextText:{
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A4A4A4',
        letterSpacing: 0.1,
    },
    logOutText:{
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 0.1,
    },
});

export default ModalLogOut