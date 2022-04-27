import React, { useState, Component } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Modal
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './Notificationstyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Notification({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#EEEEEE" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={STYLE.Style.card1}>
                        <View style={{ marginTop: 3 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                <Feather name="arrow-left" size={24} style={STYLE.Style.arrow_left} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3, }}>
                            <Text style={STYLE.Style.header_text}>{"Notification"}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 2 }}>
                    <View style={STYLE.Style.card3}>
                        <Text style={STYLE.Style.text}>
                            {"New Google+ notifications"}
                        </Text>
                        <Text style={{ marginTop: -10, marginLeft: 15 }}>
                            {"Eari Libyrd: Added you back"}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 2 }}>
                    <View style={STYLE.Style.card3}>
                        <Text style={STYLE.Style.text}>
                            {"New Google+ notifications"}
                        </Text>
                        <Text style={{ marginTop: -10, marginLeft: 15 }}>
                            {"Eari Libyrd: Added you back"}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 2 }}>
                    <View style={STYLE.Style.card3}>
                        <Text style={STYLE.Style.text}>
                            {"New Google+ notifications"}
                        </Text>
                        <Text style={{ marginTop: -10, marginLeft: 15 }}>
                            {"Eari Libyrd: Added you back"}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification;