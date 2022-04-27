import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export const styles = StyleSheet.create({

    text: {
        fontSize: TYPOGRAPHY.FONT_SIZE_28,
        color: COLOR.BLACK,
        fontWeight: "bold",
    },
    containerView: {
        flexDirection: "column",
        marginTop: WIDTH / 1,
        marginLeft: "6%"
    },
    card6: {
        width: WIDTH / 2,
        height: WIDTH / 8,
        borderColor: COLOR.DEFALUTCOLOR,
        borderRadius: 10,
        marginTop: 15,
        borderWidth: 1,
    },
})