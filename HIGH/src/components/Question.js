import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TestNumber from './TestNumber'

// 테스트 컴포넌트(질문 번호, 질문, 1~7버튼, 전혀 그렇지 않다, 매우 그렇다)
const Question = ({questionNumber, question}) => {
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <View style={styles.questionNumberContainer}>
          <Text>{questionNumber}</Text>
        </View>
        <View><Text style={styles.questionText}>{question}</Text></View>
      </View>
      <View style={styles.numberContainer}>
        <TestNumber number="1"/>
        <TestNumber number="2"/>
        <TestNumber number="3"/>
        <TestNumber number="4"/>
        <TestNumber number="5"/>
        <TestNumber number="6"/>
        <TestNumber number="7"/>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>← 전혀 그렇지 않다</Text>
        <Text style={styles.answer}>매우 그렇다 →</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
  },
  questionContainer:{
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionNumberContainer:{
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFDA58',
    marginEnd: 10,
  },
  questionText:{
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000'
  },
  numberContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  answerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  answer:{
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    fontSize: 11,
    color: '#C2C2C2'
  },
})

export default Question