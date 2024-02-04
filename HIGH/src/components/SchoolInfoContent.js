import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SchoolInfoContent = () => {
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);

  const handleFirstPress = () => {
    setIsFirstSelected(true);
    setIsSecondSelected(false);
  };

  const handleSecondPress = () => {
    setIsFirstSelected(false);
    setIsSecondSelected(true);
  };

  return (
    <View>
        <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleFirstPress}>
            <View style={isFirstSelected ? styles.titleContainerFocused : styles.titleContainerDefault}>
            <Text style={styles.titleText}>개요</Text>
            </View>
            <View style={isFirstSelected ? styles.bottomBorderFocused : styles.bottomBorderDefault} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSecondPress}>
            <View style={isSecondSelected ? styles.titleContainerFocused : styles.titleContainerDefault}>
            <Text style={styles.titleText}>학과 정보</Text>
            </View>
            <View style={isSecondSelected ? styles.bottomBorderFocused : styles.bottomBorderDefault} />
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainerDefault: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 193,
    height: 44,
  },
  bottomBorderDefault: {
    backgroundColor: '#EEEEEE',
    height: 3,
    width: 193,
  },
  titleText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    paddingVertical: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  titleContainerFocused: {
    backgroundColor: '#E8F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 193,
    height: 44,
  },
  bottomBorderFocused: {
    backgroundColor: '#0081F9',
    height: 3,
    width: 193,
  },
});

export default SchoolInfoContent;
