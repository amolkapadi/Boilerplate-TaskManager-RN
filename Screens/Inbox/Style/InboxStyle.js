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
        alignItems:'center'
    },
    inboxContainerMain:{
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-20,
        paddingHorizontal:20,
        paddingBottom:250
        
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
        color:'white',
        fontFamily:Fonts.BOLD

    },
    searchView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.secondary,
        marginTop:20,
        paddingHorizontal:10,
        borderRadius:15
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
      },
      userMessage: {
        justifyContent: 'flex-end',
      },
      otherMessage: {
        justifyContent: 'flex-start',
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
      messageContent: {
        flex: 1,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        padding:10,
        maxWidth: '100%',
      },
      senderName: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      messageText: {
        fontSize: 12,
        fontFamily:Fonts.MEDIUM

      },
      titleContainer: {
        padding: 5,
        marginBottom: 10,
      },
      title: {
        marginTop:10,
        fontSize:18,
        fontFamily:Fonts.BOLD

      },
})