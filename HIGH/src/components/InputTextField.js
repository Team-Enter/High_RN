import { View, TextInput, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

// 입력 텍스트 필드
const InputTextField = ({ placeholder, label, errorMessage, onFocus, onBlur, errorBorderColor }) => {
  const [borderColor, setBorderColor] = useState('#B7B7B7');

  const handleFocus = () => {
    onFocus && onFocus();
    setBorderColor('#0080F7');
  }

  const handleBlur = () => {
    onBlur && onBlur();
    setBorderColor('#B7B7B7');
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, { borderColor: borderColor }]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#D0D0D0"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 325,
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // gap 대신 marginRight 사용
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: '#000',
    textAlign: 'left',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.408,
    placeholderTextColor: '#D9D9D9'
  },
  errorMessage: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 24,
    color: '#F04621',
    textAlign: 'left',
  },
})

export default InputTextField
