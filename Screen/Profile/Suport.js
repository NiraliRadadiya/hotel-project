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
    Modal,
    Linking
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './suportStyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { exp } from "react-native/Libraries/Animated/Easing";
import img1 from '../../Images/suport1.webp';
import ColorPropType from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const Emailid = () => {
    const subject = "Mail Subject";
    const message = "Message Body";
    Linking.openURL(`mailto:radadiya.nirali91@gmail.com?subject=${subject}&body=${message}`)

}
function Suport({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#F4F4F4" }}>
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
                            <Text style={STYLE.Style.header_text}>{"Suport"}</Text>
                        </View>
                    </View>
                </View>
                <View style={STYLE.Style.card2}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <EvilIcons name="envelope" size={35} color={COLOR.DEFALUTCOLOR} style={STYLE.Style.messgebox} onPress={() => { Emailid() }} />
                            <Text style={STYLE.Style.text}>{"Send us a message"}</Text>

                        </View>

                        <View style={{ flexDirection: "row", marginLeft: "25%" }}>
                            <TouchableOpacity onPress={() => { Emailid() }}>
                                <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9", margin: 15 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 20, margin: 20, color: COLOR.BLACK }}>
                        {"Call Us at thses numbers"}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", margin: 20, marginTop: -10, }}>
                    <FontAwesome name="phone" size={35} />
                    <Text
                        style={{
                            fontSize: TYPOGRAPHY.FONT_SIZE_24,
                            color: COLOR.BLACK,
                            fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                            marginLeft: 20
                        }}>{"18002668899"}</Text>
                </View>
                <View style={{ flexDirection: "row", margin: 20, marginTop: -10, marginLeft: "18%" }}>
                    <AntDesign name="clockcircle" size={18} color={"#449A4B"} />
                    <Text style={{
                        fontSize: TYPOGRAPHY.FONT_SIZE_16,
                        color: COLOR.BLACK,
                        marginLeft: 10
                    }}>{"9:30 Am - 6:30 PM"}</Text>
                    <Text> {"(Monday to Saturday)"} </Text>
                </View>
                <View style={{ flexDirection: "row", margin: 20, marginTop: -10, marginLeft: "18%" }}>
                    <AntDesign name="clockcircle" size={18} color={"#AF707A"} />
                    <Text style={{
                        fontSize: TYPOGRAPHY.FONT_SIZE_16,
                        color: COLOR.BLACK,
                        marginLeft: 10
                    }}>{"Sunday & National Holidays"}</Text>
                </View>
                <View style={{ flexDirection: "column", margin: 20, marginTop: 10, marginLeft: "15%" }}>

                    <Text style={{
                        fontSize: TYPOGRAPHY.FONT_SIZE_24,
                        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                        color: COLOR.BLACK,
                        marginLeft: 10
                    }}>{"+91 4466953435"}</Text>
                    <Text style={{ margin: 10, marginTop: 0 }}>{"If calling from outside India"}</Text>
                </View>
                <View>
                    <Image style={{
                        width: WIDTH / 1,
                        height: WIDTH * 0.7
                    }} source={img1} />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Suport;