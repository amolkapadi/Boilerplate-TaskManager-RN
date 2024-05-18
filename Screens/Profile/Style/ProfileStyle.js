import { StyleSheet } from "react-native"
import { Colors, Fonts } from "../../../theme"


export const styles = StyleSheet.create({
    inboxContiner:{
        flex:1
    },
    inboxView:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.primary,
        paddingTop:20,
        paddingBottom:40,
        alignItems:'center',
    },
    profileView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    details:{
        paddingLeft:15
    },
    userProfileImg:{
        width:50,
        height:50,
        borderRadius:25
    },
    notiImg:{
        width:25,
        height:25
    },
    tasksText:{
        color:'white',
        fontFamily:Fonts.MEDIUM
    },
    mesText:{
        fontSize:20,
        fontFamily:Fonts.BOLD,
        color:'white'
    },
    mainProfileContainer:{
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-20,
        paddingHorizontal:20,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    infoView:{
        marginTop:20
    },
    separator: {
        marginTop:20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 5,
      },
      profileText:{
        marginTop:5,
        fontFamily:Fonts.MEDIUM

      },
       logoutBtn:{
      backgroundColor:Colors.primary,
      padding:15,
      borderRadius:10,
      marginBottom:20
    },
    logoutText:{
        color:"white",
        textAlign:"center",
        fontFamily:Fonts.MEDIUM

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        minWidth: 300,
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
      },
      logText:{
        fontSize:18,
        color:'black'
      },
      loginButton:{
        backgroundColor:Colors.primary,
      padding:15,
      borderRadius:10,
      marginBottom:15,
        width:'40%',
      },
     
      buttonText:{
        textAlign:'center',
        color:'white'

      }
})