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
        elevation: 4
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
    card: {
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 20,
        width: WIDTH * 0.9,
        height: WIDTH * 0.7,
        margin: 10,
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 4,
    },
    card_text: {
        margin: 15,
        fontSize: TYPOGRAPHY.FONT_SIZE_18,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    icon: {
        marginLeft: 15,
        color: "#9E9E9E"
    },
    small_card: {
        justifyContent: "space-between",
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 20,
        width: WIDTH - 70,
        height: 100,
        margin: 15,
        borderWidth: 2,
        borderColor: "#9E9E9E",
    },
    vertical_line: {
        height: HEIGHT / 7,
        width: 1,
        backgroundColor: '#9E9E9E',
        alignSelf: "center",
        marginLeft: 5

    },
    text: {
        fontSize: TYPOGRAPHY.FONT_SIZE_16,
        color: COLOR.BLACK
    },
    text1: {
        marginTop: -2,
        marginLeft: 15,
        color: COLOR.BLACK,
        fontSize: 16
        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD

    },
    icon1: {
        color: COLOR.BLACK,

    },
    card2: {
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 20,
        width: WIDTH * 0.9,
        height: WIDTH * 0.6,
        margin: 10,
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 4,
    },
    card_1: {
        width: WIDTH - 25,
        height: WIDTH / 7,
        flexDirection: "row",
        backgroundColor: COLOR.DEFALUTCOLOR,
        borderRadius: 20,
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER
    },

    card_2: {
        margin: 10,
        width: WIDTH / 3,
        borderRadius: 20,
        backgroundColor: COLOR.DEFALUTCOLOR,

    }
})