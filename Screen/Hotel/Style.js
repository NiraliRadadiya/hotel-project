import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const Style = StyleSheet.create({
    header_text: {
        margin: 15,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20
    },
    card: {
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 10,
        width: WIDTH * 0.9,
        height: WIDTH * 0.8,
        margin: 10,
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 3,
    },
    image_card: {
        width: WIDTH * 0.9,
        height: WIDTH * 0.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        marginLeft: 6,
        color: COLOR.DEFAULTLIGHT,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_18
    },
    arrow_left: {
        color: COLOR.BLACK,
        margin: 10,
    },
    card1: {
        width: WIDTH / 1,
        height: HEIGHT / 11,
        //borderWidth: 1,
        flexDirection: "row"
    },
    favr_left: {
        color: COLOR.BLACK,
        margin: 10,
    },
    image1: {
        width: WIDTH / 1,
        height: HEIGHT * 0.5
    },
    animated_icon: {
        width: WIDTH * 0.1,
        height: WIDTH * 0.1,
        borderRadius: 100,
        alignItems: "center",
        margin: 10,
    },
    round_icon: {
        width: WIDTH / 6,
        height: WIDTH / 6,
        borderRadius: 100,
        alignItems: "center",
        borderColor: COLOR.DEFALUTCOLOR,
        borderWidth: 2,

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
    },
    card_1: {
        margin: 10,
        width: WIDTH * 0.4,
        borderRadius: 20,
        borderColor: COLOR.DEFALUTCOLOR,
        borderWidth: 2
    },
    card_2: {
        margin: 10,
        width: WIDTH / 3,
        borderRadius: 20,
        backgroundColor: COLOR.DEFALUTCOLOR,

    }

})