import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image, Svg } from 'react-native-svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import DisableButton from '../components/DisableButton'

// 두번째 화면
const StartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            color: '#0080F7',
            fontSize: 60,
          }}
        >
          HIGH
        </Text>
      </View>
      <View>
        <DisableButton>
          
        </DisableButton>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default StartScreen