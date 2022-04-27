import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const Style = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER,
    },
    text: {
        color: COLOR.DEFAULTLIGHT,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,

    },
    text1: {
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_24
    },
    leftside_image: {
        width: WIDTH / 6,
        height: WIDTH / 6,
        borderRadius: 20,
        marginTop: 30,
        borderColor: COLOR.DEFALUTCOLOR,
        borderWidth: 2
    },
    Serachinput: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#CBCBCB",
        borderRadius: 15,
        width: WIDTH * 0.9,
        height: WIDTH / 8,
    },
    searchText: {
        fontSize: TYPOGRAPHY.FONT_SIZE_16,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    searchicon: {
        margin: 14,
        color: "#8E8E8E",
    },
    text2: {
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_24,
        //marginRight: "40%",
        marginTop: 20
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
        fontSize: 14,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
    },
    rate_text_2: {
        fontSize: 18,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        marginLeft: 10
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
    header_text: {
        margin: 15,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20
    },
    text3: {
        marginLeft: 6,
        color: COLOR.DEFAULTLIGHT,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_18
    }

})
