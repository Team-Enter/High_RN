import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LogoText = () => {
  return (
    <View>
      <Text
        style={styles.Logo}
      >HIGH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Logo: {
        fontFamily: 'Baloo-Regular',
        fontSize: 60,
        letterSpacing: 3,
        color: '#0080F7',
        fontWeight: 'bold',
    }
})

export default LogoText