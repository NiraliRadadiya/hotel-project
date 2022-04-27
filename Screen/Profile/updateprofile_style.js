import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const Style = StyleSheet.create({
    arrow_left: {
        color: COLOR.BLACK,
        margin: 10,
    },
    img_style: {
        width: 100,
        height: 100,
        alignSelf: "center",
        margin: 30,
        borderRadius: 100
    },
    logintextinput: {
        borderWidth: 2,
        borderColor: COLOR.DEFAULTLIGHT,
        borderRadius: 10,
        width: WIDTH - 30,
        height: 50,
        paddingLeft: 15,
        fontSize: TYPOGRAPHY.FONT_SIZE_16,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
    },
    containerView: {
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER,
    },
    logintextinput1: {
        borderRadius: 100,
        width: WIDTH - 30,
        height: 45,
        backgroundColor: COLOR.DEFALUTCOLOR,
        marginTop: 20
    },
    Register_button: {
        color: COLOR.BACKGROUNDCOLOR,
        fontSize: TYPOGRAPHY.FONT_SIZE_18,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        alignSelf: KEY.CENTER,
        margin: 8
    },


})
