import { StyleSheet } from "react-native"
 import { Colors, Fonts } from "../../../theme"
export const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        backgroundColor:'white',
        
    },
    homeView:{
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
        fontFamily:Fonts.MEDIUM,

    },
    mesText:{
        fontSize:20,
        color:'white',
        fontFamily:Fonts.BOLD

    },
    taskSummaryView:{
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-20,
    },
    taskText:{
        fontSize:14,
        padding:10,
        color:'black',
        fontFamily:Fonts.MEDIUM,

        
    },
    taskSummaryCard:{
        backgroundColor:Colors.secondary,
        marginTop:20,
        marginHorizontal:20,
        borderRadius:10,
        paddingBottom:10
    },
    addTaskImg:{
        width:30,
        height:30
    },
    addView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    percentageText:{
        color:'black',
        fontFamily:Fonts.MEDIUM,

    },
    upComings:{
        paddingHorizontal:20,
        marginTop:15
    },
    upcoingText:{
        fontSize:18,
        color:"black",
        marginHorizontal:5,
        fontFamily:Fonts.BOLD,

    },
    
      taskContainer: {
        marginHorizontal:5,
        padding: 10,
        marginTop:10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#ffffff', // Set your card background color
        borderRadius: 10, // Adjust as needed
        padding: 15, // Adjust as needed
        ...Platform.select({
          ios: {
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
          },
         
        }),
      },
      taskName: {
        fontSize: 14,
        marginBottom: 5,
        fontFamily:Fonts.BOLD,

        
      },
      taskDetails: {
        fontSize: 12,
        fontFamily:Fonts.MEDIUM,

      },
      taskListView:{
        paddingHorizontal:20,
        marginTop:15
      },
      filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
      },
      filterButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: Colors.secondary,
      },
      filterText: {
        color: 'black',
        fontFamily:Fonts.MEDIUM,

      },
      activeFilterButton: {
        backgroundColor: Colors.primary
      },
      activeFilterText: {
        color: '#fff', 
        fontFamily:Fonts.MEDIUM,

      },
      statusCircle:{
        flexDirection:'row',
        justifyContent:"space-between"
      },
      pendingTask:{
        width:15,
        height:15,
        backgroundColor:"red",
        borderRadius:25
      },
      statusDetails:{
        flexDirection:'row',
        justifyContent:'space-between'
      }
  })
  