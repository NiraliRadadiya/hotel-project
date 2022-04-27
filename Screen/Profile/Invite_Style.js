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
        fontSize: TYPOGRAPHY.FONT_SIZE_20
    },
    card2: {
        width: WIDTH / 1,
        height: WIDTH / 1,
        //borderWidth: 1,
        backgroundColor: "#EEEEEE"
    },
    card3: {

        width: WIDTH / 1,
        height: WIDTH / 2.90,
        //borderWidth: 1,

        backgroundColor: "#FFFFFF",
        marginTop: 3
    },
    header_text1: {
        margin: 15,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_18,
        alignSelf: KEY.CENTER
    },
    card4: {
        flexDirection: "row",
        alignSelf: KEY.CENTER,
        width: WIDTH / 1.90,
        height: WIDTH / 7,
        borderWidth: 1,
        borderColor: COLOR.BLACK,
        borderRadius: 10,
        borderStyle: 'dashed',
        //margin: 10,
        backgroundColor: COLOR.BACKGROUNDCOLOR,
    },
    card5: {
        flexDirection: "row",
        // alignSelf: KEY.CENTER,
        width: WIDTH / 2.30,
        height: WIDTH / 8,
        //borderWidth: 1,
        borderColor: COLOR.BLACK,
        borderRadius: 100,
        //borderStyle: 'dashed',
        margin: 15,
        backgroundColor: "#8DC88E",
        marginTop: 20
    },
    card6: {
        flexDirection: "row",
        width: WIDTH / 2.30,
        height: WIDTH / 8,
        borderColor: COLOR.BLACK,
        borderRadius: 100,
        margin: 15,
        backgroundColor: "#ffffff",
        marginTop: 20,

    },
})