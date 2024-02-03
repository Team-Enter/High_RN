import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HighschoolList = () => {
  return (
    <View>
        <View style={styles.schoolListContainer}>
            <View style={styles.iconContainer}>
                <Image
                    source={require('../../assets/images/HighIconWhite.jpg')}
                    style={styles.highIconWhite}
                    />
            </View>
            <View>
                <Text style={styles.schoolType}>특목고</Text>
                <Text style={styles.schoolName}>대덕소프트웨어마이스터고등학교</Text>
                <View style={styles.placeContainer}>
                    <Image
                        source={require('../../assets/images/PlaceIcon.jpg')}
                        style={styles.placeIcon}
                    />
                    <Text style={styles.schoolPlace}>대전광역시 유성구</Text>
                </View> 
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    iconContainer:{
        width: 54,
        height: 53,
        display: 'flex',
        padding: 10,
        flexDirection: 'column',
        backgroundColor: '#0075FF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: 20,
        marginStart: 15,
    },
    highIconWhite:{
        width: 34,
        height: 33,
    },
    placeIcon:{
        width: 7,
        height: 11,
        marginEnd: 8,
    },
    placeContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    schoolListContainer:{
        flexDirection: 'row',
        display: 'flex',
        width: 341,
        height: 82,
        padding: '10px 17px 10px 13px',
        alignItems: 'center',
        gap: 13,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        backgroundColor: '#FFF',
    },
    schoolType:{
        color: '#999',
        fontFamily: 'Inter-Regular',
        fontSize: 11,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    schoolName:{
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 22,
        letterSpacing: 1.5
    },
    schoolPlace:{
        color: '#999',
        fontFamily: 'Inter-Regular',
        fontSize: 11,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.408,
    },
})

export default HighschoolList