import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const SpeechBubble = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/SpeechBubble.jpg')}
        style={styles.speechBubbleImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textYellow}>두근두근 </Text>
        <Text style={styles.textWhite}>나에게 맞는 고등학교는?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  speechBubbleImage: {
    width: 220,
    height: 44,
    marginTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    alignItems: 'center',
  },
  textYellow: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#F9D100',
  },
  textWhite: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#FFF',
  },
})

export default SpeechBubble
