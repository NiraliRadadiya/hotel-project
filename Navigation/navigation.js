import React, { useEffect, useState } from 'react';
import { Text } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "../Screen/Register/Register";
import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import Home from "../Screen/Home/Home";
import Firstpage from "../Screen/First_Page/Firstpage";
import Hotel from "../Screen/Hotel/Hotel";
import Hotel_2 from "../Screen/Hotel/Hotel_2";
import Select_date from '../Screen/Hotel/Select_date';
import Profile from '../Screen/Profile/Profile';
import Update_profile from '../Screen/Profile/Update_profile';
import Miami from '../Screen/Home/Maimi';
import Wine_not_taste from '../Screen/Home/Wine_not_taste';
import Invite_friend from '../Screen/Profile/Invite_friend';
import Suport from '../Screen/Profile/Suport';
import Favorite from '../Screen/Favorite/Favorite';
import Visit from '../Screen/Visit/Visit';
import Notification from '../Screen/Profile/Notification'
import Logout_pop from '../Screen/Profile/logout_pop';
import Trip from '../Screen/Visit/Trip';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as COLOR from '../context/action/color';
import * as KEY from '../context/action/key'
import Place from '../Screen/Visit/Place';
import Map from '../Screen/Hotel/map';
import Payment from '../Screen/Payment/Payment';


// import { languageConfig } from './language/languageConfig';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Miami" component={Miami} options={{ headerShown: false }} />
            <Stack.Screen name="Wine_not_taste" component={Wine_not_taste} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Update_profile" component={Update_profile} options={{ headerShown: false }} />
            <Stack.Screen name="Hotel_2" component={Hotel_2} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Update_profile" component={Update_profile} options={{ headerShown: false }} />
            <Stack.Screen name="Invite_friend" component={Invite_friend} options={{ headerShown: false }} />
            <Stack.Screen name="Suport" component={Suport} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const HotelStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Hotel"
                component={Hotel}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Hotel_2" component={Hotel_2} options={{ headerShown: false }} />
            <Stack.Screen name="Select_date" component={Select_date} options={{ headerShown: false }} />
            <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
            <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}
const VisitStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Visit"
                component={Visit}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Trip" component={Trip} options={{ headerShown: false }} />
            <Stack.Screen name="Place" component={Place} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const FavoriteStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Favorite"
                component={Favorite}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Hotel_2" component={Hotel_2} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const PaymentStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
function navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>

                <Stack.Screen name="Login" component={LoginStack} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Firstpage" component={Firstpage} options={{ headerShown: false }} /> */}

                {/* <Stack.Screen name="Hotel" component={Hotel} options={{ headerShown: false }} /> */}


                {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'home') {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'home' : 'home'}
                                size={25}
                                color={color}
                            />
                        );
                    } else if (route.name === 'hotel') {
                        return (
                            <FontAwesome
                                name={focused ? 'hotel' : 'hotel'}
                                size={25}
                                color={color}
                            />
                        );
                    } else if (route.name === 'plane') {
                        return (
                            <FontAwesome5
                                name={focused ? 'plane-departure' : 'plane-departure'}
                                size={25}
                                color={color}
                            />
                        );
                    } else if (route.name === 'heart') {
                        return (
                            <FontAwesome
                                name={focused ? 'heart' : 'heart'}
                                size={25}
                                color={color}
                            />
                        );
                    }
                    else if (route.name === 'user') {
                        return (
                            <FontAwesome
                                name={focused ? 'user' : 'user'}
                                size={25}
                                color={color}
                            />
                        );
                    }
                },
                tabBarActiveTintColor: COLOR.DEFALUTCOLOR,
                tabBarInactiveTintColor: COLOR.GREY,
                tabBarStyle: {
                    borderTopRightRadius: 0, //10
                    borderTopLeftRadius: 0, //10
                    backgroundColor: COLOR.WHITE,
                },

                tabBarLabelStyle: { fontSize: 14, textTransform: KEY.CAPITALIZE },
                tabBarHideOnKeyboard: true,
                headerTintColor: COLOR.WHITE
            })}
            backBehavior="initialRoute"
        >
            <Tab.Screen name="home" component={HomeStack} options={{ unmountOnBlur: false, headerShown: false, }} />

            <Tab.Screen name="hotel" component={HotelStack} options={{ headerShown: false, }} />

            <Tab.Screen name="plane" component={VisitStack} options={{ headerShown: false, }} />

            <Tab.Screen name="heart" component={FavoriteStack} options={{ headerShown: false, }} />

            <Tab.Screen name="user" component={ProfileStack} options={{ headerShown: false, }} />


        </Tab.Navigator>
    );
}
export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Firstpage">
                {/* <Stack.Screen name="SplashScreen" component={SplashScreenStackScreen} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="SplashScreen" component={SPLASHSCREEN} options={{ headerShown: false }} /> */}
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}   