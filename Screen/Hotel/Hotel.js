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
import img1 from '../../Images/hotel2.jpeg';
import img2 from '../../Images/hotel1.jpeg';
import img3 from '../../Images/hotel3.jpeg';
import img4 from '../../Images/6.jpeg';
import img5 from '../../Images/7.jpeg';
import img6 from '../../Images/1.jpeg';

import img8 from '../../Images/9.jpeg';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
function Hotel({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#F4F4F4" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ flex: 1, alignItems: KEY.CENTER, justifyContent: KEY.CENTER }}>
                    <Text style={STYLE.Style.header_text}>Hotel</Text>
                </View>
                <View style={{
                    borderWidth: 1, marginTop: 5, borderColor: "#eaebea",
                    width: WIDTH / 1
                }} />

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel_2')}>
                        <View style={STYLE.Style.card}>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Image source={img1} style={STYLE.Style.image_card} />
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
                                <Text style={STYLE.Style.text}>Paris</Text>

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
                                <Image source={img2} style={STYLE.Style.image_card} />
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
                                <Text style={STYLE.Style.text}>London</Text>

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
                                <Image source={img3} style={STYLE.Style.image_card} />
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
                                <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_26, color: COLOR.DEFALUTCOLOR }}>$55</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 12 }}>
                                <View style={{ marginTop: 3 }}>
                                    <Entypo name="location-pin" size={20} />
                                </View>
                                <Text style={STYLE.Style.text}>Vietnam</Text>

                            </View>
                            <View style={{ marginTop: -30, marginRight: 20 }}>
                                <Text style={{ alignSelf: "flex-end", fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.DEFAULTLIGHT, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>per night</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default Hotel;