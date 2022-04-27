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

    },
    header_text1: {
        marginLeft: 5,
        color: COLOR.BLACK,
        fontSize: TYPOGRAPHY.FONT_SIZE_26,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
    },
    text: {
        marginLeft: 6,
        color: COLOR.DEFAULTLIGHT,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_18
    },
    rate_text: {
        fontSize: 18,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        color: COLOR.BLACK
    },
})