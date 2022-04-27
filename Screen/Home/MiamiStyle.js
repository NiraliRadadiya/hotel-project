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
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20
    },
    image_card: {
        width: WIDTH / 1,
        height: WIDTH * 0.5,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
    },
    text_imagebackground: {
        color: COLOR.BACKGROUNDCOLOR,
        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_16
    },
    Place_image: {
        width: WIDTH * 0.4,
        height: WIDTH / 2,
        borderRadius: 20,
        marginTop: 10,
        //borderColor: COLOR.DEFALUTCOLOR,
        //borderWidth: 2
    },
})