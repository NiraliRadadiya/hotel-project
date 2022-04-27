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
    Modal
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as STYLE from './VisitStyle';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img5 from '../../Images/Visit1.jpeg';
import img6 from '../../Images/1.jpeg';



const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


function Visit({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, backgroundColor: "#ffffff" }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={false} barStyle={KEY.DARK_CONTENT} backgroundColor={COLOR.STATUSBARCOLOR} />
                <ImageBackground source={img5} style={{ height: HEIGHT, width: WIDTH }}>
                    <View style={STYLE.styles.containerView}>
                        <Text style={STYLE.styles.text}>{"Where to trip?"}</Text>
                        <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_20, color: "#B8B9B8", marginTop: 10 }}>{"Plan your next trip with TravelPro"}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Trip')}>
                            <View style={STYLE.styles.card6}>
                                <Text style={{ fontSize: TYPOGRAPHY.FONT_SIZE_20, color: COLOR.DEFALUTCOLOR, alignSelf: "center", margin: 10 }}>{"Explore Trip"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Visit;