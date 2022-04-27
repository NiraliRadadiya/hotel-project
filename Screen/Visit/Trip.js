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
import * as STYLE from './Tripstyle';
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
import img5 from '../../Images/Visit1.jpeg';
import Darjeeling from '../../Images/Darjeeling.jpeg';
import himachal from '../../Images/himachal.jepg.jpg';
import img2 from '../../Images/Visit3.jpeg';
import img3 from '../../Images/5.jpeg';
import img4 from '../../Images/6.jpeg';
import img8 from '../../Images/9.jpeg';
import img9 from '../../Images/Visit.jpeg';
import img10 from '../../Images/ribbon.png';
import img11 from '../../Images/hotel3.jpeg';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const images = [
    'https://c4.wallpaperflare.com/wallpaper/860/55/721/the-banner-saga-video-games-artwork-concept-art-wallpaper-preview.jpg',
    'https://i1.wp.com/www.namitatravels.org/wp-content/themes/uploads/2014/12/Shimla-Manali-Tour-Packages.jpg',
    'https://travelacharya.in/wp-content/uploads/2019/12/simla-manali-500x500.jpg',

]
function Trip({ navigation }) {
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
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#ffffff" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={STYLE.styles.card1}>
                        <View style={{ marginTop: 3 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Visit')}>
                                <Feather name="arrow-left" size={24} style={STYLE.styles.arrow_left} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3, alignSelf: "center" }}>
                            <Text style={STYLE.styles.header_text}>{"Trips"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginRight: "8.30%" }}>
                    <ScrollView
                        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={STYLE.styles.wrap}
                    >
                        {
                            images.map((e, index) => (
                                <Image
                                    key={e}
                                    resizeMode='stretch'
                                    style={STYLE.styles.wrap}
                                    source={{ uri: e }}
                                />
                            ))
                        }
                    </ScrollView>
                    <View style={STYLE.styles.wrapDot}>
                        {
                            images.map((e, index) =>
                                <Text
                                    key={e}
                                    style={imgActive == index ? STYLE.styles.dotActive : STYLE.styles.dot}
                                > ● </Text>
                            )
                        }
                    </View>
                </View>
                <View style={STYLE.styles.containerView}>
                    <View style={{ alignSelf: "flex-start", margin: 15 }}>
                        <Text style={STYLE.styles.text1}>{"Must visit this place"}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginLeft: "4%" }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Place')}>
                                <ImageBackground borderRadius={20} style={STYLE.styles.Place_image}
                                    source={Darjeeling} >
                                </ImageBackground>
                            </TouchableOpacity>
                            <View>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={15} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 5, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.styles.rate_text}>{"5.0"}</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.styles.rate_text_2}>{"Swiss Alps"}</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <View style={{ marginTop: 3, flexDirection: "row", }}>
                                        <Entypo name="location-pin" size={20} />
                                        <Text style={STYLE.styles.text}>{"Switzerland"}</Text>
                                    </View>
                                    <View style={STYLE.styles.box}>
                                        <Text style={{ fontSize: 20, margin: 10, textAlign: "center", color: COLOR.BACKGROUNDCOLOR }}>{"15% off"}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity>
                                <ImageBackground borderRadius={20} style={STYLE.styles.Place_image}
                                    source={himachal} >

                                </ImageBackground>
                            </TouchableOpacity>
                            <View>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={15} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 5, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.styles.rate_text}>{"5.0"}</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.styles.rate_text_2}>{"Mount Logan"}</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <View style={{ marginTop: 3, flexDirection: "row", }}>
                                        <Entypo name="location-pin" size={20} />
                                        <Text style={STYLE.styles.text}>{"Canada"}</Text>
                                    </View>
                                    <View style={STYLE.styles.box}>
                                        <Text style={{ fontSize: 20, margin: 10, textAlign: "center", color: COLOR.BACKGROUNDCOLOR }}>{"18% off"}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity>
                                <ImageBackground borderRadius={20} style={STYLE.styles.Place_image}
                                    source={img2} >

                                </ImageBackground>
                            </TouchableOpacity>
                            <View>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={15} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 5, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.styles.rate_text}>{"5.0"}</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.styles.rate_text_2}>{"Swiss Alps"}</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <View style={{ marginTop: 3, flexDirection: "row", }}>
                                        <Entypo name="location-pin" size={20} />
                                        <Text style={STYLE.styles.text}>{"Darjeeling"}</Text>
                                    </View>
                                    <View style={STYLE.styles.box}>
                                        <Text style={{ fontSize: 20, margin: 10, textAlign: "center", color: COLOR.BACKGROUNDCOLOR }}>{"15% off"}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 15, }}>
                            <TouchableOpacity>
                                <ImageBackground borderRadius={20} style={STYLE.styles.Place_image}
                                    source={img9} >

                                </ImageBackground>
                                <View>
                                    <View style={{ margin: 10, flexDirection: "row" }}>
                                        <FontAwesome name="star" size={15} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 5, }} />
                                        <View style={{ marginLeft: 5 }}>
                                            <Text style={STYLE.styles.rate_text}>{"5.0"}</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: -10 }}>
                                        <Text style={STYLE.styles.rate_text_2}>{"Swiss Alps"}</Text>
                                    </View>
                                    <View style={{ marginLeft: 5 }}>
                                        <View style={{ marginTop: 3, flexDirection: "row", }}>
                                            <Entypo name="location-pin" size={20} />
                                            <Text style={STYLE.styles.text}>{"Darjeeling"}</Text>
                                        </View>
                                        <View style={STYLE.styles.box}>
                                            <Text style={{ fontSize: 20, margin: 10, textAlign: "center", color: COLOR.BACKGROUNDCOLOR }}>{"15% off"}</Text>
                                        </View>

                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Trip;