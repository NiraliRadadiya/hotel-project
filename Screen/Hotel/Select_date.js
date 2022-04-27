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
    StyleSheet
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './selectdate_style';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Select_date({ navigation }) {
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
                            <Text style={STYLE.Style.header_text}>{"Select Date"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: -15 }}>
                    <View style={STYLE.Style.card}>
                        <View style={{ marginTop: 5 }}>
                            <View style={{ flexDirection: "row", marginLeft: 5 }}>
                                <Text style={STYLE.Style.card_text}>{"From $45"}</Text>
                                <Text style={{ margin: 18, marginLeft: -10, fontSize: TYPOGRAPHY.FONT_SIZE_16 }}>{"/ night"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: -8, marginLeft: 5 }} >
                                <FontAwesome name="tag" size={15} style={STYLE.Style.icon} />
                                <Text style={{ marginLeft: 2, color: "#696969", fontSize: 14, marginTop: -2 }}>{"Pay with stripe,Save 10% or more"}</Text>
                            </View>
                            <View style={STYLE.Style.small_card}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "column", margin: 20, justifyContent: "space-around" }}>
                                            <Text style={STYLE.Style.text}>{"START DATE"}</Text>
                                            <Text style={STYLE.Style.text}>{"2021-08-25"}</Text>
                                        </View>

                                        <TouchableOpacity style={{ margin: 20, marginLeft: -2 }}>
                                            <FontAwesome name="angle-down" size={20} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={STYLE.Style.vertical_line}></View>
                                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                        <View style={{ flexDirection: "column", margin: 20, justifyContent: "space-around" }}>
                                            <Text style={STYLE.Style.text}>{"END DATE"}</Text>
                                            <Text style={STYLE.Style.text}>{"2021-08-26"}</Text>
                                        </View>
                                        <TouchableOpacity style={{ margin: 20, marginLeft: -2 }}>
                                            <FontAwesome name="angle-down" size={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: "column", marginLeft: 20 }}>
                                <Text style={STYLE.Style.text}>{"2021-08-25"}</Text>
                                <View style={{ flexDirection: "row", }}>
                                    <Text style={{ marginLeft: 35, fontSize: 15 }}>to</Text>
                                    <Text style={{ marginLeft: "60%", fontSize: 15, color: COLOR.BLACK, fontSize: 18, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>{"$45"}</Text>
                                    <Text style={{ fontSize: 15, color: COLOR.BLACK, fontSize: 16 }}>{"/night"}</Text>
                                </View>
                                <Text style={STYLE.Style.text}>{"2021-08-26"}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                    <View style={STYLE.Style.card2}>
                        <Text style={{ margin: 18, fontSize: 20, color: COLOR.BLACK, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>{"Rules"}</Text>
                        <View style={{ flexDirection: "column", marginTop: 15 }}>
                            <View style={{ margin: 20, marginTop: -10, flexDirection: "row", }}>
                                <Feather name="clock" size={20} style={STYLE.Style.icon1} />
                                <Text style={STYLE.Style.text1}>{"Check out:11:00 am"}</Text>
                            </View>
                            <View style={{ margin: 20, marginTop: -10, flexDirection: "row", }}>
                                <Feather name="clock" size={20} style={STYLE.Style.icon1} />
                                <Text style={STYLE.Style.text1}>{"Check out:11:00 am"}</Text>
                            </View>
                            <View style={{ margin: 20, marginTop: -10, flexDirection: "row", }}>
                                <FontAwesome name="users" size={20} style={STYLE.Style.icon1} />
                                <Text style={STYLE.Style.text1}>{"Self check-in with lockbox"}</Text>
                            </View>
                            <View style={{ margin: 20, marginTop: -10, flexDirection: "row", }}>
                                <FontAwesome5 name="smoking-ban" size={20} style={STYLE.Style.icon1} />
                                <Text style={STYLE.Style.text1}>{"No smoking"}</Text>
                            </View>
                            <View style={{ margin: 20, marginTop: -10, flexDirection: "row", }}>
                                <MaterialIcons name="pets" size={20} style={STYLE.Style.icon1} />
                                <Text style={STYLE.Style.text1}>{"Pets are allowed"}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                    <View style={STYLE.Style.card2}>
                        <Text style={{ margin: 18, fontSize: 20, color: COLOR.BLACK, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>{"Additional rules"}</Text>
                        <Text style={{ margin: 18, textAlign: "left", alignSelf: "center", fontSize: 16, color: COLOR.BLACK, marginTop: -10 }}>
                            {"1. The apartment can be occupied on the day of the arrival from 2PM and should be vacated before 11AM on the apartment"}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: "row", marginBottom: 10, margin: 10, justifyContent: KEY.CENTER, alignItems: KEY.CENTER }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')} >
                        <View style={STYLE.Style.card_1}>
                            <Text style={{
                                margin: 5,
                                color: COLOR.BACKGROUNDCOLOR,
                                fontSize: TYPOGRAPHY.FONT_SIZE_18,
                                fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,

                            }}>
                                {"Book Now"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Select_date;