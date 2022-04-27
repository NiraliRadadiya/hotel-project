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
    Button
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './placestyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import img5 from '../../Images/trekking.jpeg';
import Darjeeling from '../../Images/Darjeeling.jpeg';
import himachal from '../../Images/himachal.jepg.jpg';
import img2 from '../../Images/Visit3.jpeg';
import img3 from '../../Images/cycling.png';
import img4 from '../../Images/sufring.jpeg';
import img8 from '../../Images/tour.png';
import img9 from '../../Images/Visit.jpeg';
import img10 from '../../Images/ribbon.png';
import img11 from '../../Images/hotel3.jpeg';
import { retrySymbolicateLogNow } from "react-native/Libraries/LogBox/Data/LogBoxData";


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Place({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#ffffff" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{}}>
                    <View style={STYLE.styles.card1}>
                        <View style={{ marginTop: 3 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Trip')}>
                                <Feather name="arrow-left" size={24} style={STYLE.styles.arrow_left} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3, alignSelf: "center", marginTop: -30 }}>
                            <Text style={STYLE.styles.header_text}>{"Swiss Alps"}</Text>
                        </View>
                    </View>
                    <ImageBackground style={{ width: WIDTH / 1, height: HEIGHT / 2 }} source={Darjeeling}>
                    </ImageBackground>
                </View>
                <View style={{ margin: 15, }}>
                    <Text style={STYLE.styles.header_text1}>{"Swiss Alps"}</Text>
                    <View style={{ marginTop: 3, flexDirection: "row", }}>
                        <Entypo name="location-pin" size={20} />
                        <Text style={STYLE.styles.text}>{"Switzerland"}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: 5 }}>
                        <FontAwesome name="star" size={15} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 5, }} />
                        <View style={{ marginLeft: 5 }}>
                            <Text style={STYLE.styles.rate_text}>{"5.0"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: "column", marginLeft: 30 }}>
                            <View>
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img8} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, textAlign: "center" }}>{"Travel"}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 20 }}>
                            <View>
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img3} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Cycling"}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 20 }}>
                            <View >
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img4} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Surfing"}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 25 }}>
                            <View >
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img5} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Trekking"}</Text>
                            </View>
                        </View>

                    </ScrollView >
                </View>
                <View style={{ margin: 15, }}>
                    <Text style={STYLE.styles.header_text1}>{"About"}</Text>
                </View>
                <View style={{ marginLeft: 15, }}>
                    <Text style={{ fontSize: 16, justifyContent: "space-around", }}>{"Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industru's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledit to make a type specimen book."}</Text>
                </View>
                {/* <View style={{ margin: 15, }}>
                    <Text style={STYLE.styles.header_text1}>{"Location"}</Text>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}


export default Place;