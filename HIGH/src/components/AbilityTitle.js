import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AbilityTitle = ({ title, borderColor, titleColor, backgroundColor }) => {
  return (
    <View style={[styles.titleContainer, { borderColor: borderColor, backgroundColor: backgroundColor }]}>
      <Text style={[styles.titleText, { color: titleColor }]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    marginEnd: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})

export default AbilityTitle
