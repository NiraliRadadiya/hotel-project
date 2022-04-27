import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const Style = StyleSheet.create({
    card1: {
        width: WIDTH / 1,
        height: HEIGHT / 11,
        //borderWidth: 1,
        flexDirection: "row",
        backgroundColor: COLOR.DEFALUTCOLOR,
    },
    arrow_left: {
        color: COLOR.BLACK,
        margin: 10,
    },
    header_text: {
        margin: 15,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20,

    },
    messgebox: {
        margin: 10
    },
    text: {
        margin: 10,
        color: COLOR.BLACK,
        fontSize: TYPOGRAPHY.FONT_SIZE_20
    },
    card2: {
        width: WIDTH / 1,
        height: WIDTH / 5,
        //borderWidth: 1,
        flexDirection: "row",
        backgroundColor: "#dcf1ed",
    },

})