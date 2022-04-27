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
    StyleSheet
} from "react-native";
import * as STYLE from './Style';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import img1 from '../../Images/hotel2.jpeg';
import img2 from '../../Images/hotel1.jpeg';
import img3 from '../../Images/hotel3.jpeg';
import img4 from '../../Images/animated.jpeg';
import img5 from '../../Images/lift_animated.jpeg';
import img6 from '../../Images/wifi_animated.jpeg';
import img7 from '../../Images/kichan_animated.jpeg'
import img8 from '../../Images/9.jpeg';
import bedicon from '../../Images/bedicon.png'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const images = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6316054/pexels-photo-6316054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',

]
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


function Hotel_2({ navigation }) {
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
                            <TouchableOpacity>
                                <Feather name="arrow-left" size={24} style={STYLE.Style.arrow_left} onPress={() => navigation.navigate('Home')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3 }}>
                            <Text style={STYLE.Style.header_text}>{"Paris France Hotel"}</Text>
                        </View>
                        <View style={{ marginLeft: "28%", marginTop: 3 }}>
                            <TouchableOpacity>
                                <Feather name="heart" size={24} style={STYLE.Style.favr_left} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* <View>
                    <Image style={STYLE.Style.image1} source={img3} />
                </View> */}
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
                <View>
                    <View>
                        <Text style={{
                            margin: 15,
                            color: COLOR.BLACK,
                            fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                            fontSize: TYPOGRAPHY.FONT_SIZE_18
                        }}>{"Paris France Hotel"}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: -10, marginLeft: 12, }}>
                        <Entypo name="star" size={20} color={COLOR.RATE_START} />
                        <Text style={{
                            marginLeft: 6,
                            color: COLOR.BLACK,
                            fontSize: TYPOGRAPHY.FONT_SIZE_16
                        }}>{"5.0"}</Text>
                        <Text style={{
                            marginLeft: 6,
                            color: COLOR.DEFAULTLIGHT,
                            fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                            fontSize: TYPOGRAPHY.FONT_SIZE_16
                        }}>{"(12)"}</Text>
                        <Text style={{
                            marginLeft: 6,
                            color: COLOR.DEFALUTCOLOR,
                            fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                            fontSize: TYPOGRAPHY.FONT_SIZE_16
                        }}>{"Budapest, Hungary"}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", marginTop: 5, marginLeft: 12 }} onPress={() => navigation.navigate('Map')}>
                    <View style={{ marginTop: 3 }}>
                        <Entypo name="location-pin" size={20} />
                    </View>
                    <Text style={STYLE.Style.text}>Paris</Text>

                </TouchableOpacity>


                <View style={{
                    borderWidth: 1, marginTop: 20, borderColor: COLOR.DEFAULTLIGHT,
                    marginRight: 15, marginLeft: 18, width: WIDTH * 0.9
                }} />
                <View>
                    <Text style={{
                        marginTop: 20,
                        margin: 20,
                        color: COLOR.BLACK,
                        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                        fontSize: TYPOGRAPHY.FONT_SIZE_17
                    }}>Facility</Text>
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
                                }} source={img4} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5 }}>{"Free Parking"}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 20 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 10,
                                    height: WIDTH / 10, margin: 10
                                }} source={img5} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Lift"}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 25 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 10,
                                    height: WIDTH / 10, margin: 10
                                }} source={img6} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Wifi"}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 25 }}>
                            <View style={STYLE.Style.round_icon}>
                                <Image style={{
                                    width: WIDTH / 10,
                                    height: WIDTH / 10, margin: 10
                                }} source={img7} />
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 5, color: COLOR.DEFALUTCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD, marginLeft: -5, textAlign: "center" }}>{"Kichan"}</Text>
                            </View>
                        </View>
                    </ScrollView >
                </View>

                <View style={{ margin: 15 }}>
                    <Text style={{

                        color: COLOR.BLACK,
                        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                        fontSize: TYPOGRAPHY.FONT_SIZE_18
                    }}>{"Sleeping arrangements"}</Text>
                </View>

                <View style={{ left: 20, flexDirection: KEY.ROW }}>
                    <View style={STYLE.Style.card_1}>
                        <Image style={{ margin: 10, width: WIDTH * 0.2, height: WIDTH * 0.2, borderRadius: 100, alignSelf: KEY.CENTER }} source={bedicon} />
                        <View style={{ margin: 10, flexDirection: KEY.COLUMN, justifyContent: KEY.CENTER, alignItems: KEY.CENTER }}>
                            <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.BLACK }}>{"Bedroom 1"}</Text>
                            <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_18, }}>{"1 queen bed"}</Text>
                        </View>
                    </View>

                    <View style={STYLE.Style.card_1}>
                        <Image style={{ margin: 10, width: WIDTH * 0.2, height: WIDTH * 0.2, borderRadius: 100, alignSelf: KEY.CENTER }} source={bedicon} />
                        <View style={{ margin: 10, flexDirection: KEY.COLUMN, justifyContent: KEY.CENTER, alignItems: KEY.CENTER }}>
                            <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.BLACK }}>{"Bedroom 1"}</Text>
                            <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_18, }}>{"1 queen bed"}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: "row", top: 8 }}>
                    <View style={STYLE.Style.card1}>

                        <View style={{ marginTop: -3, flexDirection: KEY.ROW }}>
                            <Text style={{
                                margin: 15,
                                color: COLOR.BLACK,
                                fontSize: TYPOGRAPHY.FONT_SIZE_22,
                                fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
                            }}>{"From $45"}</Text>
                            <Text style={{
                                margin: 17,
                                color: COLOR.BLACK,
                                fontSize: TYPOGRAPHY.FONT_SIZE_20,
                                right: 25
                            }}>{"/night"}</Text>
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Select_date')} >
                                <View style={STYLE.Style.card_2}>
                                    <Text style={{
                                        margin: 5,
                                        textAlign: KEY.CENTER,
                                        color: COLOR.BACKGROUNDCOLOR,
                                        fontSize: TYPOGRAPHY.FONT_SIZE_18,
                                        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
                                    }}>
                                        {"Book Now"}</Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Hotel_2;