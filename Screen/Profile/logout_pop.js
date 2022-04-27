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
    StyleSheet,
    Modal
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './logoutstyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img5 from '../../Images/7.jpeg';
import img6 from '../../Images/1.jpeg';

const Iconsize = 24;
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Logout_pop({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#ABABAB" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <Modal
                    animationType={'fade'}
                    transparent={true} >
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', }}>


                        <View style={STYLE.Style.modal}>
                            <View style={{ marginTop: 10 }}>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={STYLE.Style.text2}>{"You Sure want to logout?"}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity>
                                        <View style={STYLE.Style.card5}>
                                            <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_20, color: COLOR.BLACK, margin: 10, marginLeft: 35 }}>Cancel</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={STYLE.Style.card6}>
                                            <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_20, color: COLOR.BACKGROUNDCOLOR, margin: 10, marginLeft: 35 }}>Log Out</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: "column" }}>
                    <View style={STYLE.Style.card1}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLE.Style.header_text}>Profile</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Update_profile')}>
                                    <Image source={img6} style={STYLE.Style.img} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={STYLE.Style.text}>Ellison Perry</Text>
                                    <Text style={{ marginLeft: 10, color: "#B9B9B9", fontSize: 16, fontWeight: "bold" }}>1234567890</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Update_profile')}>
                                            <Feather name="chevron-right" size={24} style={{ marginLeft: "79%", marginTop: -35, color: "#B9B9B9" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={STYLE.Style.card2}>
                    <View style={{ margin: 20, marginTop: 30 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialIcons name="notifications" size={24} />
                                <Text style={STYLE.Style.text1}>{"Notifications"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity>
                                    <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialIcons name="language" size={24} />
                                <Text style={STYLE.Style.text1}>{"language"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity>
                                    <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialIcons name="settings" size={24} />
                                <Text style={STYLE.Style.text1}>{"Settings"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity>
                                    <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome name="users" size={24} />
                                <Text style={STYLE.Style.text1}>{"Invite Friends"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity>
                                    <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="cash-multiple" size={24} />
                                <Text style={STYLE.Style.text1}>{"TravelPro Cash"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity>
                                    <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="headphones" size={24} />
                                <Text style={STYLE.Style.text1}>{"Supoort"}</Text>
                            </View>
                            <View style={{ flexDirection: "row", }}>
                                <TouchableOpacity>
                                    <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={STYLE.Style.card3}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Feather name="log-out" size={24} />
                            <Text style={STYLE.Style.text1}>{"Logout"}</Text>
                        </View>
                        <View style={{ flexDirection: "row", }}>
                            <TouchableOpacity>
                                <Feather name="chevron-right" size={24} style={{ color: "#B9B9B9" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Logout_pop;