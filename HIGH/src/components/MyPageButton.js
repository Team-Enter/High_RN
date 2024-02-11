import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MyPageButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width: 165,
        height: 36,
        backgroundColor: '#E8F4FF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontFamily: 'Inter-Regular',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0081F9'
    },
})

export default MyPageButton