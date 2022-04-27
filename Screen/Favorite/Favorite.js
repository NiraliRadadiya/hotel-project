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
import * as STYLE from './Favoritestyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import img1 from '../../Images/hotel2.jpeg';
import img2 from '../../Images/hotel1.jpeg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import img5 from '../../Images/7.jpeg';
import img6 from '../../Images/1.jpeg';



const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const addGoalHandler = () => {
    if (enteredGoal.length > 0) {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
    } else {
        alert("You have to write something!")
    }
}
function Favorite({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar />
                <View>
                    <View style={STYLE.Style.card1}>
                        <View >
                            <Text style={STYLE.Style.header_text}>{"Favorite"}</Text>
                        </View>
                        {/* <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, marginStart: 40, marginEnd: 40 }}>
                            <TouchableOpacity><Text style={STYLE.Style.header_text1}>{"Hotel"}</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={STYLE.Style.header_text1}>{"Experiences"}</Text></TouchableOpacity>
                        </View> */}

                    </View>
                    {/* <View style={{ flexDirection: "row" }}>

                        <View style={{
                            borderWidth: 0.9, borderColor: COLOR.DEFALUTCOLOR,
                            width: WIDTH * 0.5
                        }} />

                        <View style={{
                            borderWidth: 0.9, borderColor: COLOR.DEFAULTLIGHT,
                            width: WIDTH * 0.5
                        }} />

                    </View> */}
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 5 }}>

                    <View style={STYLE.Style.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('Hotel_2')}>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Image source={img1} style={STYLE.Style.image_card} />
                            </View>
                        </TouchableOpacity>
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
                        <View style={{ justifyContent: KEY.FLEX_END, alignItems: KEY.FLEX_END }}>
                            <TouchableOpacity >
                                <View style={STYLE.Style.card_2}>
                                    <Feather name="trash" size={30} color={COLOR.DEFALUTCOLOR} />
                                </View>

                            </TouchableOpacity>
                        </View>

                    </View>


                </View>


                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: 5 }}>
                    <View style={STYLE.Style.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('Hotel_2')}>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Image source={img2} style={STYLE.Style.image_card} />
                            </View>
                        </TouchableOpacity>
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

                        <View style={{ justifyContent: KEY.FLEX_END, alignItems: KEY.FLEX_END }}>
                            <TouchableOpacity >
                                <View style={STYLE.Style.card_2}>
                                    <Feather name="trash" size={30} color={COLOR.DEFALUTCOLOR} />
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favorite;