import React, { useState } from "react";
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
    StyleSheet
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './MiamiStyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import img1 from '../../Images/hotel2.jpeg';
import img2 from '../../Images/beach.jpeg';
import img3 from '../../Images/photography.png';
import img4 from '../../Images/tour.png';
import img5 from '../../Images/travel.png';
import img6 from '../../Images/1.jpeg';
import img8 from '../../Images/9.jpeg';
import img9 from '../../Images/4.jpeg';
import img10 from '../../Images/5.jpeg';
import img11 from '../../Images/6.jpeg';
import img12 from '../../Images/7.jpeg';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const images = [
    'http://www.taelite.com/images/destinations/miami/banner.jpg',
    'http://voyagemia.com/wp-content/uploads/2020/01/Banner-Miami-Skyline-at-Sunset.png',
    'https://media.istockphoto.com/illustrations/old-city-retro-miami-skyline-panorama-at-sunset-banner-for-site-illustration-id866376334?s=612x612'
]
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Miami({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#F4F4F4" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={STYLE.Style.card1}>
                        <View style={{ marginTop: 3 }}>
                            <TouchableOpacity>
                                <Feather name="arrow-left" size={24} style={STYLE.Style.arrow_left} onPress={() => navigation.navigate('Home')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3, marginLeft: "25%" }}>
                            <Text style={STYLE.Style.header_text}>{"Miami"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: -10 }}>
                    <ScrollView pagingEnabled horizontal>
                        {
                            images.map((image, index) => (
                                <Image
                                    key={index}
                                    style={{ width: WIDTH / 1, height: WIDTH * 0.5, marginTop: 5 }}
                                    source={{ uri: image }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={{}}>
                    <Text style={STYLE.Style.header_text}>{"Miami"}</Text>
                </View>
                <View style={{ marginLeft: 15, }}>
                    <Text style={{ fontSize: 16, justifyContent: "space-around", }}>{"Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industru's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledit to make a type specimen book."}</Text>
                </View>
                <View style={{}}>
                    <Text style={STYLE.Style.header_text}>{"Category"}</Text>
                </View>
                <View style={{ flexDirection: "row", }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: "column", marginLeft: 30 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img2} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, textAlign: "center" }}>{"Beach"}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 20 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img3} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Photography"}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 20 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img4} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Tour"}</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 25 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 7,
                                    height: WIDTH / 7, borderRadius: 100, margin: 6
                                }} source={img5} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Travel"}</Text>
                            </View>
                        </View>
                    </ScrollView >
                </View>
                <View style={{}}>
                    <Text style={STYLE.Style.header_text}>{"Top Destination"}</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: "6%" }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity>
                                <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                    source={img6} >
                                    <View style={{ marginTop: "85%", margin: 20, flexDirection: "column" }}>
                                        <Text style={STYLE.Style.text_imagebackground}>Singapore</Text>
                                        <Text style={STYLE.Style.text_imagebackground}>593 Properties</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity>
                                <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                    source={img8} >
                                    <View style={{ marginTop: "85%", margin: 20, flexDirection: "column" }}>
                                        <Text style={STYLE.Style.text_imagebackground}>Venice</Text>
                                        <Text style={STYLE.Style.text_imagebackground}>290 Properties</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity>
                                <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                    source={img12} >
                                    <View style={{ marginTop: "85%", margin: 20, flexDirection: "column" }}>
                                        <Text style={STYLE.Style.text_imagebackground}>Venice</Text>
                                        <Text style={STYLE.Style.text_imagebackground}>290 Properties</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Miami;
