import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const DefaultButton = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress = {onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 325,
    paddingVertical: 16,
    paddingHorizontal: 120,
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
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.408,
  }
})

export default DefaultButton