import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import EndLine from './EndLine';

const SchoolInfoMajor = ({majorName1, majorName2, majorName3, class1, class2, class3, people1, people2, people3}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleText}>🔥 학과</Text>
        <View style={styles.tableContainer}>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.titleCell}>학과명</Text>
              <Text style={styles.titleCell}>학급 수</Text>
              <Text style={styles.titleCell}>인원 수</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>{majorName1}</Text>
              <Text style={styles.cell}>{class1}</Text>
              <Text style={styles.cell}>{people1}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>{majorName2}</Text>
              <Text style={styles.cell}>{class2}</Text>
              <Text style={styles.cell}>{people2}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>{majorName3}</Text>
              <Text style={styles.cell}>{class3}</Text>
              <Text style={styles.cell}>{people3}</Text>
            </View>
          </View>
        </View>
      </View>
      <EndLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  titleText: {
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 22,
    color: '#000',
    paddingBottom: 25,
    paddingTop: 25,
  },
  textLine: {
    flexDirection: 'row',
  },
  contentTitle: {
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 22,
    color: '#000',
    paddingBottom: 15,
    paddingEnd: 15,
  },
  contentInfo: {
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 22,
    color: '#7E7E7E',
    paddingBottom: 15,
  },
  contentInfoLink: {
    fontFamily: 'Inter-Regular',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 22,
    color: '#7E7E7E',
    paddingBottom: 15,
    textDecorationLine: 'underline',
    textDecorationColor: '#7E7E7E',
  },
  tableContainer: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  table: {
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'left',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 15,
  },
  titleCell: {
    flex: 1,
    padding: 10,
    textAlign: 'left',
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    backgroundColor: '#0075FF',
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default SchoolInfoMajor;
