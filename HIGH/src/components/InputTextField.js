import { View, TextInput, StyleSheet, Text } from 'react-native'
import React from 'react'

// 입력 텍스트 필드
const InputTextField = ({placeholder, label, errorMessage}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#D0D0D0"
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 325,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingVertical: 17,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label:{
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
  },
  errorMessage:{
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    lineHeight: 24,
    color: '#F04621',
    textAlign: 'left',
  },
})

export default InputTextField
