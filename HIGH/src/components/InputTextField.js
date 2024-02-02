import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

// 입력 텍스트 필드
const InputTextField = ({placeholder}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#D0D0D0"
      />
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
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.408,
  },
})

export default InputTextField
