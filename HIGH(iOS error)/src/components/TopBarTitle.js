import { Text, StyleSheet } from 'react-native'
import React from 'react'

const TopBarTitle = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'Baloo-Regular',
        fontSize: 32,
        letterSpacing: 3,
        color: '#0080F7',
        fontWeight: 'bold',
    }
})

export default TopBarTitle