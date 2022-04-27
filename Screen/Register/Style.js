import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: COLOR.BACKGROUNDCOLOR,
        fontWeight: "bold",
        margin: 15,

    },
    text2: {
        fontSize: TYPOGRAPHY.FONT_SIZE_17,
        color: COLOR.BACKGROUNDCOLOR,
        marginLeft: 16
    },
    containerView: {
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER,
    },
    logintextinput: {
        borderWidth: 2,
        borderColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 100,
        width: WIDTH - 30,
        height: 50,
        paddingLeft: 15,
        fontSize: TYPOGRAPHY.FONT_SIZE_16,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
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
    arrow_left: {
        color: COLOR.BACKGROUNDCOLOR,
        margin: 10
    },
    Login_text: {
        color: COLOR.BACKGROUNDCOLOR,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_18,
    },


})