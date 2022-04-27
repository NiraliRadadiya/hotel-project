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
import * as STYLE from './updateprofile_style'
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import img5 from '../../Images/2.png';
import img6 from '../../Images/3.jpg';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Update_profile({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#F4F4F4" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <View style={{ marginRight: "85%", marginTop: 10, justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Feather name="arrow-left" size={24} style={STYLE.Style.arrow_left} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <Image style={STYLE.Style.img_style} source={img6} />
                    <TouchableOpacity>
                        <FontAwesome5 name="edit" size={20} style={{ alignSelf: "center", left: 20, top: -40, color: COLOR.DEFALUTCOLOR }} />
                    </TouchableOpacity>
                </View>

                <View style={STYLE.Style.containerView}>
                    <View style={{}}>
                        <TextInput
                            style={STYLE.Style.logintextinput}
                            placeholder="Full Name"
                            placeholderTextColor={COLOR.DEFAULTLIGHT}
                            keyboardType="default"
                            secureTextEntry={true} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={STYLE.Style.logintextinput}
                            placeholder="Password"
                            placeholderTextColor={COLOR.DEFAULTLIGHT}
                            keyboardType="default" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={STYLE.Style.logintextinput}
                            placeholder="Phone"
                            placeholderTextColor={COLOR.DEFAULTLIGHT}
                            keyboardType="default" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={STYLE.Style.logintextinput}
                            placeholder="Email"
                            placeholderTextColor={COLOR.DEFAULTLIGHT}
                            keyboardType="default" />
                    </View>
                </View>
                <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('Profile')}>
                    <View style={STYLE.Style.logintextinput1}>
                        <Text style={STYLE.Style.Register_button} >Save</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Update_profile;