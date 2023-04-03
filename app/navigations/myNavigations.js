// LINK:  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197710#overview
// LINK:  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197712#overview
import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Colors } from '../styles/color'

import AppRoute from '../AppRoute'

// import Login from '../Slack_app/index'
// import Register from '../Slack_app/Register'
// import Forgot from '../Slack_app/Forgot'
// import Home from '../Slack_app/Home'
// import Profile from '../Slack_app/Profile'
// import AboutApp from '../Slack_app/AboutApp'
// import ChangeEmail from '../Slack_app/ChangeEmail'
// import ChangePassword from '../Slack_app/ChangePassword'

const Stack = createNativeStackNavigator()

const myNav = () => {

    const myLink = (title, onPress, img) => {
        return (
            title != null && < TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.link} >
                {img != null && <Image source={img} style={styles.img} />}
                {title && <Text style={styles.linkText}>{title}</Text>}
            </TouchableOpacity >
        )
    }
    const myTitle = (title) => {
        return (
            title && <Text style={styles.title}>{title}</Text>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='AppRoute'
                screenOptions={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle,
                    headerBackTitleVisible: false, // hide backScreen name
                    headerTintColor: Colors.white,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerShown: true,
                    headerBackVisible: false, // hide back arrrow icon
                }}
            >
                <Stack.Screen
                    name='AppRoute'
                    component={AppRoute}
                    options={{
                        title: 'INITIAL SCREEN',
                        // headerTitle: () => myTitle(`Initial Screen`),
                        // headerLeft: () => myLink('', () => { console.log('left') }),
                        // headerRight: () => myLink('', () => { console.log('right') }),
                    }}
                    // options={({ route, navigation }) => {
                    //     const item = route.params.item
                    //     return {
                    //         // headerTitle: () => myTitle(item.title),
                    //     }
                    // }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
    link: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        marginRight: 8,
    },
    linkText: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    headerStyle: {
        backgroundColor: Colors.primery,
    },
    headerTitleStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
})

export default myNav
