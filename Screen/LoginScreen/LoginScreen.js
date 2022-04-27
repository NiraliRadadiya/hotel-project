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
} from "react-native";

import * as STYLES from './Style';
import * as KEY from '../../context/action/key';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as COLOR from '../../context/action/color';
import img1 from '../../Images/3.jpg'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function LoginScreen({ navigation }) {
    return (


        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={KEY.ALWAYS}>
            <ImageBackground source={img1} style={{ height: HEIGHT, width: WIDTH }} >
                <View style={{ flexDirection: "column", marginTop: 30 }}>
                    <Text style={STYLES.styles.text}>Welcome back</Text>
                    <Text style={STYLES.styles.text2}>Login your account</Text>
                </View>

                <View style={STYLES.styles.containerView}>
                    <View style={{ marginTop: 60, }}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={STYLES.styles.logintextinput1}>
                            <Text style={STYLES.styles.login_button} >Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={STYLES.styles.containerView}>
                    <View style={{ marginTop: 20, alignSelf: "center", flexDirection: "row" }}>
                        <Text style={STYLES.styles.Register}> Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={{
                                color: COLOR.DEFALUTCOLOR,
                                fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
                                fontSize: TYPOGRAPHY.FONT_SIZE_18
                            }}> Register </Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        </ScrollView>


    )
}

export default LoginScreen;