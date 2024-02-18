import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TestNumber from './TestNumber'
import EmptyView from './EmptyView'

// 테스트 컴포넌트(질문 번호, 질문, 1~7버튼, 전혀 그렇지 않다, 매우 그렇다)
const Question = ({ questionNumber, question }) => {
  const [selectedNumber, setSelectedNumber] = useState(null); // 선택된 버튼 번호를 저장하는 상태

  // 버튼 클릭 시 호출되는 함수
  const handleNumberPress = (number) => {
    setSelectedNumber(number);
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <View style={styles.questionNumberContainer}>
          <Text>{questionNumber}</Text>
        </View>
        <View>
          <Text style={styles.questionText}>{question}</Text>
        </View>
      </View>
      <View style={styles.numberContainer}>
        {[1, 2, 3, 4, 5, 6, 7].map((number) => (
          <TestNumber
            key={number}
            number={number}
            onPress={() => handleNumberPress(number)}
            selected={selectedNumber === number}
          />
        ))}
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>← 전혀 그렇지 않다</Text>
        <Text style={styles.answer}>매우 그렇다 →</Text>
      </View>
      <EmptyView height={50} />
    </View>
  );
};

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