import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { WelcomeImg } from '../../theme/Images'
import { styles } from './Style/InitialScreenStyle'

export default function InitialScreen() {
  return (
    <>
    <StatusBar backgroundColor="#20bf55"/>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
            <View>
              <Image source={WelcomeImg}  style={styles.img} />
            <View>
                <Text style={styles.text}>A Task Manager You Can Trust !</Text>
                <Text style={styles.textSub}>A workspace to over 10 Million inflencers around the world.</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
    </>
  )
}