import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import { notificationImg, UserProfile } from '../../theme/Images'
import { styles } from './Style/ProfileStyle'

export default function Profile({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const logouthandle = () => {
    navigation.navigate('Login')
    setModalVisible(false)
  }
  const noLogout = () => {
    setModalVisible(false);
  }
  return (
    <View style={styles.inboxContiner}>
      <View style={styles.inboxView}>
        <View style={styles.profileView}>
          <View>
            <Image source={UserProfile} style={styles.userProfileImg} />
          </View>
          <View style={styles.details}>
            <Text style={styles.mesText}>Profile Details</Text>
            <Text style={styles.tasksText}>John Deo</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={notificationImg} style={styles.notiImg} />
        </TouchableOpacity>
      </View>
        <View style={styles.mainProfileContainer}>
            <View style={styles.infoView}>
              <Text style={styles.profileText}>Account Information</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Notification</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Terms & conditions</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Ask a question</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Email notification</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Meetings</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Task</Text>
              <View style={styles.separator} />
              <Text style={styles.profileText}>Help</Text>
              <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.logoutBtn} onPress={() => setModalVisible(true)}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
        <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
         <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text style={styles.logText}>Are You sure you want to logout?</Text>
          <View style={styles.buttonContainer}>
           
              <TouchableOpacity  style={styles.loginButton} onPress={noLogout}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={logouthandle} style={styles.loginButton}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
       
      </Modal>
    </View>
  )
}