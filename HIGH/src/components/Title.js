import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/native'

const Title = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
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
        paddingHorizontal: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#FFDA58',
        gap: 10,
    },
    titleText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default Title