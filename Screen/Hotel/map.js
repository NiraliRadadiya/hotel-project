import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";




function Map({ navigator }) {
    const [state, setState] = useState({
        pickupCords: {
            latitude: 30.7046,
            longitude: 76.7179,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCords: {
            latitude: 30.7333,
            longitude: 76.7794,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })
    const { pickupCords, droplocationCords } = state
    return (
        <View style={{
            ...StyleSheet.absoluteFillObject,
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={pickupCords}
            >
                <MapViewDirections
                    origin={pickupCords}
                    destination={droplocationCords}
                    apikey={GOOGLE_MAPS_APIKEY}
                />
            </MapView>
        </View >
    );
};

export default Map;