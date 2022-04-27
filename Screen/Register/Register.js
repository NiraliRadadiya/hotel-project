import React from "react";
import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    Dimensions,
    ScrollView,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as STYLES from './Style';
import * as KEY from '../../context/action/key';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as COLOR from '../../context/action/color';
import img1 from '../../Images/3.jpg';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Register({ navigation }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={KEY.ALWAYS}>
            <ImageBackground source={img1} style={{ height: HEIGHT, width: WIDTH }} >
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Firstpage')}>
                        <Feather name="arrow-left" size={30} style={STYLES.styles.arrow_left} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "column" }}>
                    <Text style={STYLES.styles.text}>Register</Text>
                    <TouchableOpacity>
                        <Text style={STYLES.styles.text2}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={STYLES.styles.containerView}>
                    <View style={{ marginTop: 60 }}>
                        <TextInput
                            style={STYLES.styles.logintextinput}
                            placeholder="Username"
                            placeholderTextColor={COLOR.BACKGROUNDCOLOR}
                            keyboardType="default"
                            secureTextEntry={true} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={STYLES.styles.logintextinput}
                            placeholder="Email Id"
                            placeholderTextColor={COLOR.BACKGROUNDCOLOR}
                            keyboardType="default" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={STYLES.styles.logintextinput}
                            placeholder="Password"
                            placeholderTextColor={COLOR.BACKGROUNDCOLOR}
                            keyboardType="default" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            style={STYLES.styles.logintextinput}
                            placeholder="Confirm Password"
                            placeholderTextColor={COLOR.BACKGROUNDCOLOR}
                            keyboardType="default" />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <View style={STYLES.styles.logintextinput1}>
                            <Text style={STYLES.styles.Register_button} >Register</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={STYLES.styles.containerView}>
                        <View style={{ marginTop: 20, alignSelf: "center", flexDirection: "row" }}>
                            <Text style={STYLES.styles.Login_text}> Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={{
                                    color: COLOR.DEFALUTCOLOR,
                                    fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                                    fontSize: TYPOGRAPHY.FONT_SIZE_18
                                }}> {"Login"} </Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default Register;

