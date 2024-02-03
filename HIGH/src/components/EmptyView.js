import { View, Text } from 'react-native'
import React from 'react'

const EmptyView = ({height, width}) => {
  return (
    <View style={{height: height, width: width}}/>
  )
}

export default EmptyView