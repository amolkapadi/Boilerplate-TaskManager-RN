import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../theme";
{Colors}


export const styles = StyleSheet.create({
    taskView:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.primary,
        paddingTop:20,
        paddingBottom:40,
        alignItems:'center'
    },
    profileView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    userProfile:{
        width:50,
        height:50,
        borderRadius:25
    },
    details:{
       paddingLeft:15         
    },
    mesText:{
        fontSize:20,
        color:'white',
        fontFamily:Fonts.BOLD
    },
    taskText:{
        color:'white',
        fontFamily:Fonts.MEDIUM
    },
    notiImg:{
        width:25,
        height:25
    },
    calenderView:{
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'white',
        marginTop:-20
    },
    mainCalenderView:{
            flex:1,
            padding:20
    },
    stickyCircle:{
        position:'absolute',
        bottom:30,
        right:25,
        borderRadius:25
    },
    addImg:{
        width:60,
        height:60,
        borderRadius:25
    }

})