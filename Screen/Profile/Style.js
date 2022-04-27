import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as COLOR from '../../context/action/color';
import * as TYPOGRAPHY from '../../context/action/typography';
import * as KEY from '../../context/action/key';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const Style = StyleSheet.create({
    card1: {
        width: WIDTH,
        height: WIDTH * 0.4,
        //borderWidth: 1,
        flexDirection: "row",
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 4,
        backgroundColor: COLOR.BACKGROUNDCOLOR
    },
    header_text: {
        margin: 15,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_20,
    },
    img: {
        width: WIDTH * 0.2,
        height: WIDTH * 0.2,
        borderRadius: 5,
        marginLeft: 15
    },
    text: {
        margin: 10,
        color: COLOR.BLACK,
        fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
        fontSize: TYPOGRAPHY.FONT_SIZE_16,
    },
    card2: {
        margin: 20,
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 20,
        width: WIDTH * 0.9,
        height: WIDTH * 0.7,
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 4,
    },
    icon1: {
        color: "#9C9C9C",
    },
    text1: {
        marginLeft: 10,
        color: COLOR.BLACK,
        fontSize: 18,


        //fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD
    },
    arrow: {
        marginLeft: "70%",
        color: "#9C9C9C",
    },
    card3: {
        margin: 20,
        backgroundColor: COLOR.BACKGROUNDCOLOR,
        borderRadius: 20,
        width: WIDTH * 0.9,
        height: WIDTH / 6,
        borderColor: "black",
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 4,
    },
    modal: {
        //borderWidth: 1,
        width: WIDTH * 0.8,
        height: WIDTH * 0.4,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: "80%"
    },
    text2: {
        flexDirection: "column",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: COLOR.BLACK
    },
    card5: {
        flexDirection: "row",
        // alignSelf: KEY.CENTER,
        width: WIDTH / 3,
        height: WIDTH / 8,
        //borderWidth: 1,
        borderColor: COLOR.BLACK,
        borderRadius: 10,
        //borderStyle: 'dashed',
        margin: 15,
        backgroundColor: "#E0E0E0",
        marginTop: 20
    },
    card6: {
        flexDirection: "row",
        width: WIDTH / 3,
        height: WIDTH / 8,
        borderColor: COLOR.BLACK,
        borderRadius: 10,
        margin: 15,
        //borderWidth: 1,
        backgroundColor: COLOR.DEFALUTCOLOR,
        marginTop: 20,

    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },

})