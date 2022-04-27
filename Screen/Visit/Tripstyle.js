import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    card1: {
        width: WIDTH / 1,
        height: HEIGHT / 11,
        //borderWidth: 1,
        //flexDirection: "row"
    },
    arrow_left: {
        color: COLOR.BLACK,
        margin: 10,
    },
    header_text: {
        //margin: 15,
        color: COLOR.BLACK,
        fontSize: TYPOGRAPHY.FONT_SIZE_20,
        marginTop: -30
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
    containerView: {
        flex: 1,
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER,
    },
    text1: {
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_22
    },
    Place_image: {
        width: WIDTH * 0.4,
        height: WIDTH / 2,
        borderRadius: 20,
        marginTop: 10,
        //borderColor: COLOR.DEFALUTCOLOR,
        //borderWidth: 2
    },
    text_imagebackground: {
        color: COLOR.BACKGROUNDCOLOR,
        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_16
    },
    rate_text: {
        fontSize: 18,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        color: COLOR.BLACK
    },
    rate_text_2: {
        fontSize: 18,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        marginLeft: 10,
        color: COLOR.BLACK
    },
    text: {
        marginLeft: 6,
        color: COLOR.DEFAULTLIGHT,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_18
    },
    box: {
        width: WIDTH / 4,
        height: WIDTH / 9,
        //borderWidth: 1,
        backgroundColor: "#F44236",
        //borderRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10
    }
})