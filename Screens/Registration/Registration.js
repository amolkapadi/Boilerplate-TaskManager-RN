import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './Style/RegistrationStyle'
 import { LoginImg, UserImg, GoogleImg, AppleImg, FacebookImg, PasswordImg , InboxImg} from '../../theme/Images'


 export default function Registration({navigation}) {
   
    const gotToSignin = () => {
      navigation.navigate("Login")

    }
  return (
    <View style={styles.loginContainer}>
      <Image source={LoginImg} style={styles.loginImg}/>
      <View style={styles.mainContainer}>
        <Text style={styles.welComeText}>Sign up</Text>
      
        <View style={styles.loginInputView}>
          <Image source={UserImg} style={styles.imgInput} />
          <TextInput  placeholder='Username' style={styles.loginInput} />
        </View>

        <View style={styles.loginInputView}>
          <Image source={InboxImg} style={styles.imgInput} />
          <TextInput  placeholder='Email' style={styles.loginInput} />
        </View>
        <View style={styles.loginInputView}>
          <Image source={PasswordImg} style={styles.imgInput} />
          <TextInput  placeholder='Password' style={styles.loginInput} />
        </View>

      
        <TouchableOpacity style={styles.btn} >
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
      <TouchableOpacity onPress={gotToSignin}>
          <Text style={styles.signupText}>Allready have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}