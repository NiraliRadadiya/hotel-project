import React from "react";
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
} from "react-native";
import * as STYLE from './Style';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import img1 from '../../Images/3.jpg';
import img2 from '../../Images/4.jpeg';
import img3 from '../../Images/5.jpeg';
import img4 from '../../Images/6.jpeg';
import img5 from '../../Images/7.jpeg';
import img6 from '../../Images/1.jpeg';
import img8 from '../../Images/9.jpeg';
import img9 from '../../Images/hotel2.jpeg';
import img10 from '../../Images/hotel1.jpeg';
import img11 from '../../Images/hotel3.jpeg';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
function Home({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#F4F4F4" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ justifyContent: KEY.CENTER, alignItems: KEY.CENTER }}>
                    <View style={STYLE.Style.containerView}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column", marginRight: WIDTH / 5 + 100, marginTop: 50 }}>
                                <Text style={STYLE.Style.text}>{"Hello, Ellison"}</Text>
                                <Text style={STYLE.Style.text1}>{"Find deals"}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                    <Image style={STYLE.Style.leftside_image}
                                        source={img2} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <View style={STYLE.Style.Serachinput}>
                            <TouchableOpacity>
                                <Feather name="search" size={20} style={STYLE.Style.searchicon} />
                            </TouchableOpacity>
                            <TextInput
                                style={STYLE.Style.searchText}
                                placeholder=" Search city,hotel,etc "
                                placeholderTextColor={"#CBCBCB"} />
                        </View>
                    </View>
                    <View style={STYLE.Style.containerView}>
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ marginRight: "40%", margin: 8 }}>
                                <Text style={STYLE.Style.text1}>{"Popular Places"}</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                < TouchableOpacity >
                                    <Text style={STYLE.Style.text}>{"View all"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "6%" }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={{ marginRight: 15, }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Miami')}>
                                    <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                        source={img3} >
                                        <View style={{ marginTop: "85%", margin: 20, flexDirection: "column" }}>
                                            <Text style={STYLE.Style.text_imagebackground}>Miami</Text>
                                            <Text style={STYLE.Style.text_imagebackground}>783 Properties</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginRight: 15, }}>
                                <TouchableOpacity>
                                    <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                        source={img4} >
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
                                        source={img1} >
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
                                        source={img6} >
                                        <View style={{ marginTop: "85%", margin: 20, flexDirection: "column" }}>
                                            <Text style={STYLE.Style.text_imagebackground}>Vietnam</Text>
                                            <Text style={STYLE.Style.text_imagebackground}>193 Properties</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={STYLE.Style.containerView}>
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ marginRight: "25%", margin: 8 }}>
                                <Text style={STYLE.Style.text1}>{"Popular Experiences"}</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                < TouchableOpacity >
                                    <Text style={STYLE.Style.text}>{"View all"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "6%", marginBottom: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View style={{ marginRight: 15, }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Wine_not_taste')}>
                                    <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                        source={img1} >
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={12} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 3, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.Style.rate_text}>4.9</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.Style.rate_text_2}>Wine not taste</Text>
                                    <Text style={STYLE.Style.rate_text_2}>our passion</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        color: COLOR.DEFAULTLIGHT,
                                        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                                        marginLeft: 10
                                    }}>Wine tasting</Text>
                                    <Text style={STYLE.Style.rate_text_2}>From $35/person</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 15, }}>
                                <TouchableOpacity>
                                    <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                        source={img8} >
                                    </ImageBackground>

                                </TouchableOpacity>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={12} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 3, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.Style.rate_text}>5.0</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.Style.rate_text_2}>{"Fine Wines & Ruir"}</Text>
                                    <Text style={STYLE.Style.rate_text_2}>Bars</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        color: COLOR.DEFAULTLIGHT,
                                        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                                        marginLeft: 10
                                    }}>Wine tasting</Text>
                                    <Text style={STYLE.Style.rate_text_2}>From $61/person</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: 15, }}>
                                <TouchableOpacity>
                                    <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                        source={img5} >
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={12} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 3, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.Style.rate_text}>4.9</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.Style.rate_text_2}>Wine not taste</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        color: COLOR.DEFAULTLIGHT,
                                        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                                        marginLeft: 10
                                    }}>Wine tasting</Text>
                                    <Text style={STYLE.Style.rate_text_2}>From $35/person</Text>
                                </View>

                            </View>
                            <View style={{ marginRight: 15, }}>
                                <TouchableOpacity >
                                    <ImageBackground borderRadius={20} style={STYLE.Style.Place_image}
                                        source={img6} >
                                    </ImageBackground>
                                </TouchableOpacity>
                                <View style={{ margin: 10, flexDirection: "row" }}>
                                    <FontAwesome name="star" size={12} color={COLOR.DEFALUTCOLOR} style={{ marginTop: 3, }} />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={STYLE.Style.rate_text}>4.96</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={STYLE.Style.rate_text_2}>Wine not taste</Text>
                                    <Text style={{
                                        fontSize: 18,
                                        color: COLOR.DEFAULTLIGHT,
                                        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                                        marginLeft: 10
                                    }}>Wine tasting</Text>
                                    <Text style={STYLE.Style.rate_text_2}>From $35/person</Text>
                                </View>

                            </View>
                        </ScrollView>

                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Hotel_2')}>
                            <View style={STYLE.Style.card}>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Image source={img9} style={STYLE.Style.image_card} />
                                </View>
                                <View style={{ alignItems: KEY.FLEX_START, justifyContent: KEY.FLEX_START }} >
                                    <Text style={STYLE.Style.header_text}>Hotel des Comedies Paris</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: -10, marginLeft: 12 }}>
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Text style={STYLE.Style.text}>(5.0)</Text>
                                </View>
                                <View style={{ marginTop: -35, marginRight: 20 }}>
                                    <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_26, color: COLOR.DEFALUTCOLOR }}>$70</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 12 }}>
                                    <View style={{ marginTop: 3 }}>
                                        <Entypo name="location-pin" size={20} />
                                    </View>
                                    <Text style={STYLE.Style.text3}>Paris</Text>

                                </View>
                                <View style={{ marginTop: -30, marginRight: 20 }}>
                                    <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.DEFAULTLIGHT, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>per night</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Hotel_2')}>
                            <View style={STYLE.Style.card}>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Image source={img10} style={STYLE.Style.image_card} />
                                </View>
                                <View style={{ alignItems: KEY.FLEX_START, justifyContent: KEY.FLEX_START }} >
                                    <Text style={STYLE.Style.header_text}>Paris France Hotel</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: -10, marginLeft: 12 }}>
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Text style={STYLE.Style.text}>(5.0)</Text>
                                </View>
                                <View style={{ marginTop: -35, marginRight: 20 }}>
                                    <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_26, color: COLOR.DEFALUTCOLOR }}>$45</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 12 }}>
                                    <View style={{ marginTop: 3 }}>
                                        <Entypo name="location-pin" size={20} />
                                    </View>
                                    <Text style={STYLE.Style.text3}>London</Text>

                                </View>
                                <View style={{ marginTop: -30, marginRight: 20 }}>
                                    <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.DEFAULTLIGHT, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>per night</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Hotel_2')}>
                            <View style={STYLE.Style.card}>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Image source={img11} style={STYLE.Style.image_card} />
                                </View>
                                <View style={{ alignItems: KEY.FLEX_START, justifyContent: KEY.FLEX_START }} >
                                    <Text style={STYLE.Style.header_text}>Hotel My Home</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: -10, marginLeft: 12 }}>
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Entypo name="star" size={24} color={COLOR.RATE_START} />
                                    <Text style={STYLE.Style.text}>(5.0)</Text>
                                </View>
                                <View style={{ marginTop: -35, marginRight: 20 }}>
                                    <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_26, color: COLOR.DEFALUTCOLOR }}>$70</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 12 }}>
                                    <View style={{ marginTop: 3 }}>
                                        <Entypo name="location-pin" size={20} />
                                    </View>
                                    <Text style={STYLE.Style.text3}>Paris</Text>

                                </View>
                                <View style={{ marginTop: -30, marginRight: 20 }}>
                                    <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.DEFAULTLIGHT, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>per night</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView >
        </SafeAreaView >
    )
}

export default Home;