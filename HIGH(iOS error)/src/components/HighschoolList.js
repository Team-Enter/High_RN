import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import EmptyView from './EmptyView'

const HighschoolList = ({schoolType, schoolName, schoolPlace}) => {
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
        </View>
        <EmptyView height={10}/>
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