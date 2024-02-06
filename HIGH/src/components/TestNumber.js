import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const TestNumber = ({ number, onPress, selected }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.numberContainer, selected && styles.clickNumberContainer]}>
        <Text style={[styles.numberText, selected && styles.clickNumberText]}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    numberContainer:{
        width: 30,
        height: 30,
        backgroundColor: '#EFEFEF',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText:{
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 1,
    },
    clickNumberContainer:{
        width: 30,
        height: 30,
        backgroundColor: '#0080F7',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clickNumberText:{
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
        letterSpacing: 1,
    },
})

export default TestNumber




const Title = ({title}) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    )
  }