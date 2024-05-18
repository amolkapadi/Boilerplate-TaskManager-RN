import { StyleSheet } from "react-native"
import { Colors,Fonts } from "../../../theme"


export const styles = StyleSheet.create({
    addTaskContainer:{
        flex:1, 
        backgroundColor:'white'
    },
    continer:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        backgroundColor:Colors.primary,
        paddingTop:20,
        paddingBottom:20
    },
    backArrow:{
        width:10,
        height:20
    },
    textAdd:{
        fontSize:18,
        color:'white',
        paddingLeft:120,
        fontFamily:Fonts.BOLD,
        
    },
    inputContainer:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:20
    },
    label:{
        fontSize:13,
        color:'black',
        fontFamily:Fonts.BOLD,

    },
    inputView:{
        marginTop:15
    },
    Input:{
        backgroundColor:Colors.secondary,
        borderRadius:10,
        paddingHorizontal:10,
        marginTop:10,
        fontSize:12
    },
    calenderImgs:{
        width:25,
        height:25
    },
    dateView:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        backgroundColor:Colors.secondary,
        borderRadius:10,
        paddingHorizontal:10,
        alignItems:'center',
        marginTop:10
    },
    InputDate:{
        fontSize:12
    },
    btn:{
        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:10,
        marginTop:25,
      },
      btnText:{
        color:'white',
        textAlign:"center",
        fontFamily:Fonts.MEDIUM
      },
})