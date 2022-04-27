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
import * as STYLE from './Invite_Style';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import img5 from '../../Images/7.jpeg';
import img6 from '../../Images/1.jpeg';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Invite_friend({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#ffffff" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={STYLE.Style.card1}>
                        <View style={{ marginTop: 3 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                <Feather name="arrow-left" size={24} style={STYLE.Style.arrow_left} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: -3 }}>
                            <Text style={STYLE.Style.header_text}>{"Invite Friends"}</Text>
                        </View>
                    </View>
                </View>

                <View style={STYLE.Style.card2}>
                    <View style={STYLE.Style.card3}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLE.Style.header_text}>
                                {"Share Code & save at Least 25%"}
                            </Text>
                            <Text style={{ fontSize: 16, textAlign: "left", marginLeft: 15, fontFamily: TYPOGRAPHY.FONT_FAMILY_REGULAR }}>
                                {"Your friend gets $15 TravelPro cash on sign up. You get $15 when they book trip or experience of $75 or more within 21 days. you can earn upto $200 TravelPro Cash."}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={STYLE.Style.header_text1}>
                            Your Referral Code
                        </Text>
                        <View>
                            <View style={STYLE.Style.card4}>
                                <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_18, color: COLOR.BLACK, margin: 15, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>SLP809</Text>
                                <View style={{ margin: 15, marginLeft: "35%" }}>
                                    <TouchableOpacity>
                                        <MaterialCommunityIcons name="content-copy" size={24} color="#9AD8E0" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <View style={STYLE.Style.card5}>
                                    <Text style={{ margin: 15, fontSize: TYPOGRAPHY.FONT_SIZE_17, color: COLOR.BACKGROUNDCOLOR, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>Whatsapp</Text>
                                    <TouchableOpacity>
                                        <FontAwesome name="whatsapp" size={26} style={{ margin: 12, color: COLOR.BACKGROUNDCOLOR }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={STYLE.Style.card6}>
                                    <Text style={{ margin: 15, fontSize: TYPOGRAPHY.FONT_SIZE_17, color: COLOR.BLACK, fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD }}>More Options</Text>
                                    <TouchableOpacity>
                                        <Feather name="share-2" size={26} style={{ color: COLOR.BLACK, marginTop: 12 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Invite_friend;