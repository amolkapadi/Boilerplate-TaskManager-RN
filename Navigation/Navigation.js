import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home/Home'
import Task from '../Screens/Task/Task'
import Inbox from '../Screens/Inbox/Inbox'
import Profile from '../Screens/Profile/Profile'
import { HomeImg, TaskImg, InboxImg, ProfileImg } from '../theme/Images'
const Tab = createBottomTabNavigator();

const CustomTabIcon = ({source, focused}) => {
    return(
        <Image  
            source={source}
            style={{
                width:24,
                height:24,
                tintColor: focused ? '#20bf55' : 'black'
            }}
        />
    )
}

export default function Navigation() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#20bf55',
            tabBarInactiveTintColor:"black",
            tabBarStyle:{paddingBottom:10, height:60},
            headerShown:false
        }}
    >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={HomeImg} focused={focused} />
                ),
                tabBarLabel:'Home'
            }}
        />
        <Tab.Screen
            name='Task'
            component={Task}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={TaskImg} focused={focused} />
                ),
                tabBarLabel:'Task'
            }}
        />
        <Tab.Screen
            name='Inbox'
            component={Inbox}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={InboxImg} focused={focused} />
                ),
                tabBarLabel:'Inbox'
            }}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon:({focused}) => (
                    <CustomTabIcon  source={ProfileImg} focused={focused} />
                ),
                tabBarLabel:'Profile'
            }}
        />


    </Tab.Navigator>
  )
}