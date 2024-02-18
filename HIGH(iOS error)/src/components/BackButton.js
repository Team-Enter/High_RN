import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

// 전으로 돌아가기 버튼_비활성화 상태
const BackButton = ({onPress, disabled}) => {
  return (
    <TouchableOpacity
    style={[styles.button, disabled && styles.disabledButton]}
    onPress = {onPress}
    disabled={disabled}
  >
    <Text style={styles.buttonText}>← 이전</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    width: 77,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#0080F7'
  },
  disabledButton: {
    backgroundColor: '#0362D2'
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
  }
})

export default BackButton