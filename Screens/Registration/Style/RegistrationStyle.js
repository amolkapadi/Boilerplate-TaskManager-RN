import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../../theme";


export const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor:"white"
    },
    loginImg:{
        width:"100%",
        height:280,
        resizeMode:"contain"
    },
    mainContainer:{
        paddingHorizontal:20
    },
    welComeText:{
        fontSize:25,
        color:'black',
        fontFamily:Fonts.BOLD
    },
    loginInputView:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.secondary,
        paddingHorizontal:10,
        borderRadius:10,
        marginTop:10
    },
    imgInput:{
        width:15,
        height:15
    },
    loginInput:{
        paddingHorizontal:10
    },
  
    btn:{
        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:10,
        marginTop:20
    },
    btnText:{
        color:"white",
        textAlign:'center',
        fontFamily:Fonts.MEDIUM
    },
    contiueText:{
        textAlign:'center',
        marginTop:8,
        color:"black",
        fontFamily:Fonts.MEDIUM
    },
    socialView:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        marginTop:20
        },
        bgImg:{
            backgroundColor:Colors.secondary,
            borderRadius:25,
            padding:10
        },
        socialImg:{
        width:35,
        height:35
        },
        signupText:{
            textAlign:'center',
            fontSize:12,
            fontFamily:Fonts.MEDIUM,
            marginTop:20
        }

})