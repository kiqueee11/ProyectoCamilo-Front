import {StyleSheet, View} from "react-native";
import React from "react";

export const ParticipantContainer = () => {
    return(
        <View style={styles.contenedor}>

        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 20,
        borderWidth: 1,
        borderColor: "#d3d3d3",
        borderRadius: 10,
    },
})