import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EndLine from './EndLine'

const SchoolInfoSummary = ({buildDate, buildType, schoolType, number, place, link}) => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.titleText}>🔥 학교 정보 요약</Text>
            <View style={styles.textLine}>
                <Text style={styles.contentTitle}>설립 일자</Text>
                <Text style={styles.contentInfo}>{buildDate}</Text>
            </View>
            <View style={styles.textLine}>
                <Text style={styles.contentTitle}>설립 유형</Text>
                <Text style={styles.contentInfo}>{buildType}</Text>
            </View>
            <View style={styles.textLine}>
                <Text style={styles.contentTitle}>구분</Text>
                <Text style={styles.contentInfo}>{schoolType}</Text>
            </View>
            <View style={styles.textLine}>
                <Text style={styles.contentTitle}>전화번호</Text>
                <Text style={styles.contentInfo}>{number}</Text>
            </View>
            <View style={styles.textLine}>
                <Text style={styles.contentTitle}>위치</Text>
                <Text style={styles.contentInfo}>{place}</Text>
            </View>
            <View style={styles.textLine}>
                <Text style={styles.contentTitle}>홈페이지</Text>
                <Text style={styles.contentInfoLink}>{link}</Text>
            </View>
        </View>
        <EndLine/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    titleText:{
        fontFamily: 'Inter-Regular',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 0.1,
        lineHeight: 22,
        color: '#000',
        paddingBottom: 25,
        paddingTop: 25,
    },
    textLine:{
        flexDirection: 'row',
    },
    contentTitle:{
        fontFamily: 'Inter-Regular',
        fontWeight: '800',
        fontSize: 16,
        letterSpacing: 0.1,
        lineHeight: 22,
        color: '#000',
        paddingBottom: 15,
        paddingEnd: 15,
    },
    contentInfo:{
        fontFamily: 'Inter-Regular',
        fontWeight: '800',
        fontSize: 16,
        letterSpacing: 0.1,
        lineHeight: 22,
        color: '#7E7E7E',
        paddingBottom: 15,
    },
    contentInfoLink:{
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
})

export default SchoolInfoSummary