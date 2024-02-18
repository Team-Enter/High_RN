import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const TestStartButton = ({disabled, onPress, title}) => {
    return (
        <TouchableOpacity
          style={[styles.button, disabled && styles.disabledButton]}
          onPress = {onPress}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
    };

    const styles = StyleSheet.create({
      button: {
        borderRadius: 10,
        width: 286,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#0080F7',
      },
      disabledButton: {
        backgroundColor: '#0362D2',
      },
      buttonText: {
        color: '#FFF',
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
      },
    });

export default TestStartButton