import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EmptyView from './EmptyView'

const TestResultContainer = ({name, ability1, ability2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.textLine}>
            <Text style={styles.textBoldBlack}>{name} </Text>
            <Text style={styles.textBoldBlack}>님</Text>
            <Text style={styles.textDefaultBlack}>의</Text>
        </View>
        <Text style={styles.textDefaultBlue}>#적성검사_결과</Text>
        <Text style={styles.textDefaultBlack}>가장 높은 능력 2가지</Text>
      </View>
      <View>
        <View style={styles.abilityContainer}>
            <Text style={styles.abilityText}>{ability1}</Text>
        </View>
        <EmptyView height={10}/>
        <View style={styles.abilityContainer}>
            <Text style={styles.abilityText}>{ability2}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 286,
        height: 260,
        backgroundColor: '#fff',
        borderRadius: 20,
        gap: 15,
        paddingHorizontal: 40,
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    textContainer:{
        alignItems: 'center',
    },
    textLine:{
        flexDirection: 'row'
    },
    textBoldBlack:{
        fontFamily: 'Inter-Regular',
        fontSize: 23,
        fontWeight: 'bold',
        lineHeight: 28,
        letterSpacing: 0.1,
        color: '#000',
    },
    textDefaultBlack:{
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        letterSpacing: 0.1,
        color: '#000',
    },
    textDefaultBlue:{
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        letterSpacing: 0.1,
        color: '#007FDC',
    },
    abilityContainer:{
        alignItems: 'center',
        height: 44,
        borderRadius: 10,
        backgroundColor: '#FFDA58',
        borderColor: '#000',
        borderWidth: 2,
        paddingHorizontal: 21,
        paddingVertical: 11,
    },
    abilityText:{
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.1,
        color: '#000',
    },
})

export default TestResultContainer