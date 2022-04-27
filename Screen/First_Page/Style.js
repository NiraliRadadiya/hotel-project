import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export const styles = StyleSheet.create({

    text: {
        fontSize: TYPOGRAPHY.FONT_SIZE_16,
        color: COLOR.BACKGROUNDCOLOR,
        fontWeight: "bold",
    },
    containerView: {
        justifyContent: KEY.CENTER,
        alignItems: KEY.CENTER,

    },
})