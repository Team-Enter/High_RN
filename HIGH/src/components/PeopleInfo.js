import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const PeopleInfo = ({name, nickName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
            <Image
                source={require('../../assets/images/Logo(Blue).jpg')}
                style={styles.logoBlue}
            />
        </View>
        <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}푕힁영</Text>
            <Text style={styles.nickNameText}>{nickName}nickName</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 95,
        backgroundColor: '#0075FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'left',
    },
    row:{
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iconContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 52,
      height: 51,
      backgroundColor: '#FFF',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      marginEnd: 15,
    },
    logoBlue:{
        width: 32,
        height: 31,
    },
    nameContainer:{
      justifyContent: 'center',
    },
    nameText:{
      fontFamily: 'Inter-Regular',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#FFF',
      lineHeight: 28,
    },
    nickNameText:{
      fontFamily: 'Inter-Regular',
      fontWeight: '400',
      fontSize: 13,
      color: '#83C4FF',
      lineHeight: 15,
    },
})

export default PeopleInfo