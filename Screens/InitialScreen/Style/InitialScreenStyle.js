import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../../theme";


export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:20
    },
    mainContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between"
    },
    img:{
        width:'100%',
        height:300
    },
    text:{
        fontSize:25,
        color:"black",
        fontFamily:Fonts.BOLD,
        marginTop:30
    },
    textSub:{
        textAlign:'center',
        marginTop:10,
        fontSize:15,
        color:'black',
        fontFamily:Fonts.MEDIUM
    },
    btn:{
        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:10,
        marginTop:50
    },
    btnText:{
        color:"white",
        textAlign:'center',
        fontFamily:Fonts.MEDIUM
    }
})