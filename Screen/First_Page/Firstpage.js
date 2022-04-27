import React from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StatusBar,
    ImageBackground,
    Dimensions
} from "react-native";
import * as STYLE from './Style';
import * as KEY from '../../context/action/key';
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import img1 from '../../Images/3.jpg'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function Firstpage({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: KEY.CENTER, }}>
            <ScrollView>
                <StatusBar hidden={false} translucent={true} barStyle={KEY.DARK_CONTENT} />
                <ImageBackground source={img1} style={{ height: HEIGHT, width: WIDTH }}>
                    <View style={STYLE.styles.containerView}>
                        <Text style={STYLE.styles.text}>Plane your trip with TravelPro</Text>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Firstpage;