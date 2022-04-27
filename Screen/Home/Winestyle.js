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
        flexDirection: "row"
    },
    arrow_left: {
        color: COLOR.BLACK,
        margin: 10,
    },
    header_text: {
        margin: 15,
        color: COLOR.BLACK,
        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20
    },
    header_text1: {
        margin: 15,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20,
        marginLeft: 20
    },
    rate_text: {
        fontSize: 14,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,

    },
    wrap: {
        width: WIDTH / 1,
        height: WIDTH * 0.5,

    },
    wrapDot: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    dotActive: {
        margin: 3,


    },
    dot: {
        margin: 3,
        color: 'white'
    }
})