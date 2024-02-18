import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ModalBug = ({onPressOkay}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
            <View style={styles.titleText}>
                <Text style={styles.boldTextBug}>죄송합니다.</Text>
                <Text style={styles.defaultTextBug}>아직 버그제보는 개발되지 않았습니다.</Text>
            </View>
            <TouchableOpacity style={styles.okayButton} onPress={onPressOkay}>
                <Text style={styles.okayText}>확인</Text>
            </TouchableOpacity>
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
    boldTextBug:{
        fontFamily: 'Inter-Regular',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 5,
        letterSpacing: 0.1,
    },
    defaultTextBug:{
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        fontWeight: '400',
        color: '#757575',
        letterSpacing: 0.1,
    },
    okayButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0080F7',
        width: 316,
        height: 48,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    okayText:{
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 0.1,
    },
});

export default ModalBug