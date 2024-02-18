import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HighschoolInfoText = ({schoolType, schoolName, schoolPlace}) => {
  return (
    <View>
        <Text style={styles.schoolType}>{schoolType}</Text>
        <Text style={styles.schoolName}>{schoolName}</Text>
        <View style={styles.placeContainer}>
            <Image
                source={require('../../assets/images/PlaceIcon.jpg')}
                style={styles.placeIcon}
            />
            <Text style={styles.schoolPlace}>{schoolPlace}</Text>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    schoolType:{
        color: '#999',
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 22,
        letterSpacing: -0.41,
    },
    schoolName:{
        color: '#000',
        fontFamily: 'Inter-Regular',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 30,
        letterSpacing: 1.5,
    },
    schoolPlace:{
        color: '#999',
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: -0.408,
    },
    placeContainer:{
        flexDirection: 'row',
    },
    placeIcon:{
        width: 11,
        height: 17,
        marginEnd: 8,
    },
})

export default HighschoolInfoText