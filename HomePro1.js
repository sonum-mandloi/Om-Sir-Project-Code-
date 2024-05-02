import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HeaderPro1 from './HeaderPro1'
import StorePro1 from './StorePro1'
import PostPro1 from './PostPro1'

const HomePro1 = () => {
  return (
    <View>
        <StatusBar 
        backgroundColor="transparent"
        barStyle="dark-content"
        />
      <HeaderPro1/>
      <StorePro1/>
      <PostPro1/>
    </View>
  )
}

export default HomePro1