import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TestResultAbilityTitle = ({title, state}) => {
  return (
    <View style={state ? styles.titleYellowContainer : styles.titleDefaultContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleDefaultContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 50,
        backgroundColor: '#F1F1F1',
        marginEnd: 8,
    },
    titleYellowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#FFDA58',
        marginEnd: 8,
    },
    titleText: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
    }
})

export default TestResultAbilityTitle
