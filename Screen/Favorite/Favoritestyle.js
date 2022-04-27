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
        height: HEIGHT * 0.1,
        //borderWidth: 1,
        backgroundColor: "#FFFFFF",
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
        textAlign: "center"
    },
    header_text1: {

        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20,
    },
    card: {
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 10,
        width: WIDTH - 25,

        margin: 10,
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 3,
    },
    image_card: {
        width: WIDTH - 25,
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
    icon: {
        color: COLOR.DEFALUTCOLOR,

    },
    card_2: {
        margin: 10,
        width: WIDTH / 6,
        borderRadius: 20,
        //backgroundColor: COLOR.DEFALUTCOLOR,
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER

    }


})