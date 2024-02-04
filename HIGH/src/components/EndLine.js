import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EndLine = () => {
  return (
    <View style={styles.endLine}/>
  )
}

const styles = StyleSheet.create({
    endLine:{
        width: '100%',
        height: 12,
        backgroundColor: '#F0F0F0'
    }
})

export default EndLine