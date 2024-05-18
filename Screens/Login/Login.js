import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './Style/LoginStyle'
 import { LoginImg, UserImg, GoogleImg, AppleImg, FacebookImg, PasswordImg } from '../../theme/Images'


 export default function Login({navigation}) {
    const gotoHome = () => {
      navigation.navigate("MainNavigation")
    }
    const gotToSignup = () => {
      navigation.navigate("Registration")

    }
  return (
    <View style={styles.loginContainer}>
      <Image source={LoginImg} style={styles.loginImg}/>
      <View style={styles.mainContainer}>
        <Text style={styles.welComeText}>Hello, {"\n"} Welcome back again</Text>
      
        <View style={styles.loginInputView}>
          <Image source={UserImg} style={styles.imgInput} />
          <TextInput  placeholder='Username' style={styles.loginInput} />
        </View>

        <View style={styles.loginInputView}>
          <Image source={PasswordImg} style={styles.imgInput} />
          <TextInput  placeholder='Password' style={styles.loginInput} />
        </View>

        <Text style={styles.forgetText}>Forget Password</Text>
        <TouchableOpacity style={styles.btn} onPress={gotoHome}>
            <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.contiueText}>or contiue with</Text>
      </View>
      <View style={styles.socialView}>
          <View style={styles.bgImg}>
          <Image source={GoogleImg} style={styles.socialImg} />
          </View>
          <View style={styles.bgImg}>
          <Image source={AppleImg} style={styles.socialImg} />
          </View>
          <View style={styles.bgImg}>
          <Image source={FacebookImg} style={styles.socialImg} />
          </View>
      </View>
      <TouchableOpacity onPress={gotToSignup}>
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}