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
import * as STYLE from './Winestyle';
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
import img10 from '../../Images/watch.png';
import img11 from '../../Images/6.jpeg';
import img12 from '../../Images/7.jpeg';
import img13 from '../../Images/bookmark.png';
import img14 from '../../Images/group.png';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import { styles } from "../Register/Style";


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const images = [
    'http://www.taelite.com/images/destinations/miami/banner.jpg',
    'http://voyagemia.com/wp-content/uploads/2020/01/Banner-Miami-Skyline-at-Sunset.png',
    'https://media.istockphoto.com/illustrations/old-city-retro-miami-skyline-panorama-at-sunset-banner-for-site-illustration-id866376334?s=612x612'
]

function Wine_not_taste({ navigation }) {
    const [imgActive, setimgActive] = useState(0);
    onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#F4F4F4" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={STYLE.Style.card1}>
                        <View style={{ marginTop: 3 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Feather name="arrow-left" size={24} style={STYLE.Style.arrow_left} onPress={() => navigation.navigate('Home')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3 }}>
                            <Text style={STYLE.Style.header_text}>{"Wine not taste passion?"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginRight: "8.30%" }}>
                    <ScrollView
                        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={STYLE.Style.wrap}
                    >
                        {
                            images.map((e, index) => (
                                <Image
                                    key={e}
                                    resizeMode='stretch'
                                    style={STYLE.Style.wrap}
                                    source={{ uri: e }}
                                />
                            ))
                        }
                    </ScrollView>
                    <View style={STYLE.Style.wrapDot}>
                        {
                            images.map((e, index) =>
                                <Text
                                    key={e}
                                    style={imgActive == index ? STYLE.Style.dotActive : STYLE.Style.dot}
                                > ● </Text>
                            )
                        }
                    </View>
                </View>

                <View style={{}}>
                    <Text style={STYLE.Style.header_text1}>{"Private Scenic Travel Photo Shoot"}</Text>
                </View>
                <View style={{ margin: 15, flexDirection: "row", marginTop: -13, marginLeft: 18 }}>
                    <FontAwesome name="star" size={12} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 3, }} />
                    <View style={{ marginLeft: 5, flexDirection: "row" }}>
                        <Text style={STYLE.Style.rate_text}>{"4.9"}</Text>
                        <Text style={STYLE.Style.rate_text}> {"(208)"} </Text>
                    </View>
                </View>
                <View style={{
                    borderWidth: 0.2, marginTop: 5, borderColor: COLOR.DEFAULTLIGHT,
                    marginRight: 15, marginLeft: 18, width: WIDTH * 0.9
                }} />
                <View style={{ marginTop: 15, flexDirection: "row", }}>
                    <Text style={STYLE.Style.header_text1}>{"Experience hosted by peter"}</Text>
                    <View>
                        <View style={{ marginLeft: "25%" }}>
                            <Image style={{
                                width: WIDTH / 8,
                                height: WIDTH / 8, borderRadius: 100, margin: 6
                            }} source={img11} />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ marginLeft: 20, flexDirection: "row" }}>
                        <Image style={{
                            width: WIDTH / 10,
                            height: WIDTH / 10,
                        }} source={img10} />
                        <Text style={{ margin: 10, fontSize: 18, color: COLOR.BLACK }}>{"90 mins"}</Text>
                    </View>
                    <View style={{ marginLeft: 20, flexDirection: "row" }}>
                        <Image style={{
                            width: WIDTH / 10,
                            height: WIDTH / 10,
                        }} source={img13} />
                        <Text style={{ margin: 10, fontSize: 18, color: COLOR.BLACK }}>{"Includes equipment"}</Text>
                    </View>
                    <View style={{ marginLeft: 20, flexDirection: "row" }}>
                        <Image style={{
                            width: WIDTH / 10,
                            height: WIDTH / 10,
                        }} source={img14} />
                        <Text style={{ margin: 10, fontSize: 18, color: COLOR.BLACK }}>{"Up to 4 People"}</Text>
                    </View>

                </View>
                <View style={{
                    borderWidth: 0.2, marginTop: 10, borderColor: COLOR.DEFAULTLIGHT,
                    marginRight: 15, marginLeft: 18, width: WIDTH * 0.9
                }} />
                <View style={{}}>
                    <Text style={STYLE.Style.header_text1}>{"What you'll do"}</Text>
                </View>
                <View style={{ marginLeft: 15, }}>
                    <Text style={{ fontSize: 16, justifyContent: "space-around", }}>{"Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industru's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledit to make a type specimen book."}</Text>
                </View>
                <View style={{
                    borderWidth: 0.2, marginTop: 15, borderColor: COLOR.DEFAULTLIGHT,
                    marginRight: 15, marginLeft: 18, width: WIDTH * 0.9
                }} />
                {/* <View style={{}}>
                    <Text style={STYLE.Style.header_text1}>{"What's included"}</Text>
                </View>
                <View>
                    <View style={STYLE.Style.card2}>

                    </View>
                </View> */}
            </ScrollView>

        </SafeAreaView>

    )
}

export default Wine_not_taste;