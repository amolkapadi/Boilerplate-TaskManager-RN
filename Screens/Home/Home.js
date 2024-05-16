import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Style/HomeStyle'
export default function Home() {
  return (
    <View style={styles.homeText}>
      <Text style={styles.text}> Home</Text>
    </View>
  )
}