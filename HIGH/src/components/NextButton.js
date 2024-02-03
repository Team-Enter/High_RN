import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

// 다음으로 가기 버튼_비활성화
const NextButton = ({onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress = {onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>다음 →</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
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

export default NextButton